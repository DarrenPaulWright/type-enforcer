import Vector from '../../types/Vector';

/**
 * If the first value is a vector then return that, otherwise return the alt value.
 *
 * @function enforce.vector
 *
 * @arg   {*} value
 * @arg   {Vector} alt
 *
 * @returns {Vector}
 */
export default (value, alt) => {
	return Vector.isInstance(value) ? value : alt;
};
