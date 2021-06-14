import enforceArray from '../enforcer/enforceArray.js';
import methodObject from './methodObject.js';

/**
 * Builds a chainable method for getting/setting an array
 *
 * @function method.array
 * @extends method.any
 * @alias methodArray
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {*} [options.init=[]]
 * @param {Function} [options.enforce=enforce.array]
 * @param {Function} [options.compare=deepCompare] - Performs a deep comparison between values
 * @param {boolean} [options.deep=true] - If false then only use strict equality
 * @param {boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default methodObject.extend({
	enforce(newValue, oldValue, options) {
		return enforceArray(newValue, oldValue, options.coerce);
	},
	init: []
});
