import { buildCheckWithCoerce } from './checks';
import isInstanceOf from './isInstanceOf';

/**
 * Check if a value is a string
 *
 * @example
 * ``` javascript
 * import { isString } from 'type-enforcer';
 *
 * isString('type');
 * // => true
 *
 * isString(new Date());
 * // => false
 *
 * isString(new Date(), true);
 * // => true
 * ```
 *
 * @function is.string
 * @alias isString
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a String
 *
 * @returns {Boolean}
 */
export default buildCheckWithCoerce((item) => isInstanceOf(item, String), (value) => value !== null && value !== undefined && !!value.toString);
