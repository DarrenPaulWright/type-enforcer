import enforceMap from '../enforcer/enforceMap';
import methodAny from './methodAny';

/**
 * Builds a chainable method for getting/setting a Map
 *
 * @function method.map
 * @extends method.any
 * @alias methodMap
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.map]
 * @arg {Boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce: (newValue, oldValue, options) => {
		return enforceMap(newValue, oldValue, options.coerce);
	}
});
