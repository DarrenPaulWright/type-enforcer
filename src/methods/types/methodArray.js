import enforceArray from '../../enforcer/types/enforceArray';
import { buildMethod, deepCompare, mapEnforcer, setDeepOnInit } from './methodAny';

/**
 * Builds a chainable method for getting/setting an array
 *
 * @function method.array
 * @extends method.any
 * @alias methodArray
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {*} [options.init=[]]
 * @arg {Function} [options.enforce=enforce.array]
 * @arg {Function} [options.compare=deepCompare] - Performs a deep comparison between values
 * @arg {Boolean} [options.deep=true] - If false then only use strict equality
 * @arg {Boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: mapEnforcer(enforceArray),
	init: [],
	compare: deepCompare
}, setDeepOnInit);
