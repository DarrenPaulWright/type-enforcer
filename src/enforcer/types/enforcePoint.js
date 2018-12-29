import Point from '../../types/Point';

/**
 * If the first value is a point then return that, otherwise return the alt value.
 *
 * @function enforce.point
 *
 * @arg   {String|Point} value
 * @arg   {Point} alt
 *
 * @returns {Point}
 */
export default (value, alt) => {
	if (Point.isValid(value) && !Point.isInstance(value)) {
		value = new Point(value);
	}
	return Point.isInstance(value) ? value : alt;
};
