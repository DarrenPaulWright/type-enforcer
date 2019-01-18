import enforceNumber from '../../enforcer/types/enforceNumber';
import { buildMethod, mapEnforcerNumeric } from './methodAny';

/**
 * Builds a chainable method for getting/setting a number
 *
 * @function method.number
 * @extends method.any
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.number]
 * @arg {Boolean} [options.coerce=false] - If true then coerce the value when possible
 * @arg {Number} [options.min] - Passed to enforce.number
 * @arg {Number} [options.max] - Passed to enforce.number
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: mapEnforcerNumeric(enforceNumber)
});
