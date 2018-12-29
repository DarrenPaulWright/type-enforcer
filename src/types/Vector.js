import { assign, isArray, isNumber } from 'lodash';
import enforce from '../enforcer/enforce';
import methodNumber from '../methods/types/methodNumber';
import methodPoint from '../methods/types/methodPoint';
import angle from '../utility/angle';

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
 */
export default class Vector {
	constructor(initStart, initEnd) {
		this[IS_BUSY] = true;
		this.start(initStart);
		this.end(initEnd);
		this[IS_BUSY] = false;

		calculateLength.call(this);
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
		enforce: (newValue, oldValue) => angle.normalize(enforce.number(newValue, oldValue)),
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
