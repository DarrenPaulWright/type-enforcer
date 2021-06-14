/**
 * Check if a value is a string.
 *
 * @example
 * ``` javascript
 * import { isString } from 'type-enforcer';
 *
 * isString('type');
 * // => true
 *
 * isString(new Date());
 * // => false
 *
 * isString(new Date(), true);
 * // => true
 * ```
 *
 * @function is.string
 * @alias isString
 *
 * @param {*} value - The value to check.
 * @param {boolean} [coerce=false] - If true then see if the value can be coerced into a string.
 *
 * @returns {boolean}
 */
export default (value, coerce) => {
	return typeof value === 'string' || value instanceof String || (coerce === true && value !== null && value !== undefined && value.toString !== undefined);
};
