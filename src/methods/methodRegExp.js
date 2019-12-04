import enforceRegExp from '../enforcer/enforceRegExp';
import methodAny from './methodAny';

/**
 * Builds a chainable method for getting/setting a RegExp
 *
 * @function method.regExp
 * @extends method.any
 * @alias methodRegExp
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
		return enforceRegExp(newValue, oldValue, options.coerce);
	}
});
