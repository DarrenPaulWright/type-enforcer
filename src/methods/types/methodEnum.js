import enforceEnum from '../../enforcer/types/enforceEnum';
import { buildMethod } from './methodAny';

/**
 * Builds a chainable method for getting/setting an enumerable value in an [Enum](docs/Enum.md)
 *
 * @function method.enum
 * @extends method.any
 * @alias methodEnum
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.enum]
 * @arg {Enum} options.enum - An enum to restrict the values to.
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: (newValue, oldValue, options) => enforceEnum(newValue, options.enum, oldValue)
});
