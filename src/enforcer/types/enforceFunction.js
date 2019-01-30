import isFunction from '../../checks/types/isFunction';
import { baseEnforcer } from './enforcer';

/**
 * Enforce that a value is a function. Uses [isFunction](docs/checks.md#isFunction).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * const a = () => {};
 * const b = () => {};
 *
 * enforce.function(a, b);
 * // => a
 *
 * enforce.function('', b);
 * // => b
 * ```
 *
 * @function enforce.function
 *
 * @arg {*} value
 * @arg {Function} alt - Returned if the value is not the correct type
 *
 * @returns {Function}
 */
export default baseEnforcer(isFunction);
