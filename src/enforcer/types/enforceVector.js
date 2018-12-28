import Vector from '../../types/Vector';

/**
 * If the first value is a vector then return that, otherwise return the second value.
 *
 * @function enforce.vector
 *
 * @param   {Vector} setterValue
 * @param   {Vector} defaultValue
 *
 * @returns {Vector}
 */
export default (setterValue, defaultValue) => {
	return Vector.isInstance(setterValue) ? setterValue : defaultValue;
};
