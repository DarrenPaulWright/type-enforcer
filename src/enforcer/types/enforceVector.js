import isVector from '../../checks/isVector';
import Vector from '../../types/Vector';
import { customTypeEnforcer } from './customTypeEnforcer';

/**
 * If the first value is a vector then return that, otherwise return the alt value.
 *
 * @function enforce.vector
 *
 * @arg {*} value
 * @arg {Vector}  alt
 * @arg {Boolean} [coerce=false] - If true then allow values that can be coerced into a Vector
 *
 * @returns {Vector}
 */
export default customTypeEnforcer(Vector, isVector);
