/**
 * Check if a value is a boolean.
 *
 * @example
 * ``` javascript
 * import { isBoolean } from 'type-enforcer';
 *
 * isBoolean(false);
 * // => true
 *
 * isBoolean('a string');
 * // => false
 *
 * isBoolean('a string', true);
 * // => true
 * ```
 *
 * @function is.boolean
 * @alias isBoolean
 *
 * @param {*} value - The value to check.
 * @param {boolean} [coerce=false] - If true then see if the value can be coerced into a boolean. Always returns true, as _everything_ can be coerced into a boolean.
 *
 * @returns {boolean}
 */
export default (value, coerce) => {
	return value === true || value === false || coerce === true || value instanceof Boolean;
};
