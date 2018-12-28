import { each, isArray, isNumber, isString } from 'lodash';
import angle from '../utility/angle';

/**
 * Point model with helper types
 * @module Point
 */
export default class Point {
	constructor(x, y) {
		this.set(x, y);

		x = null;
		y = null;
	}

	static isValid(point) {
		if (Point.isInstance(point)) {
			return true;
		}
		if (isArray(point)) {
			return point.length === 2 && isNumber(point[0]) && isNumber(point[1]);
		}
		return point && isNumber(point.x) && isNumber(point.y);
	}

	static isInstance(is) {
		return is instanceof Point;
	}

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
	}

	toString(suffix = '') {
		return this.x + suffix + ',' + this.y + suffix;
	}

	isSame(point2) {
		return (this.x === point2.x && this.y === point2.y);
	}

	add(point2) {
		return new Point(this.x + point2.x, this.y + point2.y);
	}

	subtract(point2) {
		return new Point(this.x - point2.x, this.y - point2.y);
	}

	distance() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	angle() {
		return angle.fromOrigin(this);
	}

	pointAtDistance(angle, distance) {
		return new Point(
			this.x + Math.cos(angle) * distance,
			this.y + Math.sin(angle) * distance
		);
	}

	clone() {
		return new Point(this.x, this.y);
	}
}
