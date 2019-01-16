import { isBoolean } from 'lodash';
import { buildCheckWithCoerce } from './checks';

/**
 * Check if a value is a [boolean]{@link https://lodash.com/docs/#isBoolean}
 *
 * @example
 * ``` javascript
 * import { isBool } from 'type-enforcer';
 *
 * isBool(false);
 * // => true
 *
 * isBool(undefined);
 * // => false
 *
 * isBool(undefined, true);
 * // => true
 * ```
 *
 * @function isBool
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if this value can be coerced into a boolean. Always returns true, as _everything_ can be coerced into a boolean.
 *
 * @returns {Boolean}
 */
export default buildCheckWithCoerce(isBoolean, () => true);
