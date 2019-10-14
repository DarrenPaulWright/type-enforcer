const difference = (array1, ...args) => {
	let diffArrays = [].concat(...args);
	return array1.filter((item1) => diffArrays.every((item2) => item1 !== item2));
};

export const validArrays = [[1], [2], [], new Array(), Array()];
export const validBooleans = [true, false, new Boolean(true), Boolean()];
export const validDates = [new Date(), new Date('01/15/2010')];
export const validFunctions = [function() {
}, () => {
}];
export const validIntegers = [1, 5, new Number(42), Number(11)];
export const validFloats = [1.3, 2.5, -10.00000001, 3.14159, new Number(42.2), Number(11.3)];
export const validInfinities = [Infinity, -Infinity];
export const validObjects = [{}, {
	test1: 1
}, new Object(), Object()];
export const validRegExps = [/asdf/g, new RegExp('test 2'), RegExp()];
export const validStrings = ['', 'test', new String('test2'), String('test3')];

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

export const testValues = [].concat(
	[null, undefined],
	validArrays,
	validBooleans,
	validDates,
	validFunctions,
	validIntegers,
	validFloats,
	validInfinities,
	validObjects,
	validRegExps,
	validStrings
);

export const arrayData = {
	value: Array,
	name: 'array',
	true: validArrays,
	false: difference(testValues, validArrays),
	coerceTrue: ['["test"]', '[]'],
	coerceFalse: difference(testValues, validArrays)
};
export const booleanData = {
	value: Boolean,
	name: 'boolean',
	true: validBooleans,
	false: difference(testValues, validBooleans),
	coerceTrue: difference(testValues, validBooleans),
	coerceFalse: []
};
export const dateData = {
	value: Date,
	name: 'date',
	true: validDates,
	false: difference(testValues, validDates),
	coerceTrue: ['10/12/1980', 'January 8, 2014'],
	coerceFalse: difference(testValues, validDates, validArrays, validFloats, validIntegers, validRegExps)
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

export const testTypes = [
	arrayData,
	booleanData,
	dateData,
	functionData,
	integerData,
	floatData,
	numberData,
	objectData,
	regExpData,
	stringData
];
