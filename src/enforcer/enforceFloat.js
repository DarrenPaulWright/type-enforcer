import isFloat from '../checks/isFloat.js';
import enforceNumber from './enforceNumber.js';

/**
 * Enforce that a value is a finite float. Uses [isFloat](docs/checks.md#isFloat).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * enforce.float(3.14159, 13.2);
 * // => 3.14159
 *
 * enforce.float('3.14159', 13.2);
 * // => 13.2
 *
 * enforce.float('3.14159', 13.2, true);
 * // => 3.14159
 * ```
 *
 * @function enforce.float
 * @alias enforceFloat
 *
 * @param {unknown} value
 * @param {number} alt - Returned if the value is not the correct type
 * @param {boolean} [coerce=false] - If true then coerce the value when possible
 * @param {number} [minValue]
 * @param {number} [maxValue]
 *
 * @returns {number}
 */
export default enforceNumber.extend(isFloat, Number);
