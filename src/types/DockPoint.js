import methodEnum from '../methods/types/methodEnum';
import Enum from './Enum';

const SEPARATOR = '.';
const BASIC_POINTS = new Enum({
	TOP: 'top',
	RIGHT: 'right',
	BOTTOM: 'bottom',
	LEFT: 'left',
	CENTER: 'center',
	NONE: ''
});
const POINTS = new Enum(Object.assign({}, BASIC_POINTS, {
	TOP_LEFT: BASIC_POINTS.TOP + SEPARATOR + BASIC_POINTS.LEFT,
	TOP_CENTER: BASIC_POINTS.TOP + SEPARATOR + BASIC_POINTS.CENTER,
	TOP_RIGHT: BASIC_POINTS.TOP + SEPARATOR + BASIC_POINTS.RIGHT,
	RIGHT_TOP: BASIC_POINTS.RIGHT + SEPARATOR + BASIC_POINTS.TOP,
	RIGHT_CENTER: BASIC_POINTS.RIGHT + SEPARATOR + BASIC_POINTS.CENTER,
	RIGHT_BOTTOM: BASIC_POINTS.RIGHT + SEPARATOR + BASIC_POINTS.BOTTOM,
	BOTTOM_RIGHT: BASIC_POINTS.BOTTOM + SEPARATOR + BASIC_POINTS.RIGHT,
	BOTTOM_CENTER: BASIC_POINTS.BOTTOM + SEPARATOR + BASIC_POINTS.CENTER,
	BOTTOM_LEFT: BASIC_POINTS.BOTTOM + SEPARATOR + BASIC_POINTS.LEFT,
	LEFT_BOTTOM: BASIC_POINTS.LEFT + SEPARATOR + BASIC_POINTS.BOTTOM,
	LEFT_CENTER: BASIC_POINTS.LEFT + SEPARATOR + BASIC_POINTS.CENTER,
	LEFT_TOP: BASIC_POINTS.LEFT + SEPARATOR + BASIC_POINTS.TOP
}));
const HORIZONTAL_POINTS = [BASIC_POINTS.LEFT, BASIC_POINTS.RIGHT];
const VERTICAL_POINTS = [BASIC_POINTS.TOP, BASIC_POINTS.BOTTOM];

const getOpposite = (direction) => {
	switch (direction) {
		case BASIC_POINTS.TOP:
			return BASIC_POINTS.BOTTOM;
		case BASIC_POINTS.RIGHT:
			return BASIC_POINTS.LEFT;
		case BASIC_POINTS.BOTTOM:
			return BASIC_POINTS.TOP;
		case BASIC_POINTS.LEFT:
			return BASIC_POINTS.RIGHT;
		case BASIC_POINTS.CENTER:
			return BASIC_POINTS.CENTER;
		default:
			return BASIC_POINTS.NONE;
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
	constructor(value) {
		this.value(value);
	}

	/**
	 * Determine if something is a valid dock point
	 *
	 * @memberof DockPoint
	 *
	 * @arg {*} value
	 *
	 * @returns {boolean}
	 */
	static isValid(value) {
		if (value instanceof DockPoint) {
			return true;
		}

		return DockPoint.POINTS.has(value);
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
		if (HORIZONTAL_POINTS.includes(this.primary())) {
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
		if (VERTICAL_POINTS.includes(this.primary())) {
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
		return this.value() === (dockPoint instanceof DockPoint ? dockPoint.value() : dockPoint);
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

/**
 * @const BASIC_POINTS
 * @static
 * @memberof DockPoint
 * @type {Enum}
 */
DockPoint.BASIC_POINTS = BASIC_POINTS;
/**
 * @const POINTS
 * @static
 * @memberof DockPoint
 * @type {Enum}
 */
DockPoint.POINTS = POINTS;

Object.assign(DockPoint.prototype, {
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
		init: BASIC_POINTS.NONE,
		enum: BASIC_POINTS
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
		init: BASIC_POINTS.NONE,
		enum: BASIC_POINTS
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
				.secondary(value[1] || BASIC_POINTS.NONE);
		},
		get: function() {
			let value = this.primary();
			if (this.secondary() !== BASIC_POINTS.NONE) {
				value += SEPARATOR + this.secondary();
			}
			return value;
		}
	})
});
