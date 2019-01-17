import isVector from '../../checks/isVector';
import Vector from '../../types/Vector';
import enforcer from './enforcer';

/**
 * If the first value is a vector then return that, otherwise return the alt value.
 *
 * @function enforce.vector
 *
 * @arg {*} value
 * @arg {Vector}  alt
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Vector}
 */
export default enforcer(isVector, (value) => new Vector(value));
