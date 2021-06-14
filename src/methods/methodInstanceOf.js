import enforceInstanceOf from '../enforcer/enforceInstanceOf.js';
import methodAny from './methodAny.js';

/**
 * Builds a chainable method for getting/setting an instance of a specific constructor
 *
 * @function method.instanceOf
 * @extends method.any
 * @alias methodInstanceOf
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {Function} [options.enforce=enforce.instanceOf] - Enforce function.
 * @param {Function} [options.instanceOf] - The constructor to run enforce.instanceOf against
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceInstanceOf(newValue, options.instanceOf, oldValue);
	}
});
