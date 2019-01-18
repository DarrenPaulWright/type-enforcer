import enforceBool from '../../enforcer/types/enforceBool';
import { buildMethod, mapEnforcer } from './methodAny';

/**
 * Builds a method for getting/setting a boolean
 *
 * @function method.bool
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.init=false]
 * @arg [options.enforce=enforce.bool]
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: mapEnforcer(enforceBool),
	init: false
});
