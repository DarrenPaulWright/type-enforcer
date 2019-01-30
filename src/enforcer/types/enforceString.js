import isString from '../../checks/types/isString';
import { coercibleEnforcer } from './enforcer';

/**
 * Enforce that a value is a string. Uses [isString](docs/checks.md#isString).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * enforce.string('a', 'b');
 * // => 'a'
 *
 * enforce.string(new Point(), 'b');
 * // => 'b'
 *
 * enforce.string(new Point(), 'b', true);
 * // => '0,0'
 * ```
 *
 * @function enforce.string
 *
 * @arg {*} value
 * @arg {String} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {String}
 */
export default coercibleEnforcer(isString, (value) => value + '');
