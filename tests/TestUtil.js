import { assert } from 'chai';
import { concat, difference, each, forOwn, isPlainObject, map } from 'lodash';
import {
	AUTO,
	CENTIMETERS,
	CH,
	CssSize,
	DockPoint,
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
	Point,
	POINTS,
	ROOT_EM,
	Thickness,
	Vector,
	VIEWPORT_HEIGHT,
	VIEWPORT_MIN,
	VIEWPORT_WIDTH,
	ZERO_PIXELS
} from '../src';

export const validArrays = [[1], [2], [], new Array()];
export const validBooleans = [true, false, new Boolean(true)];
export const validDates = [new Date(), new Date('01/15/2010')];
export const validElements = [document.createElement('div'), document.createElement('span')];
export const validFunctions = [function() {
}, () => {
}];
export const validInts = [1, 5];
export const validNumbers = [1.3, 2.5, -10.00000001, 3.14159, new Number(42.2)];
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

export const unitlessCssSizes = map([AUTO, INITIAL, INHERIT, NONE], (size) => ({
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
}];
const validSizes = concat(unitlessCssSizes, otherValidSizes);
export const fixedCssUnits = ['',
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
export const percentCssUnits = [PERCENT];
const cssUnits = concat(percentCssUnits, fixedCssUnits);

const positiveUnits = map(cssUnits, (unit) => ({
	size: '47.3' + unit,
	value: '47.3',
	unit: unit || PIXELS
}));
const negativeUnits = map(cssUnits, (unit) => ({
	size: '-327.2' + unit,
	value: '-327.2',
	unit: unit || PIXELS
}));
const notationUnits = map(cssUnits, (unit) => ({
	size: '1E2' + unit,
	value: '1E2',
	unit: unit || PIXELS
}));

export const validCssValuesShortList = concat(positiveUnits, validSizes);
export const validCssValues = concat(validCssValuesShortList, negativeUnits, notationUnits);

// the following numeric strings are pulled from https://github.com/minimaxir/big-list-of-naughty-strings
const coerceInfinity = [
	'Infinity',
	'-Infinity'
];
const coerceNumberTrue = [
	'0',
	'1',
	'1.00',
	'1E2',
	'1E02',
	'1E+02',
	'-1',
	'-1.00',
	'-1E2',
	'-1E02',
	'-1E+02',
	'-0',
	'-0.0',
	'+0',
	'+0.0',
	'0.00',
	'999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999',
	'0x0',
	'0xffffffff',
	'0xffffffffffffffff',
	'0xabad1dea',
	'123456789012345678901234567890123456789',
	'01000',
	'08',
	'09',
	'2.2250738585072011e-308'];
const coerceNumberFalse = [
	'$1.00',
	'1/2',
	'-$1.00',
	'-1/2',
	'1/0',
	'0/0',
	'-2147483648/-1',
	'-9223372036854775808/-1',
	'0..0',
	'.',
	'0.0.0',
	'0,00',
	'0,,0',
	',',
	'0,0,0',
	'0.0/0',
	'1.0/0.0',
	'0.0/0.0',
	'1,0/0,0',
	'0,0/0,0',
	'--1',
	'-',
	'-.',
	'-,',
	'NaN',
	'INF',
	'1#INF',
	'-1#IND',
	'1#QNAN',
	'1#SNAN',
	'1#IND',
	'1,000.00',
	'1 000.00',
	'1\'000.00',
	'1,000,000.00',
	'1 000 000.00',
	'1\'000\'000.00',
	'1.000,00',
	'1 000,00',
	'1\'000,00',
	'1.000.000,00',
	'1 000 000,00',
	'1\'000\'000,00'
];

const coercibleDockPoints = [];
DockPoint.POINTS.each((value) => {
	coercibleDockPoints.push(value);
});

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

export const arrayData = {
	value: Array,
	name: 'array',
	true: validArrays,
	false: difference(testValues, validArrays),
	coerceTrue: ['["test"]', '[]'],
	coerceFalse: difference(testValues, validArrays, validVectors)
};
export const boolData = {
	value: Boolean,
	name: 'boolean',
	true: validBooleans,
	false: difference(testValues, validBooleans),
	coerceTrue: difference(testValues, validBooleans),
	coerceFalse: []
};
export const cssSizeData = {
	value: CssSize,
	name: 'cssSize',
	true: validCssSizes,
	false: difference(testValues, validCssSizes),
	coerceTrue: map(validCssValues, (item) => item.size),
	coerceFalse: difference(testValues, validCssSizes, validInts, validNumbers)
};
export const dateData = {
	value: Date,
	name: 'date',
	true: validDates,
	false: difference(testValues, validDates),
	coerceTrue: ['10/12/1980', 'January 8, 2014'],
	coerceFalse: difference(testValues, validDates, validArrays, validNumbers, validInts, validRegExps, validPoints)
};
export const dockPointData = {
	value: DockPoint,
	name: 'dockPoint',
	true: validDockPoints,
	false: difference(testValues, validDockPoints, ['']),
	coerceTrue: coercibleDockPoints,
	coerceFalse: difference(testValues, validDockPoints, [''])
};
export const elementData = {
	value: Element,
	name: 'element',
	true: validElements,
	false: difference(testValues, validElements),
	coerceTrue: [],
	coerceFalse: []
};
export const functionData = {
	value: Function,
	name: 'function',
	true: validFunctions,
	false: difference(testValues, validFunctions),
	coerceTrue: [],
	coerceFalse: []
};
export const intData = {
	name: 'integer',
	skip: ['number'],
	true: validInts,
	false: difference(testValues, validInts),
	coerceTrue: coerceNumberTrue,
	coerceFalse: concat(coerceNumberFalse, coerceInfinity)
};
export const numberData = {
	value: Number,
	name: 'number',
	true: validNumbers,
	false: difference(testValues, validNumbers, validInts),
	coerceTrue: concat(coerceNumberTrue, coerceInfinity),
	coerceFalse: coerceNumberFalse
};
export const objectData = {
	value: Object,
	name: 'object',
	true: validObjects,
	false: [null, undefined, true, false],
	coerceTrue: ['{}', '{"test":"test"}'],
	coerceFalse: validStrings
};
export const pointData = {
	value: Point,
	name: 'point',
	true: validPoints,
	false: difference(testValues, validPoints),
	coerceTrue: ['1,2', [1, 2], ['1', '2'], {
		x: '1',
		y: '2'
	}, {
		x: 1,
		y: 2
	}],
	coerceFalse: difference(testValues, validPoints)
};
export const regExpData = {
	value: RegExp,
	name: 'regExp',
	true: validRegExps,
	false: difference(testValues, validRegExps),
	coerceTrue: ['test', '/[a-z]+/', '/[a-z]+/gi'],
	coerceFalse: difference(testValues, validStrings, validRegExps)
};
export const stringData = {
	value: String,
	name: 'string',
	true: validStrings,
	false: difference(testValues, validStrings),
	coerceTrue: difference(testValues, validStrings, [null, undefined]),
	coerceFalse: [null, undefined]
};
export const thicknessData = {
	value: Thickness,
	name: 'thickness',
	true: validThicknesses,
	false: difference(testValues, validThicknesses),
	coerceTrue: ['1px', '1px 2px 3px 4px'],
	coerceFalse: difference(testValues, validThicknesses, validCssSizes, validInts, validNumbers, validArrays)
};
export const vectorData = {
	value: Vector,
	name: 'vector',
	true: validVectors,
	false: difference(testValues, validVectors),
	coerceTrue: ['[[1,2],[3,4]]'],
	coerceFalse: concat(difference(testValues, validVectors), ['[[1,2],[3,4],[5,6]]', '[[1,2,7],[3,4,8]]'])
};

export const testTypes = [
	arrayData,
	boolData,
	cssSizeData,
	dateData,
	dockPointData,
	elementData,
	functionData,
	intData,
	numberData,
	objectData,
	pointData,
	regExpData,
	stringData,
	thicknessData,
	vectorData
];

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
 * @arg {Object}       settings
 * @arg {Object|Array} settings.values
 * @arg {Object|Array} [settings.values2] - Only for eachPair. If not provided, pairs are made within the values array. If provided, pairs are only made with one from each array.
 * @arg {Function}     settings.test
 * @arg {Function}     [settings.filter]
 * @arg {Function}     [settings.message=`should return ${output} when set to ${input}`]
 * @arg {String}       [settings.inputKey]
 * @arg {String}       [settings.outputKey]
 * @arg {*}            [settings.output]
 * @arg {Boolean}      [settings.eachPair=false] - values must be an array, runs tests on every combination of two items from values
 * @arg {Boolean}      [settings.eachUniquePair=false] - like eachPair, but runs unique pairs
 * @arg {String}       [settings.assertion='equal']
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
