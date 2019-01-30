import isObject from '../../checks/types/isObject';
import enforcer from './enforcer';

/**
 * Enforce that a value is an object. Uses [isObject](docs/checks.md#isObject).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * const a = {};
 * const b = {};
 *
 * enforce.object(a, b);
 * // => a
 *
 * enforce.object('{}', b);
 * // => b
 *
 * enforce.object('{}', b, true);
 * // => {}
 * ```
 *
 * @function enforce.object
 *
 * @arg {*} value
 * @arg {Object} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Object}
 */
export default enforcer(isObject, Object);
