/**
 * Check if a value is a date
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
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a Date
 *
 * @returns {Boolean}
 */
export default (value, coerce) => {
	return value instanceof Date || (coerce === true && typeof value !== 'symbol' && !isNaN(Date.parse(value)));
};
