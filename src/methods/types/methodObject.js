import enforceObject from '../../enforcer/types/enforceObject';
import { buildMethod } from './methodAny';

/**
 * Builds a method for getting/setting a plain object
 *
 * @function method.object
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.enforce=enforce.object]
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: enforceObject
});
