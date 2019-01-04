import { each, isArray, isNumber, isString } from 'lodash';
import angle from '../utility/angle';

/**
 * Point model with helper types
 *
 * ## Usage
 * ``` javascript
 * import { Point } from 'type-enforcer';
 * ```
 *
 * Examples:
 * ``` javascript
 * const point1 = new Point();
 * console.log(point1.toString());
 * // => '0,0'
 *
 * const point2 = new Point({ x:1, y:2 });
 * console.log(point2.toString());
 * // => '1,2'
 *
 * const point3 = new Point([3, 4]);
 * console.log(point3.toString());
 * // => '3,4'
 *
 * const point4 = new Point(5, 6);
 * console.log(point4.toString());
 * // => '5,6'
 * ```
 *
 * @class Point
 *
 * @arg {Number|Array|Object} [x=0]
 * @arg {Number} [y=0]
 */
export default class Point {
	constructor(x, y) {
		this.set(x, y);

		x = null;
		y = null;
	}

	/**
	 * Determine if something is a valid point
	 *
	 * @memberof Point
	 *
	 * @arg {String|Array|Point} value
	 *
	 * @returns {boolean}
	 */
	static isValid(point) {
		if (Point.isInstance(point)) {
			return true;
		}
		if (isArray(point)) {
			return point.length === 2 && isNumber(point[0]) && isNumber(point[1]);
		}
		return point && isNumber(point.x) && isNumber(point.y);
	}

	/**
	 * Determine if something is an instance of Point
	 *
	 * @memberof Point
	 *
	 * @arg {Point} is
	 *
	 * @returns {boolean}
	 */
	static isInstance(is) {
		return is instanceof Point;
	}

	/**
	 * Set x and y
	 *
	 * @memberof Point
	 * @instance
	 *
	 * @arg {Number} x
	 * @arg {Number} y
	 *
	 * @returns {this}
	 */
	set(x, y) {
		if (isArray(x)) {
			y = x[1];
			x = x[0];
		}
		else if (x && x.x) {
			y = x.y;
			x = x.x;
		}
		this.x = isNumber(x) ? x : 0;
		this.y = isNumber(y) ? y : 0;

		x = null;
		y = null;

		return this;
	}

	/**
	 * Get the point as a string with an optional suffix
	 *
	 * @memberof Point
	 * @instance
	 *
	 * @arg {String} [suffix]
	 *
	 * @returns {String}
	 */
	toString(suffix = '') {
		return this.x + suffix + ',' + this.y + suffix;
	}

	/**
	 * Determine if another point is the same as this one
	 *
	 * @memberof Point
	 * @instance
	 *
	 * @arg {Point} point2
	 *
	 * @returns {Boolean}
	 */
	isSame(point2) {
		return (this.x === point2.x && this.y === point2.y);
	}

	/**
	 * Adds the coordinates of another point to this one and returns a new point
	 *
	 * @memberof Point
	 * @instance
	 *
	 * @arg {Point} point2
	 *
	 * @returns {Boolean}
	 */
	add(point2) {
		return new Point(this.x + point2.x, this.y + point2.y);
	}

	/**
	 * Subtracts the coordinates of another point from this one and returns a new point
	 *
	 * @memberof Point
	 * @instance
	 *
	 * @arg {Point} point2
	 *
	 * @returns {Boolean}
	 */
	subtract(point2) {
		return new Point(this.x - point2.x, this.y - point2.y);
	}

	/**
	 * Finds the distance from point to origin
	 *
	 * @memberof Point
	 * @instance
	 *
	 * @returns {Number}
	 */
	distance() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	/**
	 * Finds the angle to this point from origin
	 *
	 * @memberof Point
	 * @instance
	 *
	 * @returns {Boolean}
	 */
	angle() {
		return angle.fromOrigin(this);
	}

	/**
	 * Returns a new point at a specific angle and distance from this point
	 *
	 * @memberof Point
	 * @instance
	 *
	 * @arg {Number} angle
	 * @arg {Number} distance
	 *
	 * @returns {Boolean}
	 */
	pointAtDistance(angle, distance) {
		return new Point(
			this.x + Math.cos(angle) * distance,
			this.y + Math.sin(angle) * distance
		);
	}

	/**
	 * Get a clone of this point
	 *
	 * @memberof Point
	 * @instance
	 *
	 * @returns {Boolean}
	 */
	clone() {
		return new Point(this.x, this.y);
	}
}
