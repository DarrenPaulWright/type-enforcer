import isFunction from '../../checks/types/isFunction';
import Queue from '../../types/Queue';
import { _ } from './methodAny';

/**
 * Builds a chainable method that implements a [Queue](docs/Queue.md)
 *
 * @function method.queue
 * @alias methodQueue
 *
 * @arg {Object}   [options]
 * @arg {Function} [options.set] - Called after a new callback is added to the queue. Provides a reference to the queue, the new id for the callback, the callback, and sets the context to the methods constructor.
 *
 * @returns {Function} accepts a new value and returns the methods constructor (allows chaining), or if no args are passed returns the instance of Queue
 */
export default (options = {}) => {
	const key = Symbol();

	return function(callback) {
		const self = this;
		const _self = _(self) || _.set(self);

		if (self && !_self[key] && !self.isRemoved) {
			_self[key] = new Queue();

			if (options.bind !== false) {
				_self[key].bindTo(self);
			}

			if (self.onRemove) {
				self.onRemove(() => {
					_self[key].discardAll();
				});
			}
		}

		if (arguments.length) {
			if (isFunction(callback) && !self.isRemoved) {
				const id = _self[key].add(callback);

				if (options.set) {
					options.set.call(self, _self[key], id, callback);
				}
			}

			return self;
		}

		return _self[key];
	};
};
