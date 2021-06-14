import methodQueue from './methods/methodQueue.js';
// eslint-disable-next-line unicorn/prevent-abbreviations
import PrivateVars from './utility/PrivateVars.js';

const _ = new PrivateVars();

/* eslint-disable jsdoc/no-undefined-types */
/**
 * ``` javascript
 * import { Removable } from 'type-enforcer';
 *
 * class MyClass extends Removable {}
 * ```
 *
 * @class Removable
 * @classdesc A mixin that adds methods to a class to facilitate clean-up
 */
export default class Removable {
	/**
	 * Calls all the onRemove callbacks and sets isRemoved to true.
	 *
	 * @method remove
	 * @instance
	 */
	remove() {
		const self = this;

		if (self && !self.isRemoved) {
			_.set(self, true);

			const onRemove = self.onRemove();

			if (onRemove) {
				onRemove.trigger().discardAll();
			}
		}
	}

	/**
	 * If the returned value is true then remove has been called.
	 *
	 * @memberOf Removable
	 * @instance
	 *
	 * @returns {boolean}
	 */
	get isRemoved() {
		return Boolean(_(this));
	}
}

Object.assign(Removable.prototype, {
	/**
	 * Adds a callback to a [Queue](docs/Queue.md) that gets triggered when the "remove" method is called
	 *
	 * @method onRemove
	 * @instance
	 *
	 * @param {Function} callback
	 *
	 * @returns {Queue}
	 */
	onRemove: methodQueue()
});
