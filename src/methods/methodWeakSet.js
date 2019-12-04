import enforceWeakSet from '../enforcer/enforceWeakSet';
import methodAny from './methodAny';

/**
 * Builds a chainable method for getting/weakSetting a WeakSet
 *
 * @function method.weakSet
 * @extends method.any
 * @alias methodWeakSet
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.weakSet]
 * @arg {Boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceWeakSet(newValue, oldValue, options.coerce);
	}
});
