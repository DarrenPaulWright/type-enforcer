import Vector from '../types/Vector';
import { buildCustomTypeCheck } from './checks';

/**
 * Check if a value is a [Vector](docs/Vector.md)
 *
 * @example
 * ``` javascript
 * import { isVector } from 'type-enforcer';
 *
 * isVector(new Vector());
 * // => true
 *
 * isVector('[[1,2],[3,4]]');
 * // => false
 *
 * isVector('[[1,2],[3,4]]', true);
 * // => true
 * ```
 *
 * @function isVector
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a Vector
 *
 * @returns {Boolean}
 */
export default buildCustomTypeCheck(Vector);
