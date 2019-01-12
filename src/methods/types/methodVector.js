import enforceVector from '../../enforcer/types/enforceVector';
import Vector from '../../types/Vector';
import { buildMethod, compareCustomType } from './methodAny';

/**
 * Builds a method for getting/setting a Vector instance
 *
 * @function method.vector
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.init=Vector]
 * @arg [options.enforce=enforce.vector]
 * @arg [options.compare=Vector.isSame]
 *
 * @returns {Function}
 */
export default buildMethod({
	init: new Vector(),
	enforce: enforceVector,
	compare: compareCustomType(Vector)
});
