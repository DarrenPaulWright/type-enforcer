import isFunction from '../../checks/types/isFunction';
import Queue from '../../types/Queue';
import privateProp from '../../utility/privateProp';

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
		const self = this;

		if (self && !self[key] && !self.isRemoved) {
			privateProp(self, key, new Queue());

			if (self.onRemove) {
				self.onRemove(() => {
					self[key].discardAll();
				});
			}
		}

		if (arguments.length) {
			if (isFunction(callback) && !self.isRemoved) {
				const ID = self[key].add(callback);

				if (options.set) {
					options.set.call(self, self[key], ID, callback);
				}
			}

			return self;
		}

		return self[key];
	};
};
