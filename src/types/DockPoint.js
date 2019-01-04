import { assign } from 'lodash';
import methodEnum from '../methods/types/methodEnum';
import Enum from './Enum';

const SEPARATOR = '.';

const getOpposite = (direction) => {
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
};

/**
 * Allows the designation of a specific point relative to an object.
 *
 * ## Usage
 * ``` javascript
 * import { DockPoint } from 'type-enforcer';
 * ```
 *
 * @class DockPoint
 *
 * @arg {String} [value=DockPoint.POINTS.TOP_CENTER] - Anything from DockPoint.POINTS
 */
export default class DockPoint {
	/**
	 * @const BASIC_POINTS
	 * @static
	 * @memberof DockPoint
	 * @type {Enum}
	 */
	static BASIC_POINTS = new Enum({
		TOP: 'top',
		RIGHT: 'right',
		BOTTOM: 'bottom',
		LEFT: 'left',
		CENTER: 'center',
		NONE: ''
	});
	/**
	 * @const POINTS
	 * @static
	 * @memberof DockPoint
	 * @type {Enum}
	 */
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

	constructor(value) {
		this.value(value);
	}

	/**
	 * Determine if something is a valid dock point
	 *
	 * @memberof DockPoint
	 *
	 * @arg {String|DockPoint} value
	 *
	 * @returns {boolean}
	 */
	static isValid(value) {
		if (DockPoint.isInstance(value)) {
			return true;
		}

		return DockPoint.POINTS.has(value);
	}

	/**
	 * Determine if something is an instance of DockPoint
	 *
	 * @memberof DockPoint
	 *
	 * @arg {DockPoint} is
	 *
	 * @returns {boolean}
	 */
	static isInstance(is) {
		return is instanceof DockPoint;
	}

	/**
	 * Determine either the primary or secondary is equivalent to a value
	 *
	 * @memberof DockPoint
	 * @instance
	 *
	 * @arg {String} value - DockPoint.BASIC_POINTS
	 *
	 * @returns {boolean}
	 */
	has(value) {
		return this.primary() === value || this.secondary() === value;
	}

	/**
	 * Set the left or right value to the opposite, whether it's the primary or secondary
	 *
	 * @memberof DockPoint
	 * @instance
	 */
	swapHorizontal() {
		if (this.#horizontal.includes(this.primary())) {
			this.primary(this.oppositePrimary);
		}
		else {
			this.secondary(this.oppositeSecondary);
		}
	}

	/**
	 * Set the top or bottom value to the opposite, whether it's the primary or secondary
	 *
	 * @memberof DockPoint
	 * @instance
	 */
	swapVertical() {
		if (this.#vertical.includes(this.primary())) {
			this.primary(this.oppositePrimary);
		}
		else {
			this.secondary(this.oppositeSecondary);
		}
	}

	/**
	 * Get the opposite of the current primary
	 *
	 * @memberof DockPoint
	 * @instance
	 *
	 * @returns {String} DockPoint.BASIC_POINTS
	 */
	get oppositePrimary() {
		return getOpposite(this.primary());
	}

	/**
	 * Get the opposite of the current secondary
	 *
	 * @memberof DockPoint
	 * @instance
	 *
	 * @returns {String} DockPoint.BASIC_POINTS
	 */
	get oppositeSecondary() {
		return getOpposite(this.secondary());
	}

	/**
	 * Determine if another DockPoint is equivalent to this one
	 *
	 * @memberof DockPoint
	 * @instance
	 *
	 * @arg {*} dockPoint
	 *
	 * @returns {boolean}
	 */
	isSame(dockPoint) {
		return this.value() === (DockPoint.isInstance(dockPoint) ? dockPoint.value() : dockPoint);
	}

	/**
	 * Get the current value as a string
	 *
	 * @memberof DockPoint
	 * @instance
	 *
	 * @returns {String}
	 */
	toString() {
		return this.value() + '';
	}
}

assign(DockPoint.prototype, {
	/**
	 * The primary value
	 *
	 * @method
	 * @memberof DockPoint
	 * @instance
	 *
	 * @arg {String} [value] - DockPoint.BASIC_POINTS
	 *
	 * @returns {this|String} DockPoint.BASIC_POINTS
	 */
	primary: methodEnum({
		init: DockPoint.BASIC_POINTS.NONE,
		enum: DockPoint.BASIC_POINTS
	}),
	/**
	 * The secondary value
	 *
	 * @method
	 * @memberof DockPoint
	 * @instance
	 *
	 * @arg {String} [value] - DockPoint.BASIC_POINTS
	 *
	 * @returns {this|String} DockPoint.BASIC_POINTS
	 */
	secondary: methodEnum({
		init: DockPoint.BASIC_POINTS.NONE,
		enum: DockPoint.BASIC_POINTS
	}),
	/**
	 * The full value
	 *
	 * @method
	 * @memberof DockPoint
	 * @instance
	 *
	 * @arg {String} [value] - DockPoint.POINTS
	 *
	 * @returns {this|String} DockPoint.POINTS
	 */
	value: methodEnum({
		enum: DockPoint.POINTS,
		set: function(value) {
			value = value.split(SEPARATOR);
			this.primary(value[0])
				.secondary(value[1] || DockPoint.BASIC_POINTS.NONE);
		},
		get: function() {
			let value = this.primary();
			if (this.secondary() !== DockPoint.BASIC_POINTS.NONE) {
				value += SEPARATOR + this.secondary();
			}
			return value;
		}
	})
});
