import enforceDate from '../../enforcer/types/enforceDate';
import { buildMethod, mapEnforcer } from './methodAny';

/**
 * Builds a method for getting/setting a date
 *
 * @function method.date
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.enforce=enforce.date]
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: mapEnforcer(enforceDate)
});
