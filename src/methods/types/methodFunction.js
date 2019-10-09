import enforceFunction from '../../enforcer/types/enforceFunction';
import { buildMethod } from './methodAny';

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
export default buildMethod({
	enforce(newValue, value, options) {
		newValue = enforceFunction(newValue, value);

		if (newValue && options.bind === true) {
			newValue = newValue.bind(this);
		}

		return newValue;
	},
	bind: true
});
