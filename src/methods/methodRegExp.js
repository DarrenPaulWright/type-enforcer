import enforceRegExp from '../enforcer/enforceRegExp.js';
import methodAny from './methodAny.js';

/**
 * Builds a chainable method for getting/setting a RegExp
 *
 * @function method.regExp
 * @extends method.any
 * @alias methodRegExp
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {*} [options.init='']
 * @param {Function} [options.enforce=enforce.string]
 * @param {boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceRegExp(newValue, oldValue, options.coerce);
	}
});
