import enforceEnum from '../../enforcer/types/enforceEnum';
import { buildMethod } from './methodAny';

/**
 * Builds a method for getting/setting an enumerable value
 *
 * @function method.enum
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.enforce=enforce.enum]
 * @arg {Enum} options.enum - An enum to restrict the values to.
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: (newValue, oldValue, options) => enforceEnum(newValue, options.enum, oldValue)
});
