import { assign } from 'lodash';
import methodEnum from '../methods/types/methodEnum';
import Enum from './Enum';

const SEPARATOR = '.';

/**
 * A data type. Allows the designation of a specific point relative to an object.
 *
 * @module DockPoint
 * @constructor
 */
export default class DockPoint {
	static BASIC_POINTS = new Enum({
		TOP: 'top',
		RIGHT: 'right',
		BOTTOM: 'bottom',
		LEFT: 'left',
		CENTER: 'center',
		NONE: ''
	});
	static POINTS = new Enum(assign({}, DockPoint.BASIC_POINTS, {
		TOP_LEFT: DockPoint.BASIC_POINTS.TOP + SEPARATOR + DockPoint.BASIC_POINTS.LEFT,
		TOP_CENTER: DockPoint.BASIC_POINTS.TOP + SEPARATOR + DockPoint.BASIC_POINTS.CENTER,
		TOP_RIGHT: DockPoint.BASIC_POINTS.TOP + SEPARATOR + DockPoint.BASIC_POINTS.RIGHT,
		RIGHT_TOP: DockPoint.BASIC_POINTS.RIGHT + SEPARATOR + DockPoint.BASIC_POINTS.TOP,
		RIGHT_CENTER: DockPoint.BASIC_POINTS.RIGHT + SEPARATOR + DockPoint.BASIC_POINTS.CENTER,
		RIGHT_BOTTOM: DockPoint.BASIC_POINTS.RIGHT + SEPARATOR + DockPoint.BASIC_POINTS.BOTTOM,
		BOTTOM_RIGHT: DockPoint.BASIC_POINTS.BOTTOM + SEPARATOR + DockPoint.BASIC_POINTS.RIGHT,
		BOTTOM_CENTER: DockPoint.BASIC_POINTS.BOTTOM + SEPARATOR + DockPoint.BASIC_POINTS.CENTER,
		BOTTOM_LEFT: DockPoint.BASIC_POINTS.BOTTOM + SEPARATOR + DockPoint.BASIC_POINTS.LEFT,
		LEFT_BOTTOM: DockPoint.BASIC_POINTS.LEFT + SEPARATOR + DockPoint.BASIC_POINTS.BOTTOM,
		LEFT_CENTER: DockPoint.BASIC_POINTS.LEFT + SEPARATOR + DockPoint.BASIC_POINTS.CENTER,
		LEFT_TOP: DockPoint.BASIC_POINTS.LEFT + SEPARATOR + DockPoint.BASIC_POINTS.TOP
	}));
	#horizontal = [DockPoint.BASIC_POINTS.LEFT, DockPoint.BASIC_POINTS.RIGHT];
	#vertical = [DockPoint.BASIC_POINTS.TOP, DockPoint.BASIC_POINTS.BOTTOM];

	constructor(input) {
		this.value(input || DockPoint.POINTS.TOP_CENTER);
	}

	#getOpposite(direction) {
		switch (direction) {
			case DockPoint.BASIC_POINTS.TOP:
				return DockPoint.BASIC_POINTS.BOTTOM;
			case DockPoint.BASIC_POINTS.RIGHT:
				return DockPoint.BASIC_POINTS.LEFT;
			case DockPoint.BASIC_POINTS.BOTTOM:
				return DockPoint.BASIC_POINTS.TOP;
			case DockPoint.BASIC_POINTS.LEFT:
				return DockPoint.BASIC_POINTS.RIGHT;
			case DockPoint.BASIC_POINTS.CENTER:
				return DockPoint.BASIC_POINTS.CENTER;
			default:
				return DockPoint.BASIC_POINTS.NONE;
		}
	}

	static isValid(value) {
		if (DockPoint.isInstance(value)) {
			return true;
		}

		return DockPoint.POINTS.has(value);
	}

	static isInstance(is) {
		return is instanceof DockPoint;
	}

	has(input) {
		return this.primary() === input || this.secondary() === input;
	}

	swapHorizontal() {
		if (this.#horizontal.includes(this.primary())) {
			this.primary(this.oppositePrimary);
		}
		else {
			this.secondary(this.oppositeSecondary);
		}
	}

	swapVertical() {
		if (this.#vertical.includes(this.primary())) {
			this.primary(this.oppositePrimary);
		}
		else {
			this.secondary(this.oppositeSecondary);
		}
	}

	get oppositePrimary() {
		return this.#getOpposite(this.primary());
	}

	get oppositeSecondary() {
		return this.#getOpposite(this.secondary());
	}
}

assign(DockPoint.prototype, {
	primary: methodEnum({
		enum: DockPoint.BASIC_POINTS
	}),
	secondary: methodEnum({
		enum: DockPoint.BASIC_POINTS
	}),
	value: methodEnum({
		enum: DockPoint.POINTS,
		set: function(value) {
			value = value.split(SEPARATOR);
			this.primary(value[0])
				.secondary(value[1] || DockPoint.BASIC_POINTS.NONE);
		}
	})
});
