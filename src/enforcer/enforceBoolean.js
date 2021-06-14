import isBoolean from '../checks/isBoolean.js';
import enforceObject from './enforceObject.js';

/**
 * Enforce that a value is a boolean. Uses [isBoolean](docs/checks.md#isBoolean).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * enforce.boolean(false, true);
 * // => false
 *
 * enforce.boolean('', true);
 * // => true
 *
 * enforce.boolean('', true, true);
 * // => false
 * ```
 *
 * @function enforce.boolean
 * @alias enforceBoolean
 *
 * @param {*} value
 * @param {boolean} alt - Returned if the value is not the correct type
 * @param {boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {boolean}
 */
export default enforceObject.extend(isBoolean, Boolean);
