import { assert } from 'chai';
import displayValue from 'display-value';
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
} from '../src';
import isTestUtility from './isTestUtility';
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
	testTypes,
	weakMapData,
	weakSetData
} from './testValues';

describe('checks', () => {
	describe('isArray', () => {
		isTestUtility(arrayData, isArray);
	});
	describe('isBoolean', () => {
		isTestUtility(booleanData, isBoolean);
	});

	describe('isDate', () => {
		isTestUtility(dateData, isDate);
	});

	describe('isFloat', () => {
		isTestUtility(floatData, isFloat);
	});

	describe('isFunction', () => {
		isTestUtility(functionData, isFunction);
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
					it('should return false for ' + displayValue(baseType.value) + ' and ' + displayValue(newValue), () => {
						assert.isFalse(isInstanceOf(newValue, baseType.value));
					});
				});
			}
		});
	});

	describe('isInteger', () => {
		isTestUtility(integerData, isInteger);
	});

	describe('isJson', () => {
		isTestUtility(jsonData, isJson);
	});

	describe('isMap', () => {
		isTestUtility(mapData, isMap);
	});

	describe('isNumber', () => {
		isTestUtility(numberData, isNumber);

		it('should return false for NaN', () => {
			assert.isFalse(isNumber(NaN));
			assert.isFalse(isNumber(NaN), true);
		});
	});

	describe('isObject', () => {
		isTestUtility(objectData, isObject);
	});

	describe('isRegExp', () => {
		isTestUtility(regExpData, isRegExp);
	});

	describe('isSet', () => {
		isTestUtility(setData, isSet);
	});

	describe('isString', () => {
		isTestUtility(stringData, isString);
	});

	describe('isSymbol', () => {
		isTestUtility(symbolData, isSymbol);
	});

	describe('isWeakMap', () => {
		isTestUtility(weakMapData, isWeakMap);
	});

	describe('isWeakSet', () => {
		isTestUtility(weakSetData, isWeakSet);
	});
});
