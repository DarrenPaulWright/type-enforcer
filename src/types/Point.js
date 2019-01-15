import isArray from '../checks/isArray';
import isNumber from '../checks/isNumber';
import isString from '../checks/isString';
import angle from '../utility/angle';

const SEPARATOR = ',';

const isNumeric = (value) => isNumber(value) || parseFloat(value).toString() === value;

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
	 * @arg {*} value
	 *
	 * @returns {boolean}
	 */
	static isValid(value) {
		if (value instanceof Point) {
			return true;
		}
		if (isString(value)) {
			value = value.split(SEPARATOR).map(parseFloat);
		}
		if (isArray(value)) {
			return value.length === 2 && isNumeric(value[0]) && isNumeric(value[1]);
		}
		return value && isNumeric(value.x) && isNumeric(value.y);
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
		if (isString(x) && !y) {
			x = x.split(SEPARATOR);
		}
		if (isArray(x)) {
			y = x[1];
			x = x[0];
		}
		else if (x && x.x) {
			y = x.y;
			x = x.x;
		}
		this.x = parseFloat(x) || 0;
		this.y = parseFloat(y) || 0;

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
		return this.x + suffix + SEPARATOR + this.y + suffix;
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
		if (!point2) {
			return false;
		}
		if (!(point2 instanceof Point)) {
			return new Point(point2).toString() === this.toString();
		}
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
