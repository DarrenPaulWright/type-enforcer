import displayValue from 'display-value';
import {
	enforce,
	enforceArray,
	enforceBoolean,
	enforceDate,
	enforceEnum,
	enforceFloat,
	enforceFunction,
	enforceInstanceOf,
	enforceInteger,
	enforceMap,
	enforceNumber,
	enforceObject,
	enforceRegExp,
	enforceSet,
	enforceString,
	enforceSymbol,
	enforceWeakMap
} from '../src';
import enforceTestUtility from './enforceTestUtility';
import { multiTest } from './TestUtil';
import {
	arrayData,
	booleanData,
	dateData,
	enumData,
	floatData,
	functionData,
	instanceData,
	integerData,
	mapData,
	numberData,
	objectData,
	regExpData,
	setData,
	stringData,
	symbolData,
	TestClass,
	validEnumObject,
	weakMapData
} from './testValues';

describe('enforce', () => {
	describe('.array', () => {
		enforceTestUtility(arrayData, enforceArray, JSON.parse);
	});

	describe('.boolean', () => {
		enforceTestUtility(booleanData, enforceBoolean, Boolean);
	});

	describe('.date', () => {
		enforceTestUtility(dateData, enforceDate, (value) => new Date(value));
	});

	describe('.enum', () => {
		enforceTestUtility({
			...enumData,
			extraArg: validEnumObject
		}, enforceEnum);
	});

	describe('.float', () => {
		enforceTestUtility(floatData, enforceFloat, Number);
	});

	describe('.function', () => {
		enforceTestUtility(functionData, enforceFunction);
	});

	describe('.instanceOf', () => {
		enforceTestUtility({
			...instanceData,
			extraArg: TestClass
		}, enforceInstanceOf);
	});

	describe('.integer', () => {
		enforceTestUtility(integerData, enforceInteger, Number);
	});

	describe('.map', () => {
		enforceTestUtility(mapData, enforceMap);
	});

	describe('.number', () => {
		enforceTestUtility(numberData, enforceNumber, Number);
	});

	describe('.object', () => {
		enforceTestUtility(objectData, enforceObject, JSON.parse);
	});

	describe('.regExp', () => {
		enforceTestUtility(regExpData, enforceRegExp, (value) => {
			if (value.charAt(0) !== '/') {
				return RegExp(value);
			}
			else {
				const index = value.lastIndexOf('/');
				return RegExp(value.substring(1, index), value.substring(index + 1));
			}
		});
	});

	describe('.set', () => {
		enforceTestUtility(setData, enforceSet, (value) => new Set(enforceArray(value, 0, true)));
	});

	describe('.string', () => {
		enforceTestUtility(stringData, enforceString, (value) => value.toString());
	});

	describe('.symbol', () => {
		enforceTestUtility(symbolData, enforceSymbol);

		multiTest({
			values: symbolData.coerceTrue.map((item) => {
				return {
					input: item,
					output: Symbol(String(item)).toString().slice(7, -1)
				};
			}),
			message(input) {
				return `should return a coerced ${displayValue(input)} when coerce is true`;
			},
			test(value) {
				return enforce.symbol(value, value, true).toString().slice(7, -1);
			},
			inputKey: 'input',
			outputKey: 'output'
		});
	});

	describe('.weakMap', () => {
		enforceTestUtility(weakMapData, enforceWeakMap);
	});
});
