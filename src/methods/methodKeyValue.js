import { forOwn } from 'object-agent';
import isObject from '../checks/isObject.js';
import methodAny, { _ } from './methodAny.js';

/**
 * Builds a chainable method that accepts either a key and a value or an object with multiple key/value pairs.
 *
 * @function method.keyValue
 * @alias methodKeyValue
 *
 * @param {object}   [options] - Options object.
 * @param {Function} [options.set] - Called for each key/value pair applied. Provides two args, the key and value, and sets the context to the methods constructor.
 * @param {Function} [options.get] - Called if the method is called with a single, non-object, arg. Provides the same arg, sets the context to the methods constructor.
 *
 * @returns {Function} Accepts a new value and returns the methods constructor (allows chaining), or if no args are passed returns the output of options.get.
 */
export default (options = {}) => {
	const key = Symbol();

	return function(...args) {
		const self = this;
		const _self = _(self) || _.set(self);

		if (self && !_self[key] && !self.isRemoved) {
			_self[key] = {
				get: methodAny.bindCallback(options.get, self),
				set: methodAny.bindCallback(options.set, self)
			};
		}

		if (self && _self[key]) {
			const isAnObject = isObject(args[0]);

			if ((args.length > 1 || isAnObject) && _self[key].set !== false) {
				if (isAnObject) {
					forOwn(args[0], (value, innerKey) => {
						_self[key].set(innerKey, value);
					});
				}
				else {
					_self[key].set(...args);
				}

				return self;
			}

			if (_self[key].get !== false) {
				return _self[key].get(...args);
			}
		}
	};
};
