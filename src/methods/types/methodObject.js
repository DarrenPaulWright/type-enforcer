import enforceObject from '../../enforcer/types/enforceObject';
import { buildMethod, deepCompare, mapEnforcer, setDeepOnInit } from './methodAny';

/**
 * Builds a chainable method for getting/setting a plain object
 *
 * @function method.object
 * @extends method.any
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.object]
 * @arg {Function} [options.compare=deepCompare] - Performs a deep comparison between values with [lodash.isEqual]{@link https://lodash.com/docs/#isEqual}
 * @arg {Boolean} [options.deep=true] - If false then only use strict equality
 * @arg {Boolean} [options.coerce=false] - If true then coerce the value when possible
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: mapEnforcer(enforceObject),
	compare: deepCompare
}, setDeepOnInit);
