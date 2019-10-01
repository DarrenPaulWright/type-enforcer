import { forOwn } from 'object-agent';
import isFunction from '../checks/types/isFunction';
import PrivateVars from '../utility/PrivateVars';

const _ = new PrivateVars();

/**
 * A simple queue for callbacks that allows for adding, removing, and triggering all or specific callbacks
 *
 * ``` javascript
 * import { Queue } from 'type-enforcer';
 * ```
 *
 * @class Queue
 */
export default class Queue {
	constructor() {
		_.set(this, {
			currentId: 0,
			isBusy: false
		});
		this.discardAll();
	}

	/**
	 * Add a callback to the queue.
	 *
	 * @memberof Queue
	 * @instance
	 *
	 * @arg {Function} callback - Callback function.
	 * @arg {Object}   data - Any arbitrary data. Returned when the callback is discarded.
	 *
	 * @returns {Number} A unique ID for this callback.
	 */
	add(callback, data) {
		const _self = _(this);

		if (isFunction(callback)) {
			const newID = (++_(this).currentId + '');
			_self.callbacks[newID] = {
				function: callback,
				data
			};
			_self.total++;
			return newID;
		}
	}

	/**
	 * Remove a specific callback from the queue.
	 *
	 * @memberof Queue
	 * @instance
	 *
	 * @arg {Number} ID - The ID returned by Queue.add().
	 *
	 * @returns {Object} The data object added with this callback
	 */
	discard(ID) {
		const _self = _(this);
		let data;

		if (ID && _self.callbacks[ID]) {
			data = _self.callbacks[ID].data;
			delete _self.callbacks[ID];
			_self.total--;
		}

		return data;
	}

	/**
	 * Remove ALL callbacks from the queue.
	 *
	 * @memberof Queue
	 * @instance
	 */
	discardAll() {
		const _self = _(this);

		_self.callbacks = {};
		_self.total = 0;
	}

	/**
	 * Triggers one or all callbacks.
	 *
	 * @memberof Queue
	 * @instance
	 *
	 * @arg {Number} [ID] - To trigger only a specific callback, provide the ID returned by Queue.add().
	 *    Otherwise all callbacks are called.
	 * @arg {Array} [extraArguments] - Array of arguments to apply to each callback.
	 * @arg {Array} [context]
	 *
	 * @returns {this}
	 */
	trigger(ID, extraArguments, context) {
		const _self = _(this);

		_self.isBusy = true;
		if (ID) {
			if (_self.callbacks[ID]) {
				_self.callbacks[ID].function.apply(context, extraArguments);
			}
		}
		else {
			forOwn(_self.callbacks, (callback) => {
				callback.function.apply(context, extraArguments);
			});
		}
		_self.isBusy = false;

		return this;
	}

	/**
	 * Triggers the first callback and removes it from the queue.
	 *
	 * @memberof Queue
	 * @instance
	 *
	 * @arg {Array} [extraArguments] - Array of arguments to apply to each callback.
	 * @arg {Array} [context] - "this" applied to the callback
	 *
	 * @returns {this}
	 */
	triggerFirst(extraArguments, context) {
		const self = this;
		const _self = _(self);

		_self.isBusy = true;
		forOwn(_self.callbacks, (callback, ID) => {
			callback.function.apply(context, extraArguments);
			self.discard(ID);
			return true;
		});
		_self.isBusy = false;

		return this;
	}

	/**
	 * The total number of current callbacks in this queue.
	 *
	 * @memberof Queue
	 * @instance
	 *
	 * @returns {number}
	 */
	get length() {
		return _(this).total;
	}

	/**
	 * See if this queue is currently executing callbacks.
	 *
	 * @memberof Queue
	 * @instance
	 *
	 * @returns {boolean}
	 */
	get isBusy() {
		return _(this).isBusy;
	}
}
