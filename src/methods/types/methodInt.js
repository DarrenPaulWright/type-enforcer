import enforceInt from '../../enforcer/types/enforceInt';
import { buildMethod, mapEnforcerNumeric } from './methodAny';

/**
 * Builds a chainable method for getting/setting an integer
 *
 * @function method.int
 * @extends method.any
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.int]
 * @arg {Boolean} [options.coerce=false] - If true then coerce the value when possible
 * @arg {Number} [options.min] - Passed to enforce.int
 * @arg {Number} [options.max] - Passed to enforce.int
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: mapEnforcerNumeric(enforceInt)
});
