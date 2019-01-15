import Vector from '../types/Vector';
import { buildCustomTypeCheck } from './checks';

/**
 * Check if a value is a Vector
 *
 * @example
 * ``` javascript
 * import { isVector } from 'type-enforcer';
 *
 * isVector(new Vector());
 * // => true
 * ```
 *
 * @function isVector
 *
 * @arg   {*} value
 *
 * @returns {Boolean}
 */
export default buildCustomTypeCheck(Vector);
