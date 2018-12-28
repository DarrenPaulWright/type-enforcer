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
 * @module Vector
 */
export default class Vector {
	constructor(initStart, initEnd) {
		this[IS_BUSY] = true;
		this.start(initStart);
		this.end(initEnd);
		this[IS_BUSY] = false;

		calculateLength.call(this);
	}

	static isInstance(is) {
		return is instanceof Vector;
	}

	isSame(vector2) {
		return vector2.start().isSame(this.start()) && vector2.end().isSame(this.end());
	}

	invert() {
		let tempOrigin = this.start();

		this.start(this.end());
		this.end(tempOrigin);
		tempOrigin = null;

		return this;
	}
}

assign(Vector.prototype, {
	start: methodPoint({
		set: calculateLength
	}),
	end: methodPoint({
		set: calculateLength
	}),
	length: methodNumber({
		set: setDestinationFromAngle
	}),
	angle: methodNumber({
		enforce: (newValue, oldValue) => angle.normalize(enforce.number(newValue, oldValue)),
		set: setDestinationFromAngle
	}),
	offset: methodPoint({
		set: setEndFromOffset
	})
});
