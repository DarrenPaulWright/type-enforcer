/**
 * Check if a value is a number
 *
 * @example
 * ``` javascript
 * import { isNumber } from 'type-enforcer';
 *
 * isNumber(3.14159);
 * // => true
 *
 * isNumber('3.14159');
 * // => false
 *
 * isNumber('3.14159', true);
 * // => true
 * ```
 *
 * @function is.number
 * @alias isNumber
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a Number
 *
 * @returns {Boolean}
 */
export default (value, coerce) => {
	return ((typeof value === 'number' || value instanceof Number) && value === value) || (coerce === true && !isNaN(value));
};