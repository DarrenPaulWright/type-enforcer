import { buildCheckWithCoerce } from './checks';
import isInstanceOf from './isInstanceOf';

export const isFinite = (item) => item !== Infinity && item !== -Infinity;

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
export default buildCheckWithCoerce((item) => isInstanceOf(item, Number) && !isNaN(item), (value) => !isNaN(value));
