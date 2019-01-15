import { assert } from 'chai';
import { concat, difference, each, forOwn, isPlainObject } from 'lodash';
import { CssSize, DockPoint, Point, Thickness, Vector } from '../src';

export const validArrays = [[1], [2], [], new Array()];
export const validBooleans = [true, false, new Boolean(true)];
export const validDates = [new Date(), new Date('01/15/2010')];
export const validElements = [document.createElement('div'), document.createElement('span')];
export const validFunctions = [function() {
}, () => {
}];
export const validInts = [0, 10];
export const validNumbers = [-10.00000001, 3.14159, new Number(42.2)];
export const validObjects = [{}, {
	test1: 1
}, new Object()];
export const validRegExps = [/asdf/g, new RegExp('test 2')];
export const validStrings = ['', 'test', new String('test2')];

export const validCssSizes = [new CssSize('14px'), new CssSize('20px')];
export const validDockPoints = [new DockPoint(DockPoint.POINTS.TOP_CENTER),
	new DockPoint(DockPoint.POINTS.BOTTOM_LEFT)];
export const validPoints = [new Point(1, 2), new Point([3, 4])];
export const validThicknesses = [new Thickness('12px'), new Thickness('20px')];
export const validVectors = [new Vector([1, 2], [3, 4]), new Vector([3, 4], [5, 6])];

export const testValues = concat(
	[null, undefined],
	validArrays,
	validBooleans,
	validDates,
	validElements,
	validFunctions,
	validInts,
	validNumbers,
	validObjects,
	validRegExps,
	validStrings,
	validCssSizes,
	validDockPoints,
	validPoints,
	validThicknesses,
	validVectors
);

export const testTypes = [{
	value: Array,
	name: 'array',
	true: validArrays,
	false: difference(testValues, validArrays)
}, {
	value: Boolean,
	name: 'bool',
	true: validBooleans,
	false: difference(testValues, validBooleans)
}, {
	value: Date,
	name: 'date',
	true: validDates,
	false: difference(testValues, validDates)
}, {
	value: Element,
	name: 'element',
	true: validElements,
	false: difference(testValues, validElements)
}, {
	value: Function,
	name: 'func',
	true: validFunctions,
	false: difference(testValues, validFunctions)
}, {
	name: 'int',
	skip: ['number'],
	true: validInts,
	false: difference(testValues, validInts)
}, {
	value: Number,
	name: 'number',
	true: concat(validNumbers),
	false: difference(testValues, validNumbers, validInts)
}, {
	value: Object,
	name: 'object',
	true: validObjects
}, {
	value: RegExp,
	name: 'regExp',
	true: validRegExps,
	false: difference(testValues, validRegExps)
}, {
	value: String,
	name: 'string',
	true: validStrings,
	false: difference(testValues, validStrings)
}, {
	value: CssSize,
	name: 'cssSize',
	true: validCssSizes,
	false: difference(testValues, validCssSizes)
}, {
	value: DockPoint,
	name: 'dockPoint',
	true: validDockPoints,
	false: difference(testValues, validDockPoints)
}, {
	value: Point,
	name: 'point',
	true: validPoints,
	false: difference(testValues, validPoints)
}, {
	value: Thickness,
	name: 'thickness',
	true: validThicknesses,
	false: difference(testValues, validThicknesses)
}, {
	value: Vector,
	name: 'vector',
	true: validVectors,
	false: difference(testValues, validVectors)
}];

export const eachPair = (array1, array2, callback, isUnique = false) => {
	let i;
	let j;
	const length1 = array1.length;
	const length2 = array2.length;
	let doBreak = false;

	isUnique = array1 === array2 && isUnique;

	for (i = 0; i < length1; i++) {
		for (j = isUnique ? i + 1 : 0; j < length2; j++) {
			if (callback(array1[i], array2[j])) {
				doBreak = true;
				break;
			}
		}

		if (doBreak) {
			break;
		}
	}
};

/**
 * @function multiTest
 *
 * @param {Object} settings
 * @param {Object|Array} settings.values
 * @param {Object|Array} [settings.values2] - Only for eachPair. If not provided, pairs are made within the values array. If provided, pairs are only made with one from each array.
 * @param {Function} settings.test
 * @param {Function} [settings.filter]
 * @param {Function} [settings.message=`should return ${output} when set to ${input}`]
 * @param {String} [settings.inputKey]
 * @param {String} [settings.outputKey]
 * @param {*} [settings.output]
 * @param {Boolean} [settings.eachPair=false] - values must be an array, runs tests on every combination of two items from values
 * @param {Boolean} [settings.eachUniquePair=false] - like eachPair, but runs unique pairs
 * @param {String} [settings.assertion='equal']
 */
export const multiTest = (settings) => {
	const assertion = settings.assertion || 'equal';

	let buildSingleMessage;
	if (settings.message) {
		buildSingleMessage = settings.message;
	}
	else if (settings.assertion === 'isTrue') {
		buildSingleMessage = (input) => `should return true for ${input}`;
	}
	else if (settings.assertion === 'isFalse') {
		buildSingleMessage = (input) => `should return false for ${input}`;
	}
	else {
		buildSingleMessage = (input, output) => `should return ${output} when set to ${input}`;
	}

	const buildDoubleMessage = settings.message || ((input1, input2, output) => {
		return `should return ${output} when ${input1} and ${input2} are provided`;
	});

	const testSingleValue = (input, output, value) => {
		if ((!settings.filter) || settings.filter(value)) {
			it(buildSingleMessage(input, output), () => {
				assert[assertion](settings.test(input), output);
			});
		}
	};

	const testDoubleValue = (input1, input2, output, value1, value2) => {
		if ((!settings.filter) || settings.filter(value1, value2)) {
			it(buildDoubleMessage(input1, input2, output), () => {
				assert[assertion](settings.test(input1, input2), output);
			});
		}
	};

	const testSingleArrayValue = (value) => {
		if ('output' in settings) {
			if ('inputKey' in settings) {
				testSingleValue(value[settings.inputKey], settings.output, value);
			}
			else {
				testSingleValue(value, settings.output, value);
			}
		}
		else if ('outputKey' in settings) {
			if ('inputKey' in settings) {
				testSingleValue(value[settings.inputKey], value[settings.outputKey], value);
			}
			else {
				testSingleValue(value, value[settings.outputKey], value);
			}
		}
		else {
			if ('inputKey' in settings) {
				testSingleValue(value[settings.inputKey], undefined, value);
			}
			else {
				testSingleValue(value, undefined, value);
			}
		}
	};

	const testDoubleArrayValue = (value1, value2) => {
		if ('output' in settings) {
			if ('inputKey' in settings) {
				testDoubleValue(value1[settings.inputKey], value2[settings.inputKey], settings.output, value1, value2);
			}
			else {
				testDoubleValue(value1, value2, settings.output, value1, value2);
			}
		}
		else {
			if ('inputKey' in settings) {
				testDoubleValue(value1[settings.inputKey], value2[settings.inputKey], undefined, value1, value2);
			}
			else {
				testDoubleValue(value1, value2, undefined, value1, value2);
			}
		}
	};

	if (isPlainObject(settings.values)) {
		forOwn(settings.values, (value, key) => {
			testSingleValue(key, value, value);
		});
	}
	else if (settings.eachPair) {
		eachPair(settings.values, settings.values2 || settings.values, testDoubleArrayValue);
	}
	else if (settings.eachUniquePair) {
		eachPair(settings.values, settings.values2 || settings.values, testDoubleArrayValue, true);
	}
	else {
		each(settings.values, testSingleArrayValue);
	}
};

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
}
