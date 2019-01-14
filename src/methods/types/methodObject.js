import enforceObject from '../../enforcer/types/enforceObject';
import { buildMethod, deepCompare, setDeepOnInit } from './methodAny';

/**
 * Builds a method for getting/setting a plain object
 *
 * @function method.object
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.enforce=enforce.object]
 * @arg [options.compare=deepCompare] - Performs a deep comparison between values with [lodash.isEqual]{@link https://lodash.com/docs/#isEqual}
 * @arg [options.deep=true] - If false then only use strict equality
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: enforceObject,
	compare: deepCompare
}, setDeepOnInit);
