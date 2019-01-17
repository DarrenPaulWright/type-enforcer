import enforceNumber from '../../enforcer/types/enforceNumber';
import { buildMethod } from './methodAny';

/**
 * Builds a method for getting/setting a number
 *
 * @function method.number
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.enforce=enforce.number]
 * @arg {Number} [options.min] - Passed to enforce.number
 * @arg {Number} [options.max] - Passed to enforce.number
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: (newValue, oldValue, options) => enforceNumber(newValue, oldValue, options.coerce, options.min, options.max)
});
