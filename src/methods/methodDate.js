import enforceDate from '../enforcer/enforceDate.js';
import methodAny from './methodAny.js';

/**
 * Builds a chainable method for getting/setting a date
 *
 * @function method.date
 * @extends method.any
 * @alias methodDate
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {Function} [options.enforce=enforce.date]
 * @param {boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceDate(newValue, oldValue, options.coerce);
	}
});
