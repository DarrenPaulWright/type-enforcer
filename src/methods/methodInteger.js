import enforceInteger from '../enforcer/enforceInteger.js';
import methodAny from './methodAny.js';

/**
 * Builds a chainable method for getting/setting an integer
 *
 * @function method.int
 * @extends method.any
 * @alias methodInteger
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.int]
 * @arg {Boolean} [options.coerce=false] - If true then coerce the value when possible
 * @arg {Number} [options.min] - Passed to enforce.int
 * @arg {Number} [options.max] - Passed to enforce.int
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceInteger(newValue, oldValue, options.coerce, options.min, options.max);
	}
});
