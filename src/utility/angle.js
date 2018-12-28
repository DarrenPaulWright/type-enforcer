const TWO_PI = 2 * Math.PI;

/**
 * Angle functions.
 * @module angle
 */
export default angle = {
	/**
	 * Returns the same angle between 0 and 2 * PI
	 * @method normalize
	 * @member module:angle
	 * @static
	 * @param   {Number} angle
	 * @returns {Number} - The normalized angle
	 */
	normalize: function(angle) {
		angle %= TWO_PI;
		return (angle < 0) ? (angle + TWO_PI) : angle;
	},
	/**
	 * Returns the angle from origin to the provided Point
	 * @method fromOrigin
	 * @member module:angle
	 * @static
	 * @param   {Point} point
	 * @returns {Number} - The angle
	 */
	fromOrigin: function(point) {
		return angle.normalize(Math.atan2(point.y, point.x));
	}
};
