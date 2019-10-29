import enforceSet from '../enforcer/enforceSet';
import methodAny from './methodAny';

/**
 * Builds a chainable method for getting/setting a Set
 *
 * @function method.set
 * @extends method.any
 * @alias methodSet
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.set]
 * @arg {Boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceSet(newValue, oldValue, options.coerce);
	}
});
