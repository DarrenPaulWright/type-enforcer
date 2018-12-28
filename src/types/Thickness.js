import { assign, each, join } from 'lodash';
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
const ELEMENT = Symbol();

export default class Thickness {
	constructor(...args) {
		this[TOP] = new CssSize();
		this[RIGHT] = new CssSize();
		this[BOTTOM] = new CssSize();
		this[LEFT] = new CssSize();

		this.set.apply(this, args);
	}

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
			if (Thickness.isInstance(args[0])) {
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

	static isValid() {
		const args = splitArgs(arguments);

		if (args.length) {
			if (Thickness.isInstance(args[0])) {
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

	static isInstance(is) {
		return is instanceof Thickness;
	}

	get top() {
		return this[TOP].toPixels(true);
	}

	set top(size) {
		this[TOP].set(size);
	}

	get right() {
		return this[RIGHT].toPixels(true);
	}

	set right(size) {
		this[RIGHT].set(size);
	}

	get bottom() {
		return this[BOTTOM].toPixels(true);
	}

	set bottom(size) {
		this[BOTTOM].set(size);
	}

	get left() {
		return this[LEFT].toPixels(true);
	}

	set left(size) {
		this[LEFT].set(size);
	}

	isSame(thickness) {
		return this.toString() === (thickness ? thickness.toString() : null);
	}

	get horizontal() {
		return this.left + this.right;
	}

	get vertical() {
		return this.top + this.bottom;
	}

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
	element: methodElement({
		set: function(element) {
			this[TOP].element(element);
			this[RIGHT].element(element);
			this[BOTTOM].element(element);
			this[LEFT].element(element);
		}
	})
});
