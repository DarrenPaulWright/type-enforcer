/**
 * Check if a value is a boolean
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
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a boolean. Always returns true, as _everything_ can be coerced into a boolean.
 *
 * @returns {Boolean}
 */
export default (value, coerce) => {
	return value === true || value === false || coerce === true || value instanceof Boolean;
};
