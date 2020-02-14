import isArray from './isArray.js';
import isBoolean from './isBoolean.js';
import isDate from './isDate.js';
import isFloat from './isFloat.js';
import isFunction from './isFunction.js';
import isInstanceOf from './isInstanceOf.js';
import isInteger from './isInteger.js';
import isJson from './isJson.js';
import isMap from './isMap.js';
import isNumber from './isNumber.js';
import isObject from './isObject.js';
import isPromise from './isPromise.js';
import isRegExp from './isRegExp.js';
import isSet from './isSet.js';
import isString from './isString.js';
import isSymbol from './isSymbol.js';
import isWeakMap from './isWeakMap.js';
import isWeakSet from './isWeakSet.js';

/**
 * Utility functions for checking if a value is a particular data type.
 *
 * @example
 * ``` javascript
 * import { is } from 'type-enforcer';
 *
 * // Or import individual functions
 * import { isBoolean, isString } from 'type-enforcer';
 * ```
 *
 * @namespace is
 */
export default {
	array: isArray,
	boolean: isBoolean,
	date: isDate,
	float: isFloat,
	function: isFunction,
	instanceOf: isInstanceOf,
	integer: isInteger,
	json: isJson,
	map: isMap,
	number: isNumber,
	object: isObject,
	promise: isPromise,
	regExp: isRegExp,
	set: isSet,
	string: isString,
	symbol: isSymbol,
	weakMap: isWeakMap,
	weakSet: isWeakSet
};
