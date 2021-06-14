import enforceInteger from '../enforcer/enforceInteger.js';
import methodAny from './methodAny.js';

/**
 * Builds a chainable method for getting/setting an integer
 *
 * @function method.int
 * @extends method.any
 * @alias methodInteger
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {Function} [options.enforce=enforce.int]
 * @param {boolean} [options.coerce=false] - If true then coerce the value when possible
 * @param {number} [options.min] - Passed to enforce.int
 * @param {number} [options.max] - Passed to enforce.int
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceInteger(newValue, oldValue, options.coerce, options.min, options.max);
	}
});
