import { assert } from 'chai';
import displayValue from 'display-value';
import {
	arrayData,
	booleanData,
	dateData,
	floatData,
	functionData,
	integerData,
	jsonData,
	mapData,
	numberData,
	objectData,
	regExpData,
	setData,
	stringData,
	symbolData,
	testCheck,
	testTypes,
	weakMapData,
	weakSetData
} from 'type-enforcer-test-helper';
import {
	is,
	isArray,
	isBoolean,
	isDate,
	isFloat,
	isFunction,
	isInstanceOf,
	isInteger,
	isJson,
	isMap,
	isNumber,
	isObject,
	isRegExp,
	isSet,
	isString,
	isSymbol,
	isWeakMap,
	isWeakSet
} from '../';

describe('checks', () => {
	describe('isArray', () => {
		testCheck(arrayData, isArray, is);
	});

	describe('isBoolean', () => {
		testCheck(booleanData, isBoolean, is);
	});

	describe('isDate', () => {
		testCheck(dateData, isDate, is);
	});

	describe('isFloat', () => {
		testCheck(floatData, isFloat, is);
	});

	describe('isFunction', () => {
		testCheck(functionData, isFunction, is);
	});

	describe('isInstanceOf', () => {
		it('should exist in the exported "is" object', () => {
			assert.deepEqual(isInstanceOf, is.instanceOf);
		});

		testTypes.forEach((baseType) => {
			if (baseType.value) {
				baseType.true.forEach((newValue) => {
					it('should return true for ' + displayValue(newValue) + ' and ' + displayValue(baseType.value), () => {
						assert.isTrue(isInstanceOf(newValue, baseType.value));
					});
				});

				baseType.false.forEach((newValue) => {
					it('should return false for ' + displayValue(newValue) + ' and ' + displayValue(baseType.value), () => {
						assert.isFalse(isInstanceOf(newValue, baseType.value));
					});
				});
			}
		});
	});

	describe('isInteger', () => {
		testCheck(integerData, isInteger, is);
	});

	describe('isJson', () => {
		testCheck(jsonData, isJson, is);
	});

	describe('isMap', () => {
		testCheck(mapData, isMap, is);
	});

	describe('isNumber', () => {
		testCheck(numberData, isNumber, is);

		it('should return false for NaN', () => {
			assert.isFalse(isNumber(NaN));
			assert.isFalse(isNumber(NaN), true);
		});
	});

	describe('isObject', () => {
		testCheck(objectData, isObject, is);
	});

	describe('isRegExp', () => {
		testCheck(regExpData, isRegExp, is);
	});

	describe('isSet', () => {
		testCheck(setData, isSet, is);
	});

	describe('isString', () => {
		testCheck(stringData, isString, is);
	});

	describe('isSymbol', () => {
		testCheck(symbolData, isSymbol, is);
	});

	describe('isWeakMap', () => {
		testCheck(weakMapData, isWeakMap, is);
	});

	describe('isWeakSet', () => {
		testCheck(weakSetData, isWeakSet, is);
	});
});
