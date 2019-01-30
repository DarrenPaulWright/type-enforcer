import isVector from '../../checks/types/isVector';
import enforceVector from '../../enforcer/types/enforceVector';
import Vector from '../../types/Vector';
import { buildMethod, compareCustomType, mapEnforcerDefaultCoerceTrue } from './methodAny';

/**
 * Builds a chainable method for getting/setting a [Vector](docs/Vector.md)
 *
 * @function method.vector
 * @extends method.any
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {*} [options.init=Vector]
 * @arg {Function} [options.enforce=enforce.vector]
 * @arg {Function} [options.compare=Vector.isSame]
 * @arg {Boolean} [options.coerce=true] - If false then don't coerce the value
 *
 * @returns {Function}
 */
export default buildMethod({
	init: new Vector(),
	enforce: mapEnforcerDefaultCoerceTrue(enforceVector),
	compare: compareCustomType(Vector, isVector)
});
