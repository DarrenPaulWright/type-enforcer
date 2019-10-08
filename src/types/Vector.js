import isArray from '../checks/types/isArray';
import isJson from '../checks/types/isJson';
import enforceNumber from '../enforcer/types/enforceNumber';
import methodNumber from '../methods/types/methodNumber';
import methodPoint from '../methods/types/methodPoint';
import angle from '../utility/angle';
import PrivateVars from '../utility/PrivateVars';
import Point from './Point';

const calculateLength = function() {
	const _self = _(this);

	if (!_self.isBusy) {
		_self.isBusy = true;

		this.offset(this.end().subtract(this.start()));
		this.length(this.offset().distance());
		this.angle(this.offset().angle());

		_self.isBusy = false;
	}
};

const setDestinationFromAngle = function() {
	const _self = _(this);

	if (!_self.isBusy) {
		_self.isBusy = true;

		this.end(this.start().pointAtDistance(this.angle(), this.length()))
			.offset(this.end().subtract(this.start()));

		_self.isBusy = false;
	}
};

const setEndFromOffset = function() {
	const _self = _(this);

	if (!_self.isBusy) {
		_self.isBusy = true;

		this.end(this.start().add(this.offset()))
			.length(this.offset().distance());

		_self.isBusy = false;
	}
};

const _ = new PrivateVars();

/**
 * Vector model with helper types
 *
 * ``` javascript
 * import { Vector } from 'type-enforcer';
 * ```
 *
 * @class Vector
 *
 * @arg {Point} [start]
 * @arg {Point} [end]
 */
export default class Vector {
	constructor(start, end) {
		const _self = _.set(this, {
			isBusy: true
		});
		if (start && !end) {
			if (Vector.isValid(start)) {
				start = JSON.parse(start);
				end = start[1];
				start = start[0];
			}
		}
		this.start(start);
		this.end(end);
		_self.isBusy = false;

		calculateLength.call(this);
	}

	/**
	 * Determine if something is a valid Vector
	 *
	 * @memberOf Vector
	 *
	 * @arg {*} value
	 *
	 * @returns {boolean}
	 */
	static isValid(value) {
		if (value instanceof Vector) {
			return true;
		}
		if (!isJson(value)) {
			return false;
		}

		value = JSON.parse(value);

		return (isArray(value) && value.length === 2 && Point.isValid(value[0]) && Point.isValid(value[1]));
	}

	/**
	 * Determine if another vector is the same as this one
	 *
	 * @memberOf Vector
	 * @instance
	 *
	 * @arg {Vector} vector2
	 *
	 * @returns {Boolean}
	 */
	isSame(vector2) {
		if (!(vector2 instanceof Vector)) {
			return false;
		}
		return vector2.start().isSame(this.start()) && vector2.end().isSame(this.end());
	}

	/**
	 * Switch the start and end points
	 *
	 * @memberOf Vector
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
	 * @memberOf Vector
	 * @instance
	 */
	toString() {
		return '[[' + this.start().toString() + '],[' + this.end().toString() + ']]';
	}
}

Object.assign(Vector.prototype, {
	/**
	 * The start point
	 *
	 * @method
	 * @memberOf Vector
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
	 * @memberOf Vector
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
	 * @memberOf Vector
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
	 * @memberOf Vector
	 * @instance
	 *
	 * @arg {Number} [angle]
	 *
	 * @returns {this|Number}
	 */
	angle: methodNumber({
		enforce(newValue, oldValue) {
			return angle.normalize(enforceNumber(newValue, oldValue));
		},
		set: setDestinationFromAngle
	}),
	/**
	 * The x and y difference represented as a point
	 *
	 * @method
	 * @memberOf Vector
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
