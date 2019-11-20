import { forOwn } from 'object-agent';
import castArray from './utility/castArray';
import PrivateVars from './utility/PrivateVars';

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
	 * Binds all current and future callbacks to a specified context.
	 *
	 * @memberOf Queue
	 * @instance
	 *
	 * @arg {object} context - Callback function.
	 *
	 * @returns {object|this} If setting a value then this is returned, otherwise the current context.
	 */
	bindTo(context) {
		const _self = _(this);

		if (context) {
			_self.bindTo = context;

			forOwn(_self.callbacks, (callback, id) => {
				_self.callbacks[id] = callback.bind(context);
			});

			return this;
		}

		return _self.bindTo;
	}

	/**
	 * Add a callback to the queue.
	 *
	 * @memberOf Queue
	 * @instance
	 *
	 * @arg {Function} callback - Callback function.
	 *
	 * @returns {Number} A unique id for this callback.
	 */
	add(callback) {
		if (callback !== undefined) {
			const _self = _(this);
			const id = ++_self.currentId + '';

			_self.callbacks[id] = _self.bindTo ? callback.bind(_self.bindTo) : callback;
			_self.total++;

			return id;
		}
	}

	/**
	 * Remove a specific callback from the queue.
	 *
	 * @memberOf Queue
	 * @instance
	 *
	 * @arg {Number} id - The id returned by Queue.add().
	 *
	 * @returns {this}
	 */
	discard(id) {
		const _self = _(this);

		if (id && _self.callbacks[id] !== undefined) {
			delete _self.callbacks[id];
			_self.total--;
		}

		return this;
	}

	/**
	 * Remove ALL callbacks from the queue.
	 *
	 * @memberOf Queue
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
	 * @memberOf Queue
	 * @instance
	 *
	 * @arg {Number} [id] - To trigger only a specific callback, provide the id returned by Queue.add().
	 *    Otherwise all callbacks are called.
	 * @arg {Array} [extraArguments] - Array of arguments to apply to each callback.
	 * @arg {Array} [context] - Ignored if bindTo is set
	 *
	 * @returns {this}
	 */
	trigger(id, extraArguments, context) {
		const _self = _(this);
		const apply = (_self.bindTo || arguments.length < 3) ? (callback) => {
			callback(...extraArguments);
		} : (callback) => {
			callback.apply(context, extraArguments);
		};

		extraArguments = castArray(extraArguments);

		_self.isBusy = true;

		id ? _self.callbacks[id] !== undefined && apply(_self.callbacks[id]) : forOwn(_self.callbacks, apply);

		_self.isBusy = false;

		return this;
	}

	/**
	 * Triggers the first callback and removes it from the queue.
	 *
	 * @memberOf Queue
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
			self.trigger(id, extraArguments, context)
				.discard(id);
			return true;
		});
		
		_self.isBusy = false;

		return this;
	}

	/**
	 * The total number of current callbacks in this queue.
	 *
	 * @memberOf Queue
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
	 * @memberOf Queue
	 * @instance
	 *
	 * @returns {boolean}
	 */
	get isBusy() {
		return _(this).isBusy;
	}
}
