import Vector from '../../types/Vector';

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
 * @function is.vector
 * @alias isVector
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a Vector
 *
 * @returns {Boolean}
 */
export default (value, coerce) => {
	return (value instanceof Vector) || (coerce === true && Vector.isValid(value));
};
