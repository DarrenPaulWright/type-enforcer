import { isString } from 'lodash';
import { buildCheckWithCoerce } from './checks';

/**
 * Check if a value is a [string]{@link https://lodash.com/docs/#isString}
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
 * @function isString
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a String
 *
 * @returns {Boolean}
 */
export default buildCheckWithCoerce(isString, (value) => value !== null && value !== undefined && !!value.toString);
