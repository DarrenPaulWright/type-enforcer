import { assign, each, join } from 'lodash';
import isString from '../checks/isString';
import methodElement from '../methods/types/methodElement';
import CssSize from './CssSize';

const SEPARATOR = /[, ]+/;
const SPACE = ' ';
const splitArgs = (args) => (typeof args[0] === 'string' && SEPARATOR.test(args[0])) ? args[0].trim()
	.split(SEPARATOR) : args;

const TOP = Symbol();
const RIGHT = Symbol();
const BOTTOM = Symbol();
const LEFT = Symbol();

/**
 * Replicates the functionality of css border-width, margin, and padding, or anything that requires top, right, bottom, and left css sizes.
 *
 * ## Usage
 * ``` javascript
 * import { Thickness } from 'type-enforcer';
 * ```
 *
 * The sizes can be provided as individual parameters, an array, or a space separated string in the following arrangements:
 * - If one size is provided it gets applied to all sides
 * - If two sizes are provided the first gets applied to top and bottom, the second size gets applied right and left
 * - If three sizes are provided the first gets applied to top, the second to right and left, and the third to bottom
 * - If four sizes are provided then they get applied to top, right, bottom, and left respectively
 *
 * Examples:
 * ``` javascript
 * const thickness1 = new Thickness();
 * console.log(thickness1.toString());
 * // => '0 0 0 0'
 *
 * const thickness2 = new Thickness(1, 2, 3, 4);
 * console.log(thickness2.toString());
 * // => '1px 2px 3px 4px'
 *
 * const thickness3 = new Thickness([5, 6, 7]);
 * console.log(thickness3.toString());
 * // => '5px 6px 7px 6px'
 *
 * const thickness4 = new Thickness('20px 30px');
 * console.log(thickness4.toString());
 * // => '20px 30px'
 *
 * const thickness5 = new Thickness('20px');
 * thickness5.bottom = 5;
 * console.log(thickness5.toString());
 * // => '20px 20px 5px'
 * ```
 *
 * @class Thickness
 *
 * @arg {String|Number|Array} [top]
 * @arg {String|Number} [right]
 * @arg {String|Number} [bottom]
 * @arg {String|Number} [left]
 */
export default class Thickness {
	constructor(...args) {
		this[TOP] = new CssSize();
		this[RIGHT] = new CssSize();
		this[BOTTOM] = new CssSize();
		this[LEFT] = new CssSize();

		this.set.apply(this, args);
	}

	/**
	 * Set the sizes of all sides
	 *
	 * @memberof Thickness
	 * @instance
	 *
	 * @arg {String|Number|Array} [top]
	 * @arg {String|Number} [right]
	 * @arg {String|Number} [bottom]
	 * @arg {String|Number} [left]
	 *
	 * @returns {boolean}
	 */
	set() {
		const self = this;
		const args = splitArgs(arguments);

		const setValues = (top, right, bottom, left) => {
			self.top = top;
			self.right = right;
			self.bottom = bottom;
			self.left = left;
		};

		if (args.length && Thickness.isValid.apply(this, args)) {
			if (args[0] instanceof Thickness) {
				setValues(args[0].top, args[0].right, args[0].bottom, args[0].left);
			}
			else {
				switch (args.length) {
					case 1:
						setValues(args[0], args[0], args[0], args[0]);
						break;
					case 2:
						setValues(args[0], args[1], args[0], args[1]);
						break;
					case 3:
						setValues(args[0], args[1], args[2], args[1]);
						break;
					case 4:
						setValues(args[0], args[1], args[2], args[3]);
						break;
				}
			}
		}
	}

	/**
	 * Determine if something is a valid Thickness
	 *
	 * @memberof Thickness
	 *
	 * @arg {*} value
	 *
	 * @returns {boolean}
	 */
	static isValid() {
		const args = splitArgs(arguments);

		if (args.length) {
			if (args[0] instanceof Thickness) {
				return true;
			}
			else {
				let isValid = true;

				each(args, (arg) => {
					if (!CssSize.isValid(arg)) {
						isValid = false;
						return false;
					}
				});

				return isValid;
			}
		}

		return false;
	}

	/**
	 * The top size
	 *
	 * @memberof Thickness
	 * @instance
	 *
	 * @type {CssSize}
	 */
	get top() {
		return this[TOP].toPixels(true);
	}

	set top(size) {
		this[TOP].set(size);
	}

	/**
	 * The right size
	 *
	 * @memberof Thickness
	 * @instance
	 *
	 * @type {CssSize}
	 */
	get right() {
		return this[RIGHT].toPixels(true);
	}

	set right(size) {
		this[RIGHT].set(size);
	}

	/**
	 * The bottom size
	 *
	 * @memberof Thickness
	 * @instance
	 *
	 * @type {CssSize}
	 */
	get bottom() {
		return this[BOTTOM].toPixels(true);
	}

	set bottom(size) {
		this[BOTTOM].set(size);
	}

	/**
	 * The left size
	 *
	 * @memberof Thickness
	 * @instance
	 *
	 * @type {CssSize}
	 */
	get left() {
		return this[LEFT].toPixels(true);
	}

	set left(size) {
		this[LEFT].set(size);
	}

	/**
	 * Get the sum of the right and left
	 *
	 * @memberof Thickness
	 * @instance
	 * @readonly
	 *
	 * @type {Number}
	 */
	get horizontal() {
		return this.left + this.right;
	}

	/**
	 * Get the sum of the top and bottom
	 *
	 * @memberof Thickness
	 * @instance
	 * @readonly
	 *
	 * @type {Number}
	 */
	get vertical() {
		return this.top + this.bottom;
	}

	/**
	 * Determine if another thickness is the same as this one
	 *
	 * @memberof Thickness
	 * @instance
	 *
	 * @arg {Thickness} thickness
	 *
	 * @returns {Boolean}
	 */
	isSame(thickness) {
		if (!Thickness.isValid(thickness)) {
			return false;
		}
		return this.toString() === (isString(thickness) ? thickness : thickness.toString());
	}

	/**
	 * Get this thickness as a space separated string
	 *
	 * @memberof Thickness
	 * @instance
	 *
	 * @returns {String}
	 */
	toString() {
		const topBottomSame = this[TOP].isSame(this[BOTTOM]);
		const leftRightSame = this[RIGHT].isSame(this[LEFT]);
		const topRightSame = this[RIGHT].isSame(this[TOP]);

		if (topBottomSame && leftRightSame && topRightSame) {
			return this[TOP].toPixels();
		}
		else if (topBottomSame && leftRightSame) {
			return join([this[TOP].toPixels(), this[RIGHT].toPixels()], SPACE);
		}
		else if (leftRightSame) {
			return join([this[TOP].toPixels(), this[RIGHT].toPixels(), this[BOTTOM].toPixels()], SPACE);
		}

		return join([this[TOP].toPixels(),
			this[RIGHT].toPixels(),
			this[BOTTOM].toPixels(),
			this[LEFT].toPixels()], SPACE);
	}

}

assign(Thickness.prototype, {
	/**
	 * Set the element to measure font based units against
	 *
	 * @method
	 * @memberof Thickness
	 * @instance
	 *
	 * @arg {Element} [element] - A DOM element
	 *
	 * @returns {this|Element}
	 */
	element: methodElement({
		set: function(element) {
			this[TOP].element(element);
			this[RIGHT].element(element);
			this[BOTTOM].element(element);
			this[LEFT].element(element);
		}
	})
});
