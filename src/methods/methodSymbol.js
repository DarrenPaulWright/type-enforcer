import enforceSymbol from '../enforcer/enforceSymbol.js';
import methodAny from './methodAny.js';

/**
 * Builds a chainable method for getting/setting a Symbol
 *
 * @function method.symbol
 * @extends method.any
 * @alias methodSymbol
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {Function} [options.enforce=enforce.symbol]
 * @param {boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceSymbol(newValue, oldValue, options.coerce);
	}
});
