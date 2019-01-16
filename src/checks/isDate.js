import { isDate } from 'lodash';
import { buildCheckWithCoerce } from './checks';

/**
 * Check if a value is a [date]{@link https://lodash.com/docs/#isDate}
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
 * @function isDate
 *
 * @arg {*} value
 *
 * @returns {Boolean}
 */
export default buildCheckWithCoerce(isDate, (value) => !isNaN(Date.parse(value)));