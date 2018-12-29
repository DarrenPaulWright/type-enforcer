import enforceFunc from '../../enforcer/types/enforceFunc';
import { buildMethod } from './methodAny';

/**
 * Builds a method for getting/setting a function
 *
 * @function method.func
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.enforce=enforce.func]
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: enforceFunc
});
