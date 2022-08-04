import enforceFunction from '../enforcer/enforceFunction.js';
import methodAny from './methodAny.js';

/**
 * Builds a chainable method for getting/setting a function
 *
 * @function method.function
 * @extends method.any
 * @alias methodFunction
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {Function} [options.enforce=enforce.function]
 * @param {boolean} [options.bind=true] - Binds the set function to the same context as the method.
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceFunction(newValue, oldValue, options.coerce);
	},
	bind: true
}, (options) => {
	if (options.bind === true) {
		options.enforce = function(newValue, value) {
			newValue = enforceFunction(newValue, value);

			if (newValue) {
				newValue = newValue.bind(this);
			}

			return newValue;
		};
	}
});
