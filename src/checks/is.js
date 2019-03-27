import isArray from './types/isArray';
import isBoolean from './types/isBoolean';
import isCssSize from './types/isCssSize';
import isDate from './types/isDate';
import isDockPoint from './types/isDockPoint';
import isElement from './types/isElement';
import isFloat from './types/isFloat';
import isFunction from './types/isFunction';
import isInstanceOf from './types/isInstanceOf';
import isInteger from './types/isInteger';
import isJson from './types/isJson';
import isNumber from './types/isNumber';
import isObject from './types/isObject';
import isPoint from './types/isPoint';
import isRegExp from './types/isRegExp';
import isString from './types/isString';
import isThickness from './types/isThickness';
import isVector from './types/isVector';

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
	cssSize: isCssSize,
	date: isDate,
	dockPoint: isDockPoint,
	element: isElement,
	float: isFloat,
	function: isFunction,
	instanceOf: isInstanceOf,
	integer: isInteger,
	json: isJson,
	number: isNumber,
	object: isObject,
	point: isPoint,
	regExp: isRegExp,
	string: isString,
	thickness: isThickness,
	vector: isVector
};
