import { forOwn } from 'lodash';
import isObject from '../../checks/types/isObject';

/**
 * Builds a chainable method that accepts either:
 * - two args, a key and a value
 * - one arg, an object with multiple key/value pairs
 *
 * @function method.keyValue
 *
 * @arg {Object}   [options]
 * @arg {Function} [options.set] - Called for each key/value pair applied. Provides two args, the key and value, and sets the context to the methods constructor.
 * @arg {Function} [options.get] - Called if the method is called with a single, non-object, arg. Provides the same arg, sets the context to the methods constructor.
 *
 * @returns {Function} accepts a new value and returns the methods constructor (allows chaining), or if no args are passed returns the output of options.get
 */
export default (options = {}) => {
	return function(...args) {
		if (options.set && (args.length === 2 || isObject(args[0]))) {
			if (isObject(args[0])) {
				forOwn(args[0], (value, key) => {
					options.set.call(this, key, value);
				});
			}
			else {
				options.set.apply(this, args);
			}

			return this;
		}

		if (options.get) {
			return options.get.apply(this, args);
		}
	};
};
