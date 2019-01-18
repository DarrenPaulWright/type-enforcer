import isVector from '../../checks/isVector';
import Vector from '../../types/Vector';
import enforcer from './enforcer';

/**
 * Enforce that a value is a [Vector](docs/Vector.md). Uses [isVector](docs/checks.md#isVector).
 *
 * @function enforce.vector
 *
 * @arg {*} value
 * @arg {Vector}  alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Vector}
 */
export default enforcer(isVector, (value) => new Vector(value));
