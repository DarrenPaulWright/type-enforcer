import { deepEqual } from 'object-agent';
import enforceObject from '../enforcer/enforceObject.js';
import methodAny from './methodAny.js';

/**
 * Builds a chainable method for getting/setting a plain object
 *
 * @function method.object
 * @extends method.any
 * @alias methodObject
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {Function} [options.enforce=enforce.object]
 * @param {Function} [options.compare=deepCompare] - Performs a deep comparison between values
 * @param {boolean} [options.deep=true] - If false then only use strict equality
 * @param {boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceObject(newValue, oldValue, options.coerce);
	},
	deep: true
}, (options) => {
	if (options.deep === true) {
		options.compare = (newValue, oldValue) => !deepEqual(newValue, oldValue, { strict: true });
	}
	delete options.deep;
});
