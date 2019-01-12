import Vector from '../../types/Vector';
import customTypeEnforcer from './customTypeEnforcer';

/**
 * If the first value is a vector then return that, otherwise return the alt value.
 *
 * @function enforce.vector
 *
 * @arg {*} value
 * @arg {Vector}  alt
 * @arg {Object}  [options]
 * @arg {Boolean} [options.coerce=true] - If false, then will only accept a specific instance
 *
 * @returns {Vector}
 */
export default customTypeEnforcer(Vector);
