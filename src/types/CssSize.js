import { throttle } from 'lodash';
import methodElement from '../methods/types/methodElement';
import isElementInDom from '../utility/isElementInDom';

export const AUTO = 'auto';
export const INITIAL = 'initial';
export const INHERIT = 'inherit';
export const NONE = 'none';
export const HUNDRED_PERCENT = '100%';
export const ZERO_PIXELS = '0';

export const PERCENT = '%';
export const PIXELS = 'px';
export const INCHES = 'in';
export const CENTIMETERS = 'cm';
export const MILLIMETERS = 'mm';
export const PICAS = 'pc'; // 12 points or 1/6 of an inch
export const POINTS = 'pt'; // 1/72 of an inch
export const EM = 'em'; // font-size of the current element, specifically the width of the capital "M"
export const EX = 'ex'; // height of the lowercase "x"
export const CH = 'ch'; // width of the character 0
export const ROOT_EM = 'rem'; // font-size of the root element (html)
export const VIEWPORT_HEIGHT = 'vh'; // 1/100 of the viewport height
export const VIEWPORT_WIDTH = 'vw'; // 1/100 of the viewport width
export const VIEWPORT_MIN = 'vmin'; // min of vh and vw

const unitlessSizes = [AUTO, INITIAL, INHERIT, NONE];
const validSizes = [].concat(unitlessSizes, [ZERO_PIXELS]);

const viewPortUnits = [VIEWPORT_HEIGHT, VIEWPORT_WIDTH, VIEWPORT_MIN];
const fontBasedUnits = [EM, EX, CH];
const pixelBasedUnits = [PIXELS, INCHES, CENTIMETERS, MILLIMETERS, PICAS, POINTS];
const rootBasedUnits = [ROOT_EM];
const fixedUnits = [].concat(rootBasedUnits, pixelBasedUnits, fontBasedUnits, viewPortUnits);
const percentUnits = [PERCENT];
const units = [].concat(percentUnits, fixedUnits);

const OR = '|';
const NUMERIC_VALUE = '^[-+]?[0-9]*.?[0-9]+';
const START_SIZE = '^(';
const START_UNIT = NUMERIC_VALUE + '(';
const END = ')$';

const VALID_SIZES_STRING = START_SIZE + validSizes.join(OR) + END;
const ALL_UNITS_STRING = START_UNIT + units.join(OR) + END;

const NUMERIC_REGEX = new RegExp(NUMERIC_VALUE);
const CSS_SIZE_REGEX = new RegExp(VALID_SIZES_STRING + OR + ALL_UNITS_STRING);

const measureUnits = (units, save, element) => {
	const isAttached = !(!element || !isElementInDom(element));
	let thisElement = element || document.createElement('div');
	let originalHeight = window.getComputedStyle(thisElement).height;

	if (!element) {
		thisElement.style.position = 'absolute';
	}
	if (!isAttached) {
		document.body.appendChild(thisElement);
	}

	units.forEach((baseUnit) => {
		thisElement.style.height = '1' + baseUnit;
		save[baseUnit] = parseFloat(window.getComputedStyle(thisElement).height || 0);
	});

	if (!element) {
		thisElement.remove();
		thisElement = null;
	}
	else {
		thisElement.style.height = originalHeight;
		if (!isAttached) {
			thisElement.parentNode.removeChild(thisElement);
		}
	}
};

let oneRem;
const getOneRem = () => {
	if (!oneRem) {
		oneRem = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
	}
	return oneRem;
};

const pixelBasedUnitMeasurements = {};
const viewPortUnitMeasurements = {};
const getMeasurement = (save, units, unit, element) => {
	if (!save[unit]) {
		measureUnits(units, save, element);
	}

	return save[unit];
};

const isNonZeroNumber = (size) => !!size && size !== ZERO_PIXELS && !isNaN(size);

let currentWindowWidth;
let currentWindowHeight;
const onResize = throttle(() => {
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;

	if (currentWindowWidth !== windowWidth || currentWindowHeight !== windowHeight) {
		currentWindowWidth = windowWidth;
		currentWindowHeight = windowHeight;

		measureUnits(viewPortUnits, viewPortUnitMeasurements);
	}
}, 20);
window.addEventListener('resize', onResize, false);
onResize();

const SIZE = Symbol();
const UNITS = Symbol();
const VALUE = Symbol();
const PIXELS_VALUE = Symbol();
const FONT_BASED_UNITS = Symbol();

/**
 * A class for css sizes
 *
 * ## Usage
 * ``` javascript
 * import { CssSize } from 'type-enforcer';
 * ```
 *
 * @class CssSize
 *
 * @arg {String} [size=0]
 */
export default class CssSize {
	constructor(size) {
		this[SIZE] = ZERO_PIXELS;
		this.set(size);
	}

	/**
	 * Determine if something is a valid css size
	 *
	 * @memberof CssSize
	 *
	 * @arg {*} value
	 *
	 * @returns {boolean}
	 */
	static isValid(value) {
		if (value instanceof CssSize) {
			return true;
		}
		if (['string', 'number'].includes(typeof value)) {
			return CSS_SIZE_REGEX.test(value) || isNonZeroNumber(value);
		}
		return false;
	}

	/**
	 * Set the value
	 *
	 * @memberof CssSize
	 * @instance
	 *
	 * @arg {String} size - A valid css size, ie '32px', '1rem', 'auto', etc.
	 *
	 * @returns {this}
	 */
	set(size) {
		if (CssSize.isValid(size)) {
			this[SIZE] = size[SIZE] || (isNonZeroNumber(size) ? size + PIXELS : size + '');
			this[UNITS] = undefined;
			this[VALUE] = undefined;
			this[PIXELS_VALUE] = undefined;
			this[FONT_BASED_UNITS] = {};
		}

		return this;
	}

	/**
	 * Get the units portion of the current value
	 *
	 * @memberof CssSize
	 * @instance
	 *
	 * @returns {String}
	 */
	get units() {
		if (this[UNITS] === undefined && !unitlessSizes.includes(this[SIZE])) {
			this[UNITS] = this[SIZE].replace(NUMERIC_REGEX, '');
		}

		return this[UNITS];
	}

	/**
	 * Get the numeric portion of the current value
	 *
	 * @memberof CssSize
	 * @instance
	 *
	 * @returns {Number}
	 */
	get value() {
		if (this[VALUE] === undefined) {
			this[VALUE] = parseFloat(this[SIZE]);
			if (isNaN(this[VALUE])) {
				this[VALUE] = undefined;
			}
		}

		return this[VALUE];
	}

	/**
	 * Get the pixel equivalent of the current value
	 *
	 * @memberof CssSize
	 * @instance
	 *
	 * @arg {boolean} [isNumber=false] - If true then return a number, else a string with 'px' on the end.
	 *
	 * @returns {Number|String}
	 */
	toPixels(isNumber = false) {
		if (this[PIXELS_VALUE] === undefined) {
			if (unitlessSizes.includes(this[SIZE])) {
				this[PIXELS_VALUE] = this[SIZE];
			}
			else {
				const units = this.units;

				if (this.isPercent) {
					this[PIXELS_VALUE] = this[SIZE];
				}
				else {
					if (units === ROOT_EM) {
						this[PIXELS_VALUE] = getOneRem();
					}
					else if (pixelBasedUnits.includes(units)) {
						this[PIXELS_VALUE] = getMeasurement(pixelBasedUnitMeasurements, pixelBasedUnits, units);
					}
					else if (viewPortUnits.includes(units)) {
						this[PIXELS_VALUE] = getMeasurement(viewPortUnitMeasurements, viewPortUnits, units);
					}
					else if (fontBasedUnits.includes(units)) {
						this[PIXELS_VALUE] = getMeasurement(this[FONT_BASED_UNITS], fontBasedUnits, units, this.element());
					}
					else {
						this[PIXELS_VALUE] = 1;
					}

					this[PIXELS_VALUE] *= this.value || 0;
				}
			}
		}

		return (!isNumber && typeof this[PIXELS_VALUE] === 'number') ? this[PIXELS_VALUE] + (this[PIXELS_VALUE] !== 0 ? PIXELS : '') : this[PIXELS_VALUE];
	}

	/**
	 * Determine if the current value is 'auto'
	 *
	 * @memberof CssSize
	 * @instance
	 *
	 * @returns {boolean}
	 */
	get isAuto() {
		return this[SIZE] === AUTO;
	}

	/**
	 * Determine if the current value is a fixed size
	 *
	 * @memberof CssSize
	 * @instance
	 *
	 * @returns {boolean}
	 */
	get isFixed() {
		return fixedUnits.includes(this.units);
	}

	/**
	 * Determine if the current value is a percent size
	 *
	 * @memberof CssSize
	 * @instance
	 *
	 * @returns {boolean}
	 */
	get isPercent() {
		return percentUnits.includes(this.units);
	}

	/**
	 * Determine if another size is equivalent to this one
	 *
	 * @memberof CssSize
	 * @instance
	 *
	 * @arg {CssSize|String} size
	 *
	 * @returns {boolean}
	 */
	isSame(size) {
		if (size instanceof CssSize) {
			return size.toPixels(true) === this.toPixels(true);
		}
		if (isNonZeroNumber(size)) {
			return parseFloat(size) === this.value && this.units === PIXELS;
		}
		if (size === 0 || size === ZERO_PIXELS) {
			return this[SIZE] === ZERO_PIXELS;
		}
		return size === this[SIZE];
	}

	/**
	 * Get the current value as a string
	 *
	 * @memberof CssSize
	 * @instance
	 *
	 * @returns {String}
	 */
	toString() {
		return this[SIZE] + '';
	}
}

Object.assign(CssSize.prototype, {
	/**
	 * Set the element to measure font based units against
	 *
	 * @method
	 * @memberof CssSize
	 * @instance
	 *
	 * @arg {Element} [element] - A DOM element
	 *
	 * @returns {this|Element}
	 */
	element: methodElement({
		set: function() {
			this[FONT_BASED_UNITS] = {};
		}
	})
});
