import enforceInstance from '../../enforcer/types/enforceInstance';
import { buildMethod } from './methodAny';

/**
 * Builds a chainable method for getting/setting an instance of a specific constructor
 *
 * @function method.instance
 * @extends method.any
 * @alias methodInstance
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.instance]
 * @arg {Constructor} [options.instance] - The item to run enforce.instance against
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce(newValue, oldValue, options) {
		return enforceInstance(newValue, options.instance, oldValue);
	}
});
