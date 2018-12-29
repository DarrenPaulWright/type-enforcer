import CallbackQueue from '../../CallbackQueue';

/**
 * Builds a method that implements a CallbackQueue
 *
 * @function method.callbackQueue
 *
 * @arg {Object}   [options]
 * @arg {Function} [options.set] - Called after a new callback is added to the queue. Provides a reference to the callbackQueue, sets the context to the methods constructor.
 *
 * @returns {Function} accepts a new value and returns the methods constructor (allows chaining), or if no args are passed returns the instance of CallbackQueue
 */
export default (options = {}) => {
	const key = Symbol();

	return function(newValue) {
		if (this && !this[key] && !this.isRemoved()) {
			this[key] = new CallbackQueue();

			this.onRemove(() => {
				this[key].discardAll();
			});
		}

		if (arguments.length) {
			if (typeof newValue === 'function') {
				this[key].add(newValue);

				if (options.set) {
					options.set.call(this, this[key]);
				}
			}

			return this;
		}

		return this ? this[key] : undefined;
	};
};
