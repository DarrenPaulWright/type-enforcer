import isPoint from '../../checks/isPoint';
import enforcePoint from '../../enforcer/types/enforcePoint';
import Point from '../../types/Point';
import { buildMethod, compareCustomType, mapEnforcerDefaultCoerceTrue } from './methodAny';

/**
 * Builds a chainable method for getting/setting a [Point](docs/Point.md)
 *
 * @function method.point
 * @extends method.any
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {*} [options.init=Point]
 * @arg {Function} [options.enforce=enforce.point]
 * @arg {Function} [options.compare=Point.isSame]
 * @arg {Boolean} [options.coerce=true] - If false then don't coerce the value
 *
 * @returns {Function}
 */
export default buildMethod({
	init: new Point(),
	enforce: mapEnforcerDefaultCoerceTrue(enforcePoint),
	compare: compareCustomType(Point, isPoint)
});
