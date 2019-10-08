import isFloat from '../checks/types/isFloat';
import methodElement from '../methods/types/methodElement';
import isElementInDom from '../utility/isElementInDom';
import PrivateVars from '../utility/PrivateVars';
import throttle from '../utility/throttle';

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

const isNonZeroNumber = (size) => !!size && size !== ZERO_PIXELS && isFloat(size, true);

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

const _ = new PrivateVars();

/**
 * A class for css sizes
 *
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
		_.set(this, {
			size: ZERO_PIXELS
		});
		this.set(size);
	}

	/**
	 * Determine if something is a valid css size
	 *
	 * @memberOf CssSize
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
	 * @memberOf CssSize
	 * @instance
	 *
	 * @arg {String} size - A valid css size, ie '32px', '1rem', 'auto', etc.
	 *
	 * @returns {this}
	 */
	set(size) {
		const _self = _(this);

		if (CssSize.isValid(size)) {
			_self.size = _(size) ? _(size).size : undefined;
			if (!_self.size) {
				_self.size = isNonZeroNumber(size) ? size + PIXELS : size + '';
			}
			_self.units = undefined;
			_self.value = undefined;
			_self.pixelsValue = undefined;
			_self.fontBasedUnits = {};
		}

		return this;
	}

	/**
	 * Get the units portion of the current value
	 *
	 * @memberOf CssSize
	 * @instance
	 *
	 * @returns {String}
	 */
	get units() {
		const _self = _(this);

		if (_self.units === undefined && !unitlessSizes.includes(_self.size)) {
			_self.units = _self.size.replace(NUMERIC_REGEX, '');
		}

		return _self.units;
	}

	/**
	 * Get the numeric portion of the current value
	 *
	 * @memberOf CssSize
	 * @instance
	 *
	 * @returns {Number}
	 */
	get value() {
		const _self = _(this);

		if (_self.value === undefined) {
			_self.value = parseFloat(_self.size);
			if (isNaN(_self.value)) {
				_self.value = undefined;
			}
		}

		return _self.value;
	}

	/**
	 * Get the pixel equivalent of the current value
	 *
	 * @memberOf CssSize
	 * @instance
	 *
	 * @arg {boolean} [isNumber=false] - If true then return a number, else a string with 'px' on the end.
	 *
	 * @returns {Number|String}
	 */
	toPixels(isNumber = false) {
		const _self = _(this);

		if (_self.pixelsValue === undefined) {
			if (unitlessSizes.includes(_self.size)) {
				_self.pixelsValue = _self.size;
			}
			else {
				const units = this.units;

				if (this.isPercent) {
					_self.pixelsValue = _self.size;
				}
				else {
					if (units === ROOT_EM) {
						_self.pixelsValue = getOneRem();
					}
					else if (pixelBasedUnits.includes(units)) {
						_self.pixelsValue = getMeasurement(pixelBasedUnitMeasurements, pixelBasedUnits, units);
					}
					else if (viewPortUnits.includes(units)) {
						_self.pixelsValue = getMeasurement(viewPortUnitMeasurements, viewPortUnits, units);
					}
					else if (fontBasedUnits.includes(units)) {
						_self.pixelsValue = getMeasurement(_self.fontBasedUnits, fontBasedUnits, units, this.element());
					}
					else {
						_self.pixelsValue = 1;
					}

					_self.pixelsValue *= this.value || 0;
				}
			}
		}

		return (!isNumber && typeof _self.pixelsValue === 'number') ? _self.pixelsValue + (_self.pixelsValue !== 0 ? PIXELS : '') : _self.pixelsValue;
	}

	/**
	 * Determine if the current value is 'auto'
	 *
	 * @memberOf CssSize
	 * @instance
	 *
	 * @returns {boolean}
	 */
	get isAuto() {
		return _(this).size === AUTO;
	}

	/**
	 * Determine if the current value is a fixed size
	 *
	 * @memberOf CssSize
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
	 * @memberOf CssSize
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
	 * @memberOf CssSize
	 * @instance
	 *
	 * @arg {CssSize|String} size
	 *
	 * @returns {boolean}
	 */
	isSame(size) {
		const _self = _(this);

		if (size instanceof CssSize) {
			return size.toPixels(true) === this.toPixels(true);
		}
		if (isNonZeroNumber(size)) {
			return parseFloat(size) === this.value && this.units === PIXELS;
		}
		if (size === 0 || size === ZERO_PIXELS) {
			return _self.size === ZERO_PIXELS;
		}
		return size === _self.size;
	}

	/**
	 * Get the current value as a string
	 *
	 * @memberOf CssSize
	 * @instance
	 *
	 * @returns {String}
	 */
	toString() {
		return _(this).size + '';
	}
}

Object.assign(CssSize.prototype, {
	/**
	 * Set the element to measure font based units against
	 *
	 * @method
	 * @memberOf CssSize
	 * @instance
	 *
	 * @arg {Element} [element] - A DOM element
	 *
	 * @returns {this|Element}
	 */
	element: methodElement({
		set() {
			_(this).fontBasedUnits = {};
		}
	})
});
