import enforceBoolean from '../enforcer/enforceBoolean.js';
import methodAny from './methodAny.js';

/**
 * Builds a chainable method for getting/setting a boolean
 *
 * @function method.boolean
 * @extends method.any
 * @alias methodBoolean
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {unknown} [options.init=false]
 * @param {Function} [options.enforce=enforce.boolean]
 * @param {boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceBoolean(newValue, oldValue, options.coerce);
	},
	init: false
});
