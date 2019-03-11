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

const difference = (array1, ...args) => {
	let diffArrays = [].concat(...args);
	return array1.filter((item1) => diffArrays.every((item2) => item1 !== item2));
};

export const validArrays = [[1], [2], [], new Array(), Array()];
export const validBooleans = [true, false, new Boolean(true), Boolean()];
export const validCssSizes = [new CssSize('14px'), new CssSize('20px')];
export const validDates = [new Date(), new Date('01/15/2010')];
export const validDockPoints = [new DockPoint(DockPoint.POINTS.TOP_CENTER),
	new DockPoint(DockPoint.POINTS.BOTTOM_LEFT)];
export const validElements = [document.createElement('div'), document.createElement('span')];
export const validFunctions = [function() {
}, () => {
}];
export const validIntegers = [1, 5, new Number(42), Number(11)];
export const validFloats = [1.3, 2.5, -10.00000001, 3.14159, new Number(42.2), Number(11.3)];
export const validInfinities = [Infinity, -Infinity];
export const validObjects = [{}, {
	test1: 1
}, new Object(), Object()];
export const validPoints = [new Point(1, 2), new Point([3, 4])];
export const validRegExps = [/asdf/g, new RegExp('test 2'), RegExp()];
export const validStrings = ['', 'test', new String('test2'), String('test3')];
export const validThicknesses = [new Thickness('12px'), new Thickness('20px')];
export const validVectors = [new Vector([1, 2], [3, 4]), new Vector([3, 4], [5, 6])];

export const unitlessCssSizes = [AUTO, INITIAL, INHERIT, NONE].map((size) => ({
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
const validSizes = [].concat(unitlessCssSizes, otherValidSizes);
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
const cssUnits = [].concat(percentCssUnits, fixedCssUnits);

const positiveUnits = cssUnits.map((unit) => ({
	size: '47.3' + unit,
	value: '47.3',
	unit: unit || PIXELS
}));
const negativeUnits = cssUnits.map((unit) => ({
	size: '-327.2' + unit,
	value: '-327.2',
	unit: unit || PIXELS
}));
const notationUnits = cssUnits.map((unit) => ({
	size: '1E2' + unit,
	value: '1E2',
	unit: unit || PIXELS
}));

export const validCssValuesShortList = [].concat(positiveUnits, validSizes);
export const validCssValues = [].concat(validCssValuesShortList, negativeUnits, notationUnits);

// the following numeric strings are pulled from https://github.com/minimaxir/big-list-of-naughty-strings
const coerceInfinity = [
	'Infinity',
	'-Infinity'
];
const coerceIntegerTrue = [
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
	'0x0',
	'0xffffffff',
	'0xffffffffffffffff',
	'0xabad1dea',
	'01000',
	'08',
	'09'];
const coerceFloatTrue = [
	'3.2',
	'10.5'
];
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

export const testValues = [].concat(
	[null, undefined],
	validArrays,
	validBooleans,
	validDates,
	validElements,
	validFunctions,
	validIntegers,
	validFloats,
	validInfinities,
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
export const booleanData = {
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
	coerceTrue: validCssValues.map((item) => item.size),
	coerceFalse: difference(testValues, validCssSizes, validIntegers, validFloats)
};
export const dateData = {
	value: Date,
	name: 'date',
	true: validDates,
	false: difference(testValues, validDates),
	coerceTrue: ['10/12/1980', 'January 8, 2014'],
	coerceFalse: difference(testValues, validDates, validArrays, validFloats, validIntegers, validRegExps, validPoints)
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
export const integerData = {
	name: 'integer',
	skip: ['number', 'float'],
	true: validIntegers,
	false: difference(testValues, validIntegers, validInfinities),
	coerceTrue: coerceIntegerTrue,
	coerceFalse: coerceNumberFalse.concat(coerceFloatTrue, coerceInfinity)
};
export const floatData = {
	name: 'float',
	skip: ['number', 'integer'],
	true: validFloats,
	false: difference(testValues, validFloats, validIntegers, validInfinities),
	coerceTrue: coerceIntegerTrue.concat(coerceFloatTrue),
	coerceFalse: coerceNumberFalse.concat(coerceInfinity)
};
export const numberData = {
	value: Number,
	name: 'number',
	skip: ['integer', 'float'],
	true: validFloats.concat(validIntegers, validInfinities),
	false: difference(testValues, validFloats, validIntegers, validInfinities),
	coerceTrue: coerceIntegerTrue.concat(coerceInfinity),
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
	coerceFalse: difference(testValues, validThicknesses, validCssSizes, validIntegers, validFloats, validArrays)
};
export const vectorData = {
	value: Vector,
	name: 'vector',
	true: validVectors,
	false: difference(testValues, validVectors),
	coerceTrue: ['[[1,2],[3,4]]'],
	coerceFalse: [].concat(difference(testValues, validVectors), ['[[1,2],[3,4],[5,6]]', '[[1,2,7],[3,4,8]]'])
};

export const testTypes = [
	arrayData,
	booleanData,
	cssSizeData,
	dateData,
	dockPointData,
	elementData,
	functionData,
	integerData,
	floatData,
	numberData,
	objectData,
	pointData,
	regExpData,
	stringData,
	thicknessData,
	vectorData
];
