import { assert } from 'chai';
import { concat, difference } from 'lodash';
import { Point } from '../src';

const emptyFunction = function() {
};

export const validArrays = [[], new Array()];
export const validBooleans = [true, false, new Boolean(true)];
export const validDates = [new Date(), new Date('01/15/2010')];
export const validElements = [document.createElement('div')];
export const validFunctions = [emptyFunction];
export const validNumbers = [0, 10, 3.14159, new Number(42)];
export const validObjects = [{}, {
	test1: 1
}, new Object()];
export const validRegExps = [/asdf/g, new RegExp('test 2')];
export const validStrings = ['', 'test', new String('test2')];
export const validPoints = [new Point(1, 2)];

export const testValues = concat(
	[null, undefined],
	validArrays,
	validBooleans,
	validDates,
	validElements,
	validFunctions,
	validNumbers,
	validObjects,
	validRegExps,
	validStrings,
	validPoints
);

export const testTypes = [{
	value: Array,
	true: validArrays,
	false: difference(testValues, validArrays)
}, {
	value: Boolean,
	true: validBooleans,
	false: difference(testValues, validBooleans)
}, {
	value: Date,
	true: validDates,
	false: difference(testValues, validDates)
}, {
	value: Element,
	true: validElements,
	false: difference(testValues, validElements)
}, {
	value: Function,
	true: validFunctions,
	false: difference(testValues, validFunctions)
}, {
	value: Number,
	true: validNumbers,
	false: difference(testValues, validNumbers)
}, {
	value: Object,
	true: validObjects
}, {
	value: RegExp,
	true: validRegExps,
	false: difference(testValues, validRegExps)
}, {
	value: String,
	true: validStrings,
	false: difference(testValues, validStrings)
}, {
	value: Point,
	true: validPoints,
	false: difference(testValues, validPoints)
}];

export default function TestUtil(Constructor) {
	this.testMethod = (settings) => {
		describe('(testMethod)', () => {
			it('should return "' + settings.defaultValue + '" when the ' + settings.methodName + ' setting is not set', () => {
				const instance = new Constructor();

				if (instance[settings.methodName]() && instance[settings.methodName]().isSame) {
					assert.isTrue(instance[settings.methodName]().isSame(settings.defaultValue));
				}
				else {
					assert.deepEqual(instance[settings.methodName](), settings.defaultValue);
				}
			});

			if (settings.defaultValue !== undefined) {
				it('should return "' + settings.defaultValue + '" when the ' + settings.methodName + ' method is set to "' + settings.defaultValue + '"', () => {
					const instance = new Constructor()[settings.methodName](settings.defaultValue);

					if (instance[settings.methodName]() && instance[settings.methodName]().isSame) {
						assert.isTrue(instance[settings.methodName]().isSame(settings.defaultValue));
					}
					else {
						assert.deepEqual(instance[settings.methodName](), settings.defaultValue);
					}
				});
			}

			it('should return "' + settings.testValue + '" when the ' + settings.methodName + ' method is set to "' + settings.testValue + '"', () => {
				const instance = new Constructor()[settings.methodName](settings.testValue);

				if (instance[settings.methodName]() && instance[settings.methodName]().isSame) {
					assert.isTrue(instance[settings.methodName]().isSame(settings.testValue));
				}
				else {
					assert.deepEqual(instance[settings.methodName](), settings.testValue);
				}
			});

			it('should return "' + settings.testValue + '" when the ' + settings.methodName + ' method is set to "' + settings.testValue + '" twice', () => {
				const instance = new Constructor();
				instance[settings.methodName](settings.testValue);
				instance[settings.methodName](settings.testValue);

				if (instance[settings.methodName]() && instance[settings.methodName]().isSame) {
					assert.isTrue(instance[settings.methodName]().isSame(settings.testValue));
				}
				else {
					assert.deepEqual(instance[settings.methodName](), settings.testValue);
				}
			});

			if (settings.secondTestValue !== undefined) {
				it('should return "' + settings.secondTestValue + '" when the ' + settings.methodName + ' method is set to "' + settings.testValue + '" and then "' + settings.secondTestValue + '"', () => {
					const instance = new Constructor();
					instance[settings.methodName](settings.testValue);
					instance[settings.methodName](settings.secondTestValue);

					if (instance[settings.methodName]() && instance[settings.methodName]().isSame) {
						assert.isTrue(instance[settings.methodName]().isSame(settings.secondTestValue));
					}
					else {
						assert.deepEqual(instance[settings.methodName](), settings.secondTestValue);
					}
				});

				it('should NOT return "' + settings.testValue + '" when the ' + settings.methodName + ' method is set to "' + settings.testValue + '" and then "' + settings.secondTestValue + '"', () => {
					const instance = new Constructor();
					instance[settings.methodName](settings.testValue);
					instance[settings.methodName](settings.secondTestValue);

					if (instance[settings.methodName]() && instance[settings.methodName]().isSame) {
						assert.isFalse(instance[settings.methodName]().isSame(settings.testValue));
					}
					else {
						assert.notDeepEqual(instance[settings.methodName](), settings.testValue);
					}
				});
			}
		});
	};
};
