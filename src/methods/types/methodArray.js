import { isEqual } from 'lodash';
import enforceArray from '../../enforcer/types/enforceArray';
import { buildMethod } from './methodAny';

/**
 * Builds a method for getting/setting an array
 *
 * @function method.array
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.init=[]]
 * @arg [options.enforce=enforce.array]
 * @arg [options.compare=!lodash.isEqual]
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: enforceArray,
	init: [],
	compare: (newValue, oldValue) => !isEqual(newValue, oldValue)
});
