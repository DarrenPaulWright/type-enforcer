import enforceRegExp from '../../enforcer/types/enforceRegExp';
import { buildMethod } from './methodAny';

/**
 * Builds a method for getting/setting a RegExp
 *
 * @function method.regExp
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.init='']
 * @arg [options.enforce=enforce.string]
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: enforceRegExp
});
