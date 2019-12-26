import isArray from './isArray';
import isBoolean from './isBoolean';
import isDate from './isDate';
import isFloat from './isFloat';
import isFunction from './isFunction';
import isInstanceOf from './isInstanceOf';
import isInteger from './isInteger';
import isJson from './isJson';
import isMap from './isMap';
import isNumber from './isNumber';
import isObject from './isObject';
import isRegExp from './isRegExp';
import isSet from './isSet';
import isString from './isString';
import isSymbol from './isSymbol';
import isWeakMap from './isWeakMap';
import isWeakSet from './isWeakSet';

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
	regExp: isRegExp,
	set: isSet,
	string: isString,
	symbol: isSymbol,
	weakMap: isWeakMap,
	weakSet: isWeakSet
};
