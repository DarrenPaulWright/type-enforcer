import enforceArray from '../../enforcer/types/enforceArray';
import { buildMethod, deepCompare, mapEnforcer, setDeepOnInit } from './methodAny';

/**
 * Builds a method for getting/setting an array
 *
 * @function method.array
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.init=[]]
 * @arg [options.enforce=enforce.array]
 * @arg [options.compare=deepCompare] - Performs a deep comparison between values with [lodash.isEqual]{@link https://lodash.com/docs/#isEqual}
 * @arg [options.deep=true] - If false then only use strict equality
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: mapEnforcer(enforceArray),
	init: [],
	compare: deepCompare
}, setDeepOnInit);
