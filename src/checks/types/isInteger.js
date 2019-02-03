import { buildCheckWithCoerce } from './checks';
import isNumber from './isNumber';

/**
 * Check if a value is an integer
 *
 * @example
 * ``` javascript
 * import { isInteger } from 'type-enforcer';
 *
 * isInteger(42);
 * // => true
 *
 * isInteger('42');
 * // => false
 *
 * isInteger('42', true);
 * // => true
 * ```
 *
 * @function isInteger
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into an Integer
 *
 * @returns {Boolean}
 */
export default buildCheckWithCoerce((item) => Number.isInteger(item) || isNumber(item) && Number.isInteger(Number.parseFloat(item)), (value) => !isNaN(value) && !isNaN(parseInt(value)));
