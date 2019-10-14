import enforceDate from '../../enforcer/types/enforceDate';
import methodAny from './methodAny';

/**
 * Builds a chainable method for getting/setting a date
 *
 * @function method.date
 * @extends method.any
 * @alias methodDate
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.date]
 * @arg {Boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce: (newValue, oldValue, options) => {
		return enforceDate(newValue, oldValue, options.coerce);
	}
});
