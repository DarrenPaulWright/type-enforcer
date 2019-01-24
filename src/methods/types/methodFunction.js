import enforceFunction from '../../enforcer/types/enforceFunction';
import { buildMethod } from './methodAny';

/**
 * Builds a chainable method for getting/setting a function
 *
 * @function method.function
 * @extends method.any
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.function]
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: enforceFunction
});
