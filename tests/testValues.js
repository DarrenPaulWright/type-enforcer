import { Enum, Removable } from '../src';

const difference = (array1, ...args) => {
	let diffArrays = [].concat(...args);
	return array1.filter((item) => !diffArrays.includes(item));
};

export class TestClass extends Removable {
	constructor(value) {
		super();
		this.value = value;
	}
}

export const validEnumObject = new Enum({
	test1: 'test 1',
	test2: 'test 2',
	test3: 'test 3'
});

export const validArrays = [[1], [2], [], new Array(), Array()];
export const validBooleans = [true, false, new Boolean(true), Boolean()];
export const validDates = [new Date(), new Date('01/15/2010')];
export const validEnums = [validEnumObject.test1, validEnumObject.test2];
export const validFunctions = [function() {
}, () => {
}];
export const validInstances = [new TestClass(1), new TestClass(2)];
export const validIntegers = [1, 5, new Number(42), Number(11)];
export const validFloats = [1.3, 2.5, -10.00000001, 3.14159, new Number(42.2), Number(11.3)];
export const validInfinities = [Infinity, -Infinity];
export const validMaps = [new Map(), new Map().set('test', 12)];
export const validObjects = [{}, {
	test1: 1
}, new Object(), Object()];
export const validRegExps = [/asdf/g, new RegExp('test 2'), RegExp()];
export const validSets = [new Set(), new Set([1, 2])];
export const validStrings = ['test', '', new String('test2'), String('test3')];
export const validSymbols = [Symbol(), Symbol('test')];
export const validWeakMaps = [new WeakMap(), new WeakMap().set({}, 12)];
export const validWeakSets = [new WeakSet(), new WeakSet([validEnumObject])];

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
	'1\'000\'000,00',
	NaN
];
const coerceObjectTrue = ['{}', '{"test":"test"}'];

const testValues = [null, undefined].concat(
	validArrays,
	validBooleans,
	validDates,
	validEnums,
	validFunctions,
	validInstances,
	validIntegers,
	validFloats,
	validInfinities,
	validMaps,
	validObjects,
	validRegExps,
	validSets,
	validStrings,
	validWeakMaps,
	validWeakSets,
	NaN
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
	coerceFalse: difference(testValues, validDates, validArrays, validFloats, validIntegers, validRegExps, validEnums)
};
export const enumData = {
	name: 'enum',
	true: validEnums,
	false: difference(testValues, validEnums),
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
export const instanceData = {
	value: TestClass,
	name: 'instanceOf',
	true: validInstances,
	false: difference(testValues, validInstances),
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
export const jsonData = {
	name: 'json',
	true: ['[]', '{}', '{"test":"test"}'],
	false: ['json'].concat(validDates, validFunctions, validObjects, validRegExps),
	coerceTrue: [],
	coerceFalse: []
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
	false: difference(testValues, validFloats, validIntegers, validInfinities, [NaN]),
	coerceTrue: coerceIntegerTrue.concat(coerceInfinity),
	coerceFalse: coerceNumberFalse
};
export const mapData = {
	value: Map,
	name: 'map',
	true: validMaps,
	false: difference(testValues, validMaps),
	coerceTrue: coerceObjectTrue.concat(validObjects, [[[TestClass, 2],
		[TestClass, 'test']], '[["test 1", 2], ["test 2", "test"]]']),
	coerceFalse: difference(testValues, validMaps, validObjects, validArrays).concat(['test'])
};
export const objectData = {
	value: Object,
	name: 'object',
	true: validObjects,
	false: [null, undefined, true, false],
	coerceTrue: coerceObjectTrue,
	coerceFalse: validStrings
};
export const regExpData = {
	value: RegExp,
	name: 'regExp',
	true: validRegExps,
	false: difference(testValues, validRegExps),
	coerceTrue: ['test', '/[a-z]+/', '/[a-z]+/gi'],
	coerceFalse: difference(testValues, validStrings, validEnums, validRegExps)
};
export const setData = {
	value: Set,
	name: 'set',
	true: validSets,
	false: difference(testValues, validSets),
	coerceTrue: validArrays.concat(['[]', '[1, 2]']),
	coerceFalse: difference(testValues, validSets, validArrays)
};
export const stringData = {
	value: String,
	name: 'string',
	true: validStrings,
	false: difference(testValues, validStrings, validEnums),
	coerceTrue: difference(testValues, validStrings, validEnums, [null, undefined]),
	coerceFalse: [null, undefined]
};
export const symbolData = {
	value: Symbol,
	name: 'symbol',
	true: validSymbols,
	false: difference(testValues, validSymbols),
	coerceTrue: stringData.coerceTrue,
	coerceFalse: stringData.coerceFalse
};
export const weakMapData = {
	value: WeakMap,
	name: 'weakMap',
	true: validWeakMaps,
	false: difference(testValues, validWeakMaps),
	coerceTrue: [[[TestClass, 2], [TestClass, 'test']]],
	coerceFalse: difference(testValues, validWeakMaps, validArrays).concat(['test'])
};
export const weakSetData = {
	value: WeakSet,
	name: 'weakSet',
	true: validWeakSets,
	false: difference(testValues, validWeakSets),
	coerceTrue: [[new TestClass(1)]],
	coerceFalse: difference(testValues, validWeakSets, validArrays)
};

export const testTypes = [
	arrayData,
	booleanData,
	dateData,
	functionData,
	instanceData,
	integerData,
	floatData,
	numberData,
	mapData,
	objectData,
	regExpData,
	setData,
	stringData,
	symbolData,
	weakMapData,
	weakSetData
];
