import enforceBoolean from '../enforcer/enforceBoolean';
import methodAny from './methodAny';

/**
 * Builds a chainable method for getting/setting a boolean
 *
 * @function method.boolean
 * @extends method.any
 * @alias methodBoolean
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {*} [options.init=false]
 * @arg {Function} [options.enforce=enforce.boolean]
 * @arg {Boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceBoolean(newValue, oldValue, options.coerce);
	},
	init: false
});
