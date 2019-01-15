import { assign } from 'lodash';
import isArray from '../checks/isArray';
import isJson from '../checks/isJson';
import enforceNumber from '../enforcer/types/enforceNumber';
import methodNumber from '../methods/types/methodNumber';
import methodPoint from '../methods/types/methodPoint';
import angle from '../utility/angle';
import Point from './Point';

const calculateLength = function() {
	if (!this[IS_BUSY]) {
		this[IS_BUSY] = true;

		this.offset(this.end().subtract(this.start()));
		this.length(this.offset().distance());
		this.angle(this.offset().angle());

		this[IS_BUSY] = false;
	}
};

const setDestinationFromAngle = function() {
	if (!this[IS_BUSY]) {
		this[IS_BUSY] = true;

		this.end(this.start().pointAtDistance(this.angle(), this.length()))
			.offset(this.end().subtract(this.start()));

		this[IS_BUSY] = false;
	}
};

const setEndFromOffset = function() {
	if (!this[IS_BUSY]) {
		this[IS_BUSY] = true;

		this.end(this.start().add(this.offset()))
			.length(this.offset().distance());

		this[IS_BUSY] = false;
	}
};

const IS_BUSY = Symbol();

/**
 * Vector model with helper types
 *
 * ## Usage
 * ``` javascript
 * import { Vector } from 'type-enforcer';
 * ```
 *
 * @class Vector
 *
 * @param {Point} [start]
 * @param {Point} [end]
 */
export default class Vector {
	constructor(start, end) {
		this[IS_BUSY] = true;
		if (start && !end) {
			if (Vector.isValid(start)) {
				start = JSON.parse(start);
				end = start[1];
				start = start[0];
			}
		}
		this.start(start);
		this.end(end);
		this[IS_BUSY] = false;

		calculateLength.call(this);
	}

	/**
	 * Determine if something is a valid Vector
	 *
	 * @memberof Vector
	 *
	 * @arg {*} value
	 *
	 * @returns {boolean}
	 */
	static isValid(value) {
		if (Vector.isInstance(value)) {
			return true;
		}
		if (!isJson(value)) {
			return false;
		}

		value = JSON.parse(value);

		return (isArray(value) && value.length === 2 && Point.isValid(value[0]) && Point.isValid(value[1]));
	}

	/**
	 * Determine if something is an instance of Vector
	 *
	 * @memberof Vector
	 *
	 * @arg {Vector} is
	 *
	 * @returns {boolean}
	 */
	static isInstance(is) {
		return is instanceof Vector;
	}

	/**
	 * Determine if another vector is the same as this one
	 *
	 * @memberof Vector
	 * @instance
	 *
	 * @arg {Vector} vector2
	 *
	 * @returns {Boolean}
	 */
	isSame(vector2) {
		if (!Vector.isInstance(vector2)) {
			return false;
		}
		return vector2.start().isSame(this.start()) && vector2.end().isSame(this.end());
	}

	/**
	 * Switch the start and end points
	 *
	 * @memberof Vector
	 * @instance
	 */
	invert() {
		let tempOrigin = this.start();

		this.start(this.end());
		this.end(tempOrigin);
		tempOrigin = null;

		return this;
	}

	/**
	 * Get a string representation of the vector
	 *
	 * @memberof Vector
	 * @instance
	 */
	toString() {
		return '[[' + this.start().toString() + '],[' + this.end().toString() + ']]';
	}
}

assign(Vector.prototype, {
	/**
	 * The start point
	 *
	 * @method
	 * @memberof Vector
	 * @instance
	 *
	 * @arg {Point} [point]
	 *
	 * @returns {this|Point}
	 */
	start: methodPoint({
		set: calculateLength
	}),
	/**
	 * The end point
	 *
	 * @method
	 * @memberof Vector
	 * @instance
	 *
	 * @arg {Point} [point]
	 *
	 * @returns {this|Point}
	 */
	end: methodPoint({
		set: calculateLength
	}),
	/**
	 * The length of the vector. Resets the end point.
	 *
	 * @method
	 * @memberof Vector
	 * @instance
	 *
	 * @arg {Number} [length]
	 *
	 * @returns {this|Number}
	 */
	length: methodNumber({
		set: setDestinationFromAngle
	}),
	/**
	 * The angle from the start point to the end point. Resets the end point
	 *
	 * @method
	 * @memberof Vector
	 * @instance
	 *
	 * @arg {Number} [angle]
	 *
	 * @returns {this|Number}
	 */
	angle: methodNumber({
		enforce: (newValue, oldValue) => angle.normalize(enforceNumber(newValue, oldValue)),
		set: setDestinationFromAngle
	}),
	/**
	 * The x and y difference represented as a point
	 *
	 * @method
	 * @memberof Vector
	 * @instance
	 *
	 * @arg {Point} [point]
	 *
	 * @returns {this|Point}
	 */
	offset: methodPoint({
		set: setEndFromOffset
	})
});
