import isString from '../checks/types/isString';
import methodElement from '../methods/types/methodElement';
import PrivateVars from '../utility/PrivateVars';
import CssSize from './CssSize';

const SEPARATOR = /[, ]+/;
const SPACE = ' ';
const splitArgs = (args) => (typeof args[0] === 'string' && SEPARATOR.test(args[0])) ? args[0].trim()
	.split(SEPARATOR) : args;

const _ = new PrivateVars();

/**
 * Replicates the functionality of css border-width, margin, and padding, or anything that requires top, right, bottom, and left css sizes.
 *
 * @example
 * ``` javascript
 * import { Thickness } from 'type-enforcer';
 *
 * const thickness1 = new Thickness();
 * console.log(thickness1.toString());
 * // => '0'
 *
 * const thickness2 = new Thickness(1, 2, 3, 4);
 * console.log(thickness2.toString());
 * // => '1px 2px 3px 4px'
 *
 * const thickness3 = new Thickness([5, 6, 7]);
 * console.log(thickness3.toString());
 * // => '5px 6px 7px'
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
 * @arg {String|Number|Array} [top] - If only one size is provided it gets applied to all sides. See examples for different arrangements of args.
 * @arg {String|Number} [right] - If two sizes are provided the first gets applied to top and bottom, the second size gets applied right and left
 * @arg {String|Number} [bottom] - If three sizes are provided the first gets applied to top, the second to right and left, and the third to bottom
 * @arg {String|Number} [left] - If four sizes are provided then they get applied to top, right, bottom, and left respectively
 */
export default class Thickness {
	constructor(...args) {
		_.set(this, {
			top: new CssSize(),
			right: new CssSize(),
			bottom: new CssSize(),
			left: new CssSize()
		});

		this.set.apply(this, args);
	}

	/**
	 * Set the sizes of all sides
	 *
	 * @memberOf Thickness
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
	 * @memberOf Thickness
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

				Array.from(args).forEach((arg) => {
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
	 * @memberOf Thickness
	 * @instance
	 *
	 * @type {CssSize}
	 */
	get top() {
		return _(this).top.toPixels(true);
	}

	set top(size) {
		_(this).top.set(size);
	}

	/**
	 * The right size
	 *
	 * @memberOf Thickness
	 * @instance
	 *
	 * @type {CssSize}
	 */
	get right() {
		return _(this).right.toPixels(true);
	}

	set right(size) {
		_(this).right.set(size);
	}

	/**
	 * The bottom size
	 *
	 * @memberOf Thickness
	 * @instance
	 *
	 * @type {CssSize}
	 */
	get bottom() {
		return _(this).bottom.toPixels(true);
	}

	set bottom(size) {
		_(this).bottom.set(size);
	}

	/**
	 * The left size
	 *
	 * @memberOf Thickness
	 * @instance
	 *
	 * @type {CssSize}
	 */
	get left() {
		return _(this).left.toPixels(true);
	}

	set left(size) {
		_(this).left.set(size);
	}

	/**
	 * Get the sum of the right and left
	 *
	 * @memberOf Thickness
	 * @instance
	 * @readonly
	 *
	 * @type {Number}
	 */
	get horizontal() {
		const _self = _(this);
		return _self.left.toPixels(true) + _self.right.toPixels(true);
	}

	/**
	 * Get the sum of the top and bottom
	 *
	 * @memberOf Thickness
	 * @instance
	 * @readonly
	 *
	 * @type {Number}
	 */
	get vertical() {
		const _self = _(this);
		return _self.top.toPixels(true) + _self.bottom.toPixels(true);
	}

	/**
	 * Determine if another thickness is the same as this one
	 *
	 * @memberOf Thickness
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
	 * @memberOf Thickness
	 * @instance
	 *
	 * @returns {String}
	 */
	toString() {
		const _self = _(this);
		const topBottomSame = _self.top.isSame(_self.bottom);
		const leftRightSame = _self.right.isSame(_self.left);
		const topRightSame = _self.right.isSame(_self.top);

		if (topBottomSame && leftRightSame && topRightSame) {
			return _self.top.toPixels();
		}
		else if (topBottomSame && leftRightSame) {
			return [_self.top.toPixels(), _self.right.toPixels()].join(SPACE);
		}
		else if (leftRightSame) {
			return [_self.top.toPixels(), _self.right.toPixels(), _self.bottom.toPixels()].join(SPACE);
		}

		return [_self.top.toPixels(),
			_self.right.toPixels(),
			_self.bottom.toPixels(),
			_self.left.toPixels()].join(SPACE);
	}

}

Object.assign(Thickness.prototype, {
	/**
	 * Set the element to measure font based units against
	 *
	 * @method
	 * @memberOf Thickness
	 * @instance
	 *
	 * @arg {Element} [element] - A DOM element
	 *
	 * @returns {this|Element}
	 */
	element: methodElement({
		set(element) {
			const _self = _(this);
			_self.top.element(element);
			_self.right.element(element);
			_self.bottom.element(element);
			_self.left.element(element);
		}
	})
});
