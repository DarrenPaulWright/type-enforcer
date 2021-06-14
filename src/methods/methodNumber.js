import enforceNumber from '../enforcer/enforceNumber.js';
import methodAny from './methodAny.js';

/**
 * Builds a chainable method for getting/setting a number
 *
 * @function method.number
 * @extends method.any
 * @alias methodNumber
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {Function} [options.enforce=enforce.number]
 * @param {boolean} [options.coerce=false] - If true then coerce the value when possible
 * @param {number} [options.min] - Passed to enforce.number
 * @param {number} [options.max] - Passed to enforce.number
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceNumber(newValue, oldValue, options.coerce, options.min, options.max);
	}
});
