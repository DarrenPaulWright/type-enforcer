import isString from '../checks/isString.js';
import enforceObject from './enforceObject.js';

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
 * @alias enforceString
 *
 * @param {unknown} value
 * @param {string} alt - Returned if the value is not the correct type
 * @param {boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {string}
 */
export default enforceObject.extend(isString, (value) => value.toString());
