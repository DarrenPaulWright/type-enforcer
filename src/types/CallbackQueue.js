import { forOwn, isFunction } from 'lodash';

const CALLBACKS = Symbol();
const CURRENT_ID = Symbol();
const TOTAL = Symbol();
const IS_BUSY = Symbol();

/**
 * A simple queue for callbacks that allows for adding, removing, and triggering all or specific callbacks
 *
 * @module CallbacksQueue
 * @constructor
 */
export default class CallbackQueue {
	constructor() {
		this[CALLBACKS] = {};
		this[CURRENT_ID] = 0;
		this[TOTAL] = 0;
		this[IS_BUSY] = false;
	}

	/**
	 * Add a callback to be called whenever the window is resized or
	 *      CallbackQueue.trigger() is called.
	 *
	 * @method add
	 * @member module:CallbacksQueue
	 * @instance
	 *
	 * @param {Function} callback - Callback function.
	 * @param {Object}   data
	 *
	 * @returns {Number}          - An unique ID for this callback.
	 */
	add(callback, data) {
		if (isFunction(callback)) {
			const newID = (++this[CURRENT_ID] + '');
			this[CALLBACKS][newID] = {
				func: callback,
				data: data
			};
			this[TOTAL]++;
			return newID;
		}
	}

	/**
	 * Remove a specific callback from the stack.
	 *
	 * @method discard
	 * @member module:CallbacksQueue
	 * @instance
	 *
	 * @param {Number} ID - The ID returned by CallbacksQueue.add().
	 *
	 * @returns {object} - the data object added with this callback
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
	 * Remove ALL callbacks from the stack.
	 *
	 * @method discardAll
	 * @member module:CallbacksQueue
	 * @instance
	 */
	discardAll() {
		this[CALLBACKS] = {};
		this[TOTAL] = 0;
	}

	/**
	 * Triggers one or all callbacks.
	 *
	 * @method trigger
	 * @member module:CallbacksQueue
	 * @instance
	 *
	 * @param {Number} [ID] - To trigger only a specific callback, provide the ID returned by CallbacksQueue.add().
	 *    Otherwise all callbacks are called.
	 * @param {Array} [extraArguments] - Array of arguments to apply to each callback.
	 * @param {Array} [context]
	 *
	 * @returns {this}
	 */
	trigger(ID, extraArguments, context) {
		this[IS_BUSY] = true;
		if (ID) {
			if (this[CALLBACKS][ID]) {
				this[CALLBACKS][ID].func.apply(context, extraArguments);
			}
		}
		else {
			forOwn(this[CALLBACKS], (callback) => {
				if (callback) {
					callback.func.apply(context, extraArguments);
				}
			});
		}
		this[IS_BUSY] = false;

		return this;
	}

	/**
	 * Triggers the first callback and removes it from the queue.
	 *
	 * @method triggerFirst
	 * @member module:CallbacksQueue
	 * @instance
	 *
	 * @param {Array} [extraArguments] - Array of arguments to apply to each callback.
	 * @param {Array} [context] - "this" applied to the callback
	 *
	 * @returns {this}
	 */
	triggerFirst(extraArguments, context) {
		const self = this;

		this[IS_BUSY] = true;
		forOwn(this[CALLBACKS], (callback, ID) => {
			callback.func.apply(context, extraArguments);
			self.discard(ID);
			return false;
		});
		this[IS_BUSY] = false;

		return this;
	}

	/**
	 * The total number of current callbacks.
	 *
	 * @method getTotalCallbacks
	 * @member module:CallbacksQueue
	 * @instance
	 *
	 * @returns {number}
	 */
	getTotalCallbacks() {
		return this[TOTAL];
	}

	/**
	 * Gets the callback object
	 *
	 * @method getCallbacks
	 * @member module:CallbacksQueue
	 * @instance
	 *
	 * @returns {object}
	 */
	getCallbacks() {
		return this[CALLBACKS];
	}

	/**
	 * See if this queue is currently executing callbacks.
	 *
	 * @method isBusy
	 * @member module:CallbacksQueue
	 * @instance
	 *
	 * @returns {boolean}
	 */
	isBusy() {
		return this[IS_BUSY];
	}
}
