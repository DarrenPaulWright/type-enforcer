import { methodQueue } from '../';
import privateProp from '../utility/privateProp';

const IS_REMOVED = Symbol();

/**
 * A mixin that adds methods to a class to facilitate clean-up
 *
 * ``` javascript
 * import { Removable } from 'type-enforcer';
 *
 * class MyClass extends Removable {}
 * ```
 *
 * @class Removable
 */
export default class Removable {
	/**
	 * Calls all the onRemove callbacks and sets isRemoved to true
	 *
	 * @method remove
	 * @instance
	 */
	remove() {
		if (this && !this[IS_REMOVED]) {
			privateProp(this, IS_REMOVED, true);

			if (this.onRemove()) {
				this.onRemove()
					.trigger(null, null, this)
					.discardAll();
			}
		}
	}

	/**
	 * If the returned value is true then remove has been called.
	 *
	 * @memberOf Removable
	 * @instance
	 *
	 * @returns {Boolean}
	 */
	get isRemoved() {
		return !!this[IS_REMOVED];
	}
}

Object.assign(Removable.prototype, {
	/**
	 * Adds a callback to a [Queue](docs/Queue.md) that gets triggered when the "remove" method is called
	 *
	 * @method onRemove
	 * @instance
	 *
	 * @arg {Function} callback
	 *
	 * @returns {Queue}
	 */
	onRemove: methodQueue()
});
