import { forOwn } from 'object-agent';
import isFunction from '../checks/types/isFunction';

const CALLBACKS = Symbol();
const CURRENT_ID = Symbol();
const TOTAL = Symbol();
const IS_BUSY = Symbol();

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
		this[CURRENT_ID] = 0;
		this[IS_BUSY] = false;
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
		if (isFunction(callback)) {
			const newID = (++this[CURRENT_ID] + '');
			this[CALLBACKS][newID] = {
				function: callback,
				data
			};
			this[TOTAL]++;
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
		let data;

		if (ID && this[CALLBACKS][ID]) {
			data = this[CALLBACKS][ID].data;
			delete this[CALLBACKS][ID];
			this[TOTAL]--;
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
		this[CALLBACKS] = {};
		this[TOTAL] = 0;
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
		this[IS_BUSY] = true;
		if (ID) {
			if (this[CALLBACKS][ID]) {
				this[CALLBACKS][ID].function.apply(context, extraArguments);
			}
		}
		else {
			forOwn(this[CALLBACKS], (callback) => {
				callback.function.apply(context, extraArguments);
			});
		}
		this[IS_BUSY] = false;

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

		this[IS_BUSY] = true;
		forOwn(this[CALLBACKS], (callback, ID) => {
			callback.function.apply(context, extraArguments);
			self.discard(ID);
			return true;
		});
		this[IS_BUSY] = false;

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
		return this[TOTAL];
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
		return this[IS_BUSY];
	}
}
