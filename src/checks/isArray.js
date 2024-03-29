import isJson from './isJson.js';

/**
 * Check if a value is an array.
 *
 * @example
 * ``` javascript
 * import { isArray } from 'type-enforcer';
 *
 * isArray([]);
 * // => true
 *
 * isArray('[]');
 * // => false
 *
 * isArray('[]', true);
 * // => true
 * ```
 *
 * @function is.array
 * @alias isArray
 *
 * @param {unknown} value - The value to check.
 * @param {boolean} [coerce=false] - If true then see if the value can be coerced into an array.
 *
 * @returns {boolean}
 */
export default (value, coerce) => {
	return Array.isArray(value) || (coerce === true && typeof value === 'string' && value.charAt(0) === '[' && isJson(value));
};
