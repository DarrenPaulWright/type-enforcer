import { isBoolean } from 'lodash';
import { buildCheckWithCoerce } from './checks';

/**
 * Check if a value is a [boolean]{@link https://lodash.com/docs/#isBoolean}
 *
 * @example
 * ``` javascript
 * import { isBoolean } from 'type-enforcer';
 *
 * isBoolean(false);
 * // => true
 *
 * isBoolean(undefined);
 * // => false
 *
 * isBoolean(undefined, true);
 * // => true
 * ```
 *
 * @function isBoolean
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a boolean. Always returns true, as _everything_ can be coerced into a boolean.
 *
 * @returns {Boolean}
 */
export default buildCheckWithCoerce(isBoolean, () => true);
