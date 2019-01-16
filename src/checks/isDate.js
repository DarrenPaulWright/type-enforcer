import { isDate } from 'lodash';

/**
 * Check if a value is a [date]{@link https://lodash.com/docs/#isDate}
 *
 * @example
 * ``` javascript
 * import { isDate } from 'type-enforcer';
 *
 * isDate(new Date());
 * // => true
 * ```
 *
 * @function isDate
 *
 * @arg {*} value
 *
 * @returns {Boolean}
 */
export default (value) => isDate(value);
