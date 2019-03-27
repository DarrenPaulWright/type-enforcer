import isFunction from '../../checks/types/isFunction';
import Queue from '../../types/Queue';

/**
 * Builds a chainable method that implements a [Queue](docs/Queue.md)
 *
 * @function method.queue
 * @alias methodQueue
 *
 * @arg {Object}   [options]
 * @arg {Function} [options.set] - Called after a new callback is added to the queue. Provides a reference to the queue, the new ID for the callback, the callback, and sets the context to the methods constructor.
 *
 * @returns {Function} accepts a new value and returns the methods constructor (allows chaining), or if no args are passed returns the instance of Queue
 */
export default (options = {}) => {
	const key = Symbol();

	return function(callback) {
		if (this && !this[key] && !this.isRemoved) {
			this[key] = new Queue();

			if (this.onRemove) {
				this.onRemove(() => {
					this[key].discardAll();
				});
			}
		}

		if (arguments.length) {
			if (isFunction(callback)) {
				const ID = this[key].add(callback);

				if (options.set) {
					options.set.call(this, this[key], ID, callback);
				}
			}

			return this;
		}

		return this[key];
	};
};
