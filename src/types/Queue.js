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
	 * @returns {Number} A unique id for this callback.
	 */
	add(callback, data) {
		const _self = _(this);

		if (isFunction(callback)) {
			const newId = (++_(this).currentId + '');
			_self.callbacks[newId] = {
				function: callback,
				data
			};
			_self.total++;
			return newId;
		}
	}

	/**
	 * Remove a specific callback from the queue.
	 *
	 * @memberof Queue
	 * @instance
	 *
	 * @arg {Number} id - The id returned by Queue.add().
	 *
	 * @returns {Object} The data object added with this callback
	 */
	discard(id) {
		const _self = _(this);
		let data;

		if (id && _self.callbacks[id]) {
			data = _self.callbacks[id].data;
			delete _self.callbacks[id];
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
	 * @arg {Number} [id] - To trigger only a specific callback, provide the id returned by Queue.add().
	 *    Otherwise all callbacks are called.
	 * @arg {Array} [extraArguments] - Array of arguments to apply to each callback.
	 * @arg {Array} [context]
	 *
	 * @returns {this}
	 */
	trigger(id, extraArguments, context) {
		const _self = _(this);

		_self.isBusy = true;
		if (id) {
			if (_self.callbacks[id]) {
				_self.callbacks[id].function.apply(context, extraArguments);
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
		forOwn(_self.callbacks, (callback, id) => {
			callback.function.apply(context, extraArguments);
			self.discard(id);
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
