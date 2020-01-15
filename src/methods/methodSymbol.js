import enforceSymbol from '../enforcer/enforceSymbol.js';
import methodAny from './methodAny.js';

/**
 * Builds a chainable method for getting/setting a Symbol
 *
 * @function method.symbol
 * @extends method.any
 * @alias methodSymbol
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.symbol]
 * @arg {Boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceSymbol(newValue, oldValue, options.coerce);
	}
});
