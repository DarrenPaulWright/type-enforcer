import enforceString from '../../enforcer/types/enforceString';
import { buildMethod, mapEnforcer } from './methodAny';

/**
 * Builds a method for getting/setting a string
 *
 * @function method.string
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.init='']
 * @arg [options.enforce=enforce.string]
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: mapEnforcer(enforceString),
	init: ''
});
