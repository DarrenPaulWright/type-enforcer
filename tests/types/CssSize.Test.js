import { assert } from 'chai';
import { assign, concat, map, round } from 'lodash';
import {
	AUTO,
	CENTIMETERS,
	CH,
	CssSize,
	EM,
	EX,
	INCHES,
	INHERIT,
	INITIAL,
	MILLIMETERS,
	NONE,
	PERCENT,
	PICAS,
	PIXELS,
	POINTS,
	ROOT_EM,
	Thickness,
	VIEWPORT_HEIGHT,
	VIEWPORT_MIN,
	VIEWPORT_WIDTH,
	ZERO_PIXELS
} from '../../src/index';
import { multiTest } from '../TestUtil';

const unitlessSizes = map([AUTO, INITIAL, INHERIT, NONE], (size) => ({
	size: size,
	value: undefined,
	unit: undefined
}));
const otherValidSizes = [{
	size: ZERO_PIXELS,
	value: 0,
	unit: ''
}, {
	size: 0,
	value: 0,
	unit: ''
}, {
	size: 123.4,
	value: 123.4,
	unit: PIXELS
}, {
	size: -32.9,
	value: -32.9,
	unit: PIXELS
}, {
	size: new CssSize('3px'),
	value: 3,
	unit: PIXELS
}];
const validSizes = concat(unitlessSizes, otherValidSizes);
const fixedUnits = ['',
	PIXELS,
	CENTIMETERS,
	EM,
	ROOT_EM,
	EX,
	CH,
	INCHES,
	MILLIMETERS,
	PICAS,
	POINTS,
	VIEWPORT_HEIGHT,
	VIEWPORT_WIDTH,
	VIEWPORT_MIN];
const percentUnits = [PERCENT];
const units = concat(percentUnits, fixedUnits);

const positiveUnits = map(units, (unit) => ({
	size: '47.3' + unit,
	value: '47.3',
	unit: unit || PIXELS
}));
const negativeUnits = map(units, (unit) => ({
	size: '-327.2' + unit,
	value: '-327.2',
	unit: unit || PIXELS
}));
const notationUnits = map(units, (unit) => ({
	size: '1E2' + unit,
	value: '1E2',
	unit: unit || PIXELS
}));

const validValues = concat(positiveUnits, negativeUnits, notationUnits, validSizes);
const validValues2 = concat(positiveUnits, validSizes);
const inValidValues = [undefined, 'asdf', null, {}, /asdf/, [], new Thickness()];
const zeros = [0, '0'];

describe('CssSize', () => {
	describe('constructor', () => {
		it('should default to 0', () => {
			assert.equal(new CssSize().toString(), '0');
		});

		const testCallback = (value) => new CssSize(value).toString();
		multiTest({
			values: validValues,
			filter: (value) => !zeros.includes(value.size),
			message: (input) => `should accept the value ${input} when instantiated`,
			test: testCallback,
			assertion: 'notEqual',
			inputKey: 'size',
			output: '0'
		});
		multiTest({
			values: inValidValues,
			message: (input) => `should NOT accept the value ${input} when instantiated`,
			test: testCallback,
			output: '0'
		});
	});

	describe('.isValid', () => {
		const testCallback = (value) => CssSize.isValid(value);
		multiTest({
			values: validValues,
			message: (input) => `should return true for ${input}`,
			test: testCallback,
			assertion: 'isTrue',
			inputKey: 'size'
		});
		multiTest({
			values: inValidValues,
			message: (input) => `should return false for ${input}`,
			test: testCallback,
			assertion: 'isNotTrue'
		});
	});

	describe('.set', () => {
		const testCallback = (value) => new CssSize().set(value).toString();
		multiTest({
			values: validValues,
			filter: (value) => !zeros.includes(value.size),
			message: (input) => `should accept the value ${input}`,
			test: testCallback,
			assertion: 'notEqual',
			inputKey: 'size',
			output: '0'
		});
		multiTest({
			values: inValidValues,
			message: (input) => `should NOT accept the value ${input}`,
			test: testCallback,
			output: '0'
		});
	});

	describe('.units', () => {
		const testCallback = (value) => new CssSize(value).units;
		multiTest({
			values: validValues,
			filter: (value) => !zeros.includes(value.size),
			test: testCallback,
			inputKey: 'size',
			outputKey: 'unit'
		});
		multiTest({
			values: inValidValues,
			test: testCallback,
			output: ''
		});
	});

	describe('.value', () => {
		const testCallback = (value) => new CssSize(value).value;
		multiTest({
			values: validValues,
			filter: (value) => !zeros.includes(value.size),
			test: testCallback,
			inputKey: 'size',
			outputKey: 'value'
		});
		multiTest({
			values: inValidValues,
			test: testCallback,
			output: 0
		});
	});

	describe('.toPixels', () => {
		const getValue = (cssSize) => round(cssSize.toPixels(true), 1);
		const getCssSize = (input) => getValue(new CssSize(input));
		const getCssSizeWithElement = (input) => {
			const element = document.createElement('div');
			element.style.fontSize = '40px';
			return getValue(new CssSize(input).element(element));
		};
		const getCssSizeWithElementOnDom = (input) => {
			const element = document.createElement('div');
			element.style.fontSize = '40px';
			document.body.appendChild(element);
			return getValue(new CssSize(input).element(element));
		};
		const sizeMap = {
			'1rem': 16,
			'3px': 3,
			'1.5in': 144,
			'2cm': 75.6,
			'2mm': 7.5,
			'8pt': 10.6,
			'8pc': 128,
			'2vh': 12,
			'2vw': 16,
			'2vmin': 12,
			'2em': 32,
			'2ex': 14.3,
			'2ch': 16
		};
		const elementSizeMap = assign({}, sizeMap, {
			'2em': 0,
			'2ex': 0,
			'2ch': 0
		});
		const elementSizeMapOnDom = assign({}, sizeMap, {
			'2em': 80,
			'2ex': 35.8,
			'2ch': 40
		});

		multiTest({
			values: sizeMap,
			test: getCssSize
		});

		describe('with element NOT attached to DOM', () => {
			multiTest({
				values: elementSizeMap,
				test: getCssSizeWithElement
			});
		});

		describe('with element attached to DOM', () => {
			multiTest({
				values: elementSizeMapOnDom,
				test: getCssSizeWithElementOnDom
			});
		});

		multiTest({
			values: unitlessSizes,
			test: (input) => new CssSize(input).toPixels(),
			inputKey: 'size',
			outputKey: 'size'
		});
	});

	describe('.isAuto', () => {
		const testCallback = (value) => new CssSize(value).isAuto;
		multiTest({
			values: validValues,
			filter: (value) => value.size === AUTO,
			test: testCallback,
			inputKey: 'size',
			output: true
		});
		multiTest({
			values: validValues,
			filter: (value) => value.size !== AUTO && !zeros.includes(value.size),
			test: testCallback,
			inputKey: 'size',
			output: false
		});
		multiTest({
			values: inValidValues,
			test: testCallback,
			output: false
		});
	});

	describe('.isFixed', () => {
		const testCallback = (value) => new CssSize(value).isFixed;
		multiTest({
			values: validValues,
			filter: (value) => fixedUnits.includes(value.unit) && !zeros.includes(value.size),
			test: testCallback,
			inputKey: 'size',
			output: true
		});
		multiTest({
			values: validValues,
			filter: (value) => !fixedUnits.includes(value.unit) && !zeros.includes(value.size),
			test: testCallback,
			inputKey: 'size',
			output: false
		});
		multiTest({
			values: inValidValues,
			test: testCallback,
			output: false
		});
	});

	describe('.isPercent', () => {
		const testCallback = (value) => new CssSize(value).isPercent;
		multiTest({
			values: validValues,
			filter: (value) => percentUnits.includes(value.unit) && !zeros.includes(value.size),
			test: testCallback,
			inputKey: 'size',
			output: true
		});
		multiTest({
			values: validValues,
			filter: (value) => !percentUnits.includes(value.unit) && !zeros.includes(value.size),
			test: testCallback,
			inputKey: 'size',
			output: false
		});
		multiTest({
			values: inValidValues,
			test: testCallback,
			output: false
		});
	});

	describe('.isSame', () => {
		const testCallback = (value1, value2) => new CssSize(value1).isSame(value2);
		const isValid = (value1, value2) => {
			return (value1 !== value2 &&
				!(value1.size === 0 && value2.size === '0' || value1.size === '0' && value2.size === 0) &&
				!(value1.size + PIXELS === value2.size || value1.size === value2.size + PIXELS))
		};

		multiTest({
			values: validValues2,
			eachPair: true,
			message: (input1, input2) => `should return false when the value is ${input1} and the test value is ${input2}`,
			filter: isValid,
			test: testCallback,
			assertion: 'isFalse',
			inputKey: 'size'
		});

		multiTest({
			values: validValues2,
			eachPair: true,
			message: (input1, input2) => `should return true when the value is ${input1} and the test value is ${input2}`,
			filter: (value1, value2) => !isValid(value1, value2),
			test: testCallback,
			assertion: 'isTrue',
			inputKey: 'size'
		});

		multiTest({
			values: validValues2,
			values2: map(inValidValues, (value) => {
				return {
					size: value
				}
			}),
			eachPair: true,
			message: (input1, input2) => `should return false when the value is ${input1} and the test value is ${input2}`,
			test: testCallback,
			assertion: 'isFalse',
			inputKey: 'size'
		});

		it('should return true for values that equate to the same pixels', () => {
			assert.isTrue(new CssSize('16px').isSame(new CssSize('1rem')));
		});
	});
});
