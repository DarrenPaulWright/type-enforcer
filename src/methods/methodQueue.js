import isFunction from '../checks/isFunction.js';
import Queue from '../Queue.js';
import methodAny, { _ } from './methodAny.js';

/**
 * Builds a chainable method that implements a [Queue](docs/Queue.md).
 *
 * @function method.queue
 * @alias methodQueue
 *
 * @param {object}   [options] - Options object.
 * @param {Function} [options.set] - Called after a new callback is added to the queue. Provides a reference to the queue, the new id for the callback, the callback, and sets the context to the methods constructor.
 *
 * @returns {Function} Accepts a new value and returns the methods constructor (allows chaining), or if no args are passed returns the instance of Queue.
 */
export default (options = {}) => {
	const key = Symbol();

	return function(callback) {
		const self = this;
		const _self = _(self) || _.set(self);

		if (self && !_self[key] && !self.isRemoved) {
			_self[key] = {
				queue: new Queue(),
				set: methodAny.bindCallback(options.set, self)
			};

			if (options.bind !== false) {
				_self[key].queue.bindTo(self);
			}

			if (self.onRemove) {
				self.onRemove(() => {
					_self[key].queue.discardAll();
				});
			}
		}

		if (arguments.length !== 0) {
			if (isFunction(callback) && !self.isRemoved) {
				const id = _self[key].queue.add(callback);

				if (_self[key].set) {
					_self[key].set(_self[key].queue, id, callback);
				}
			}

			return self;
		}

		return _self[key] ? _self[key].queue : undefined;
	};
};
