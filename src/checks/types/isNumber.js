import { buildCheckWithCoerce } from './checks';
import isInstanceOf from './isInstanceOf';

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
 * @function isNumber
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a Number
 *
 * @returns {Boolean}
 */
export default buildCheckWithCoerce((item) => isInstanceOf(item, Number), (value) => !isNaN(value));
