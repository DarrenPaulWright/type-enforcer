import enforceInt from '../../enforcer/types/enforceInt';
import { buildMethod, mapEnforcerNumeric } from './methodAny';

/**
 * Builds a method for getting/setting an integer
 *
 * @function method.int
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.enforce=enforce.int]
 * @arg {Number} [options.min] - Passed to enforce.int
 * @arg {Number} [options.max] - Passed to enforce.int
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: mapEnforcerNumeric(enforceInt)
});
