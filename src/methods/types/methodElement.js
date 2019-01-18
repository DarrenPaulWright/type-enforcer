import enforceElement from '../../enforcer/types/enforceElement';
import { buildMethod } from './methodAny';

/**
 * Builds a chainable method for getting/setting a DOM element
 *
 * @function method.element
 * @extends method.any
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.element]
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: enforceElement
});
