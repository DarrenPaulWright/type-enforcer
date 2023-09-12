/**
 * Check if a value is a date.
 *
 * @example
 * ``` javascript
 * import { isDate } from 'type-enforcer';
 *
 * isDate(new Date());
 * // => true
 *
 * isDate('10/12/1980');
 * // => false
 *
 * isDate('10/12/1980', true);
 * // => true
 * ```
 *
 * @function is.date
 * @alias isDate
 *
 * @param {unknown} value - The value to check.
 * @param {boolean} [coerce=false] - If true then see if the value can be coerced into a Date.
 *
 * @returns {boolean}
 */
export default (value, coerce) => {
	return value instanceof Date || (coerce === true && typeof value !== 'symbol' && !isNaN(Date.parse(value)));
};
