import isVector from '../../checks/types/isVector';
import Vector from '../../types/Vector';

/**
 * Enforce that a value is a [Vector](docs/Vector.md). Uses [isVector](docs/checks.md#isVector).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * enforce.vector(new Vector('[[1,2],[3,4]]'), new Vector());
 * // => vector of '[[1,2],[3,4]]'
 *
 * enforce.vector('[[1,2],[3,4]]', new Vector());
 * // => vector of '[[0,0],[0,0]]'
 *
 * enforce.vector('[[1,2],[3,4]]', new Vector(), true);
 * // => vector of '[[1,2],[3,4]]'
 * ```
 *
 * @function enforce.vector
 * @alias enforceVector
 *
 * @arg {*} value
 * @arg {Vector}  alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Vector}
 */
export default (value, alt, coerce) => {
	if (coerce === true && !isVector(value) && isVector(value, true)) {
		return new Vector(value);
	}
	return isVector(value) ? value : alt;
};
