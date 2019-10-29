import enforceFunction from '../enforcer/enforceFunction';
import methodAny from './methodAny';

/**
 * Builds a chainable method for getting/setting a function
 *
 * @function method.function
 * @extends method.any
 * @alias methodFunction
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.function]
 * @arg {boolean} [options.bind=true] - Binds the set function to the same context as the method.
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
