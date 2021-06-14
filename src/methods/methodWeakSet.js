import enforceWeakSet from '../enforcer/enforceWeakSet.js';
import methodAny from './methodAny.js';

/**
 * Builds a chainable method for getting/weakSetting a WeakSet
 *
 * @function method.weakSet
 * @extends method.any
 * @alias methodWeakSet
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {Function} [options.enforce=enforce.weakSet]
 * @param {boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceWeakSet(newValue, oldValue, options.coerce);
	}
});
