import enforceWeakMap from '../enforcer/enforceWeakMap.js';
import methodAny from './methodAny.js';

/**
 * Builds a chainable method for getting/setting a WeakMap
 *
 * @function method.weakMap
 * @extends method.any
 * @alias methodWeakMap
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {Function} [options.enforce=enforce.weakMap]
 * @param {boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceWeakMap(newValue, oldValue, options.coerce);
	}
});
