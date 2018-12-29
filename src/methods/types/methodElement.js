import enforceElement from '../../enforcer/types/enforceElement';
import { buildMethod } from './methodAny';

/**
 * Builds a method for getting/setting a DOM element
 *
 * @function method.element
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.enforce=enforce.element]
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: enforceElement
});
