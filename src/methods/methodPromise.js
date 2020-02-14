import enforcePromise from '../enforcer/enforcePromise.js';
import methodAny from './methodAny.js';

/**
 * Builds a chainable method for getting/setting a promise
 *
 * @function method.promise
 * @extends method.any
 * @alias methodPromise
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.promise]
 *
 * @returns {Promise}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforcePromise(newValue, oldValue, options.coerce);
	}
});
