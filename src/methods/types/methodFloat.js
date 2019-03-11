import enforceFloat from '../../enforcer/types/enforceFloat';
import { buildMethod, mapEnforcerNumeric } from './methodAny';

/**
 * Builds a chainable method for getting/setting a float
 *
 * @function method.float
 * @extends method.any
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.float]
 * @arg {Boolean} [options.coerce=false] - If true then coerce the value when possible
 * @arg {Number} [options.min] - Passed to enforce.float
 * @arg {Number} [options.max] - Passed to enforce.float
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: mapEnforcerNumeric(enforceFloat)
});