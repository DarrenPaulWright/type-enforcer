import displayValue from 'display-value';
import {
	arrayData,
	booleanData,
	dateData,
	floatData,
	functionData,
	instanceData,
	integerData,
	mapData,
	multiTest,
	numberData,
	objectData,
	promiseData,
	regExpData,
	setData,
	stringData,
	symbolData,
	TestClass,
	testEnforce,
	weakMapData,
	weakSetData
} from 'type-enforcer-test-helper';
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
	enforcePromise,
	enforceRegExp,
	enforceSet,
	enforceString,
	enforceSymbol,
	enforceWeakMap,
	enforceWeakSet
} from '../index.js';
import { enumData, validEnumObject } from './helpers/testValues.js';

describe('enforce', () => {
	describe('.array', () => {
		testEnforce(arrayData, enforceArray, enforce, JSON.parse);
	});

	describe('.boolean', () => {
		testEnforce(booleanData, enforceBoolean, enforce, Boolean);
	});

	describe('.date', () => {
		testEnforce(dateData, enforceDate, enforce, (value) => new Date(value));
	});

	describe('.enum', () => {
		testEnforce({
			...enumData,
			extraArg: validEnumObject
		}, enforceEnum, enforce);
	});

	describe('.float', () => {
		testEnforce(floatData, enforceFloat, enforce, Number);
	});

	describe('.function', () => {
		testEnforce(functionData, enforceFunction, enforce);
	});

	describe('.instanceOf', () => {
		testEnforce({
			...instanceData,
			extraArg: TestClass
		}, enforceInstanceOf, enforce);
	});

	describe('.integer', () => {
		testEnforce(integerData, enforceInteger, enforce, Number);
	});

	describe('.map', () => {
		testEnforce(mapData, enforceMap, enforce);
	});

	describe('.number', () => {
		testEnforce(numberData, enforceNumber, enforce, Number);
	});

	describe('.object', () => {
		testEnforce(objectData, enforceObject, enforce, JSON.parse);
	});

	describe('.promise', () => {
		testEnforce(promiseData, enforcePromise, enforce);
	});

	describe('.regExp', () => {
		testEnforce(regExpData, enforceRegExp, enforce, (value) => {
			if (value.charAt(0) !== '/') {
				// eslint-disable-next-line require-unicode-regexp
				return RegExp(value);
			}

			const index = value.lastIndexOf('/');
			return RegExp(value.slice(1, index), value.slice(Math.max(0, index + 1)));
		});
	});

	describe('.set', () => {
		testEnforce(setData, enforceSet, enforce, (value) => new Set(enforceArray(value, 0, true)));
	});

	describe('.string', () => {
		testEnforce(stringData, enforceString, enforce, (value) => value.toString());
	});

	describe('.symbol', () => {
		testEnforce(symbolData, enforceSymbol, enforce);

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
				return enforce.symbol(value, value, true)
					.toString()
					.slice(7, -1);
			},
			inputKey: 'input',
			outputKey: 'output'
		});
	});

	describe('.weakMap', () => {
		testEnforce(weakMapData, enforceWeakMap, enforce);
	});

	describe('.weakSet', () => {
		testEnforce(weakSetData, enforceWeakSet, enforce);
	});
});
