import enforceFunc from '../../enforcer/types/enforceFunc';
import { buildMethod } from './methodAny';

/**
 * Builds a chainable method for getting/setting a function
 *
 * @function method.func
 * @extends method.any
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.func]
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: enforceFunc
});
