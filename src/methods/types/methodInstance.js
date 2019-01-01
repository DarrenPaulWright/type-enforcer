import enforceInstance from '../../enforcer/types/enforceInstance';
import { buildMethod } from './methodAny';

/**
 * Builds a method for getting/setting an instance of a specific constructor
 *
 * @function method.instance
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.enforce=instanceOf]
 * @arg {Constructor} [options.instance] - The item to run instanceOf against
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: (newValue, oldValue, options) => enforceInstance(newValue, options.instance, oldValue)
});
