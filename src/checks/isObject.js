import isJson from './isJson.js';

/**
 * Check if a value is a plain object.
 *
 * @example
 * ``` javascript
 * import { isObject } from 'type-enforcer';
 *
 * isObject({});
 * // => true
 *
 * isObject('{}');
 * // => false
 *
 * isObject('{}', true);
 * // => true
 * ```
 *
 * @function is.object
 * @alias isObject
 *
 * @param {unknown} value - The value to check.
 * @param {boolean} [coerce=false] - If true then see if the value can be coerced into an Object.
 *
 * @returns {boolean}
 */
export default (value, coerce) => {
	return Boolean(value) && (value.constructor === Object || (coerce === true && typeof value === 'string' && value.charAt(0) === '{' && isJson(value)));
};
