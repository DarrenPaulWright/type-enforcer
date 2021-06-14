import enforceMap from '../enforcer/enforceMap.js';
import methodAny from './methodAny.js';

/**
 * Builds a chainable method for getting/setting a Map
 *
 * @function method.map
 * @extends method.any
 * @alias methodMap
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {Function} [options.enforce=enforce.map]
 * @param {boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceMap(newValue, oldValue, options.coerce);
	}
});
