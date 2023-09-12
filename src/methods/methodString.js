import enforceString from '../enforcer/enforceString.js';
import methodAny from './methodAny.js';

/**
 * Builds a chainable method for getting/setting a string
 *
 * @function method.string
 * @extends method.any
 * @alias methodString
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {unknown} [options.init='']
 * @param {Function} [options.enforce=enforce.string]
 * @param {boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceString(newValue, oldValue, options.coerce);
	},
	init: ''
});
