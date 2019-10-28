import {
	enforceArray,
	enforceBoolean,
	enforceDate,
	enforceEnum,
	enforceFloat,
	enforceFunction,
	enforceInstanceOf,
	enforceInteger,
	enforceNumber,
	enforceObject,
	enforceRegExp,
	enforceString
} from '../src';
import enforceTestUtility from './enforceTestUtility';
import {
	arrayData,
	booleanData,
	dateData,
	enumData,
	floatData,
	functionData,
	instanceData,
	integerData,
	numberData,
	objectData,
	regExpData,
	stringData,
	TestClass,
	validEnumObject
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

	describe('.string', () => {
		enforceTestUtility(stringData, enforceString, (value) => value.toString());
	});
});
