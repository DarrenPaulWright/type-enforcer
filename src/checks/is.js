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
import isString from './isString';
import isSymbol from './isSymbol';

/**
 * Utility functions for checking if something is a particular data type.
 *
 * ``` javascript
 * import { is } from 'type-enforcer';
 *
 * // Or import individual functions
 * import { isBoolean, isString } from 'type-enforcer';
 * ```
 *
 * @typedef {object} is
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
	string: isString,
	symbol: isSymbol
};
