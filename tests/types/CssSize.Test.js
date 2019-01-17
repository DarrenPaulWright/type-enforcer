import { assert } from 'chai';
import { assign, map, round } from 'lodash';
import {
	AUTO,
	CssSize,
	PIXELS
} from '../../src/index';
import { multiTest, cssSizeData as data, unitlessCssSizes, fixedCssUnits, percentCssUnits, validCssValuesShortList, validCssValues } from '../TestUtil';

const zeros = [0, '0'];

let tmpElement = document.createElement('div');
document.body.appendChild(tmpElement);
const measure = {};
const measureValue = (value, key) => {
	tmpElement.style.height = value;
	measure[key] = parseFloat(window.getComputedStyle(tmpElement).height);
};
measureValue('2vh', 'vh');
measureValue('2vw', 'vw');
measureValue('2em', 'em');
measureValue('2ex', 'ex');
measureValue('2ch', 'ch');
tmpElement.style.fontSize = '40px';
measureValue('2em', 'emLarge');
measureValue('2ex', 'exLarge');
measureValue('2ch', 'chLarge');

tmpElement.remove();
tmpElement = null;

describe('CssSize', () => {
	describe('constructor', () => {
		it('should default to 0', () => {
			assert.equal(new CssSize().toString(), '0');
		});

		const testCallback = (value) => new CssSize(value).toString();
		multiTest({
			values: data.coerceTrue,
			filter: (value) => !zeros.includes(value),
			message: (input) => `should accept the value ${input} when instantiated`,
			test: testCallback,
			assertion: 'notEqual',
			output: '0'
		});
		multiTest({
			values: data.coerceFalse,
			message: (input) => `should NOT accept the value ${input} when instantiated`,
			test: testCallback,
			output: '0'
		});
	});

	describe('.isValid', () => {
		const testCallback = (value) => CssSize.isValid(value);
		multiTest({
			values: data.coerceTrue,
			test: testCallback,
			assertion: 'isTrue'
		});
		multiTest({
			values: data.true,
			test: testCallback,
			assertion: 'isTrue'
		});
		multiTest({
			values: data.coerceFalse,
			test: testCallback,
			assertion: 'isFalse'
		});
	});

	describe('.set', () => {
		const testCallback = (value) => new CssSize().set(value).toString();
		multiTest({
			values: data.coerceTrue,
			filter: (value) => !zeros.includes(value),
			message: (input) => `should accept the value ${input}`,
			test: testCallback,
			assertion: 'notEqual',
			output: '0'
		});
		multiTest({
			values: data.coerceFalse,
			message: (input) => `should NOT accept the value ${input}`,
			test: testCallback,
			output: '0'
		});
	});

	describe('.units', () => {
		const testCallback = (value) => new CssSize(value).units;
		multiTest({
			values: validCssValues,
			filter: (value) => !zeros.includes(value.size),
			test: testCallback,
			inputKey: 'size',
			outputKey: 'unit'
		});
		multiTest({
			values: data.coerceFalse,
			test: testCallback,
			output: ''
		});
	});

	describe('.value', () => {
		const testCallback = (value) => new CssSize(value).value;
		multiTest({
			values: validCssValues,
			filter: (value) => !zeros.includes(value.size),
			test: testCallback,
			inputKey: 'size',
			outputKey: 'value'
		});
		multiTest({
			values: data.coerceFalse,
			test: testCallback,
			output: 0
		});

		it('should return the same value twice', () => {
			const cssSize = new CssSize('22px');
			assert.equal(cssSize.value, cssSize.value);
		});
	});

	describe('.toPixels', () => {
		const precision = (value) => round(value, 0);
		const getValue = (cssSize) => precision(cssSize.toPixels(true));
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
			'1rem': precision(16),
			'3px': precision(3),
			'1.5in': precision(144),
			'2cm': precision(75.6),
			'2mm': precision(7.5),
			'8pt': precision(10.6),
			'8pc': precision(128),
			'2vh': precision(measure.vh),
			'2vw': precision(measure.vw),
			'2vmin': precision(Math.min(measure.vh, measure.vw)),
			'2em': precision(measure.em),
			'2ex': precision(measure.ex),
			'2ch': precision(measure.ch)
		};
		const elementSizeMapOnDom = assign({}, sizeMap, {
			'2em': precision(measure.emLarge),
			'2ex': precision(measure.exLarge),
			'2ch': precision(measure.chLarge)
		});

		multiTest({
			values: sizeMap,
			test: getCssSize
		});

		describe('with element NOT attached to DOM', () => {
			multiTest({
				values: elementSizeMapOnDom,
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
			values: unitlessCssSizes,
			test: (input) => new CssSize(input).toPixels(),
			inputKey: 'size',
			outputKey: 'size'
		});
	});

	describe('.isAuto', () => {
		const testCallback = (value) => new CssSize(value).isAuto;
		multiTest({
			values: data.coerceTrue,
			filter: (value) => value === AUTO,
			test: testCallback,
			output: true
		});
		multiTest({
			values: data.coerceTrue,
			filter: (value) => value !== AUTO && !zeros.includes(value),
			test: testCallback,
			output: false
		});
		multiTest({
			values: data.coerceFalse,
			test: testCallback,
			output: false
		});
	});

	describe('.isFixed', () => {
		const testCallback = (value) => new CssSize(value).isFixed;
		multiTest({
			values: validCssValues,
			filter: (value) => fixedCssUnits.includes(value.unit) && !zeros.includes(value.size),
			test: testCallback,
			inputKey: 'size',
			output: true
		});
		multiTest({
			values: validCssValues,
			filter: (value) => !fixedCssUnits.includes(value.unit) && !zeros.includes(value.size),
			test: testCallback,
			inputKey: 'size',
			output: false
		});
		multiTest({
			values: data.coerceFalse,
			test: testCallback,
			output: false
		});
	});

	describe('.isPercent', () => {
		const testCallback = (value) => new CssSize(value).isPercent;
		multiTest({
			values: validCssValues,
			filter: (value) => percentCssUnits.includes(value.unit) && !zeros.includes(value.size),
			test: testCallback,
			inputKey: 'size',
			output: true
		});
		multiTest({
			values: validCssValues,
			filter: (value) => !percentCssUnits.includes(value.unit) && !zeros.includes(value.size),
			test: testCallback,
			inputKey: 'size',
			output: false
		});
		multiTest({
			values: data.coerceFalse,
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
			values: validCssValuesShortList,
			eachPair: true,
			message: (input1, input2) => `should return false when the value is ${input1} and the test value is ${input2}`,
			filter: isValid,
			test: testCallback,
			assertion: 'isFalse',
			inputKey: 'size'
		});

		multiTest({
			values: validCssValuesShortList,
			eachPair: true,
			message: (input1, input2) => `should return true when the value is ${input1} and the test value is ${input2}`,
			filter: (value1, value2) => !isValid(value1, value2),
			test: testCallback,
			assertion: 'isTrue',
			inputKey: 'size'
		});

		multiTest({
			values: validCssValuesShortList,
			values2: map(data.coerceFalse, (value) => {
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

	describe('.toString', () => {
		it('should return a default string', () => {
			assert.equal(new CssSize().toString(), '0');
		});
		it('should return a string', () => {
			assert.equal(new CssSize('21px').toString(), '21px');
		});
	});
});
