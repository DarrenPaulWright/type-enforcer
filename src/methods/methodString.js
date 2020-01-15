import enforceString from '../enforcer/enforceString.js';
import methodAny from './methodAny.js';

/**
 * Builds a chainable method for getting/setting a string
 *
 * @function method.string
 * @extends method.any
 * @alias methodString
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {*} [options.init='']
 * @arg {Function} [options.enforce=enforce.string]
 * @arg {Boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceString(newValue, oldValue, options.coerce);
	},
	init: ''
});
