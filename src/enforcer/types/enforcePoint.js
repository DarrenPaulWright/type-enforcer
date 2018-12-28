import Point from '../../types/Point';

/**
 * If the first value is a point then return that, otherwise return the second value.
 *
 * @function enforce.point
 *
 * @param   {String|Point} setterValue
 * @param   {Point} defaultValue
 *
 * @returns {Point}
 */
export default (setterValue, defaultValue) => {
	if (Point.isValid(setterValue) && !Point.isInstance(setterValue)) {
		setterValue = new Point(setterValue);
	}
	return Point.isInstance(setterValue) ? setterValue : defaultValue;
};
