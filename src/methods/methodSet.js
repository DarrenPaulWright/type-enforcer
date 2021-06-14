import enforceSet from '../enforcer/enforceSet.js';
import methodAny from './methodAny.js';

/**
 * Builds a chainable method for getting/setting a Set
 *
 * @function method.set
 * @extends method.any
 * @alias methodSet
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {Function} [options.enforce=enforce.set]
 * @param {boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceSet(newValue, oldValue, options.coerce);
	}
});
