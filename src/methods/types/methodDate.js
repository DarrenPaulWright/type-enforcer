import enforceDate from '../../enforcer/types/enforceDate';
import { buildMethod } from './methodAny';

/**
 * Builds a method for getting/setting a date or momentjs instance
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
	enforce: enforceDate
});
