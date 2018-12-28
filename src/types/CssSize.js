import { concat, defer, each, join, throttle } from 'lodash';

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
const validSizes = concat(unitlessSizes, [ZERO_PIXELS]);

const viewPortUnits = [VIEWPORT_HEIGHT, VIEWPORT_WIDTH, VIEWPORT_MIN];
const fontBasedUnits = [EM, EX, CH];
const pixelBasedUnits = [PIXELS, INCHES, CENTIMETERS, MILLIMETERS, PICAS, POINTS];
const rootBasedUnits = [ROOT_EM];
const fixedUnits = concat(rootBasedUnits, pixelBasedUnits, fontBasedUnits, viewPortUnits);
const percentUnits = [PERCENT];
const units = concat(percentUnits, fixedUnits);

const OR = '|';
const NUMERIC_VALUE = '^[-+]?[0-9]*.?[0-9]+';
const START_SIZE = '^(';
const START_UNIT = NUMERIC_VALUE + '(';
const END = ')$';

const VALID_SIZES_STRING = START_SIZE + join(validSizes, OR) + END;
const ALL_UNITS_STRING = START_UNIT + join(units, OR) + END;

const NUMERIC_REGEX = new RegExp(NUMERIC_VALUE);
const CSS_SIZE_REGEX = new RegExp(VALID_SIZES_STRING + OR + ALL_UNITS_STRING);

const measureUnits = (units, save, element) => {
	let thisElement = element || document.createElement('div');
	let originalHeight = window.getComputedStyle(thisElement).height;

	if (!element) {
		thisElement.style.position = 'absolute';
		document.body.appendChild(thisElement);
	}

	each(units, (baseUnit) => {
		thisElement.style.height = '1' + baseUnit;
		save[baseUnit] = parseFloat(window.getComputedStyle(thisElement).height || 0);
	});

	if (!element) {
		thisElement.remove();
		thisElement = null;
	}
	else {
		thisElement.style.height = originalHeight;
	}
};

let oneRem;
/**
 * Returns the pixel value of one rem unit
 *
 * @function getOneRem
 *
 * @return {string}
 */
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

const isNonZeroNumber = (size) => size && size !== ZERO_PIXELS && !isNaN(size);

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
const ELEMENT = Symbol();

export default class CssSize {
	constructor(size) {
		this[SIZE] = ZERO_PIXELS;
		this.set(size);
	}

	static isValid(size) {
		if (CssSize.isInstance(size)) {
			return true;
		}
		if (['string', 'number'].includes(typeof size)) {
			return CSS_SIZE_REGEX.test(size) || isNonZeroNumber(size);
		}
		return false;
	}

	static isInstance(size) {
		return size instanceof CssSize;
	}

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

	element(element) {
		if (arguments.length) {
			if (element !== this[ELEMENT]) {
				this[ELEMENT] = element;
				this[FONT_BASED_UNITS] = {};
			}

			return this;
		}

		return this[ELEMENT];
	}

	get units() {
		if (this[UNITS] === undefined && !unitlessSizes.includes(this[SIZE])) {
			this[UNITS] = this[SIZE].replace(NUMERIC_REGEX, '');
		}

		return this[UNITS];
	}

	get value() {
		if (this[VALUE] === undefined) {
			this[VALUE] = parseFloat(this[SIZE]);
			if (isNaN(this[VALUE])) {
				this[VALUE] = undefined;
			}
		}

		return this[VALUE];
	}

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
						this[PIXELS_VALUE] = getMeasurement(this[FONT_BASED_UNITS], fontBasedUnits, units, this[ELEMENT]);
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

	get isAuto() {
		return this[SIZE] === AUTO;
	}

	get isFixed() {
		return fixedUnits.includes(this.units);
	}

	get isPercent() {
		return percentUnits.includes(this.units);
	}

	isSame(size) {
		if (CssSize.isInstance(size)) {
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

	toString() {
		return this[SIZE] + '';
	}
}
