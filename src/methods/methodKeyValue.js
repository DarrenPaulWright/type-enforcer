import { forOwn } from 'object-agent';
import isObject from '../checks/isObject';
import { _ } from './methodAny';

/**
 * Builds a chainable method that accepts either a key and a value or an object with multiple key/value pairs.
 *
 * @function method.keyValue
 * @alias methodKeyValue
 *
 * @arg {Object}   [options]
 * @arg {Function} [options.set] - Called for each key/value pair applied. Provides two args, the key and value, and sets the context to the methods constructor.
 * @arg {Function} [options.get] - Called if the method is called with a single, non-object, arg. Provides the same arg, sets the context to the methods constructor.
 *
 * @returns {Function} Accepts a new value and returns the methods constructor (allows chaining), or if no args are passed returns the output of options.get
 */
export default (options = {}) => {
	const key = Symbol();

	return function(...args) {
		const self = this;
		const _self = _(self) || _.set(self);
		const isAnObject = isObject(args[0]);

		if (self && !_self[key] && !self.isRemoved) {
			_self[key] = {
				get: options.get ? options.get.bind(self) : undefined,
				set: options.set ? options.set.bind(self) : undefined
			};
		}

		if (self && _self[key]) {
			if (_self[key].set && (args.length === 2 || isAnObject)) {
				if (isAnObject) {
					forOwn(args[0], (value, innerKey) => {
						_self[key].set(innerKey, value);
					});
				}
				else {
					_self[key].set(...args);
				}

				return this;
			}

			if (_self[key].get !== undefined) {
				return _self[key].get(...args);
			}
		}
	};
};
