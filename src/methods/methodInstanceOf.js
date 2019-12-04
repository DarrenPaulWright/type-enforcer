import enforceInstanceOf from '../enforcer/enforceInstanceOf';
import methodAny from './methodAny';

/**
 * Builds a chainable method for getting/setting an instance of a specific constructor
 *
 * @function method.instanceOf
 * @extends method.any
 * @alias methodInstanceOf
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.instanceOf]
 * @arg {Constructor} [options.instanceOf] - The item to run enforce.instanceOf against
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceInstanceOf(newValue, options.instanceOf, oldValue);
	}
});
