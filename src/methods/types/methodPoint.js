import enforcePoint from '../../enforcer/types/enforcePoint';
import Point from '../../types/Point';
import { buildMethod, compareCustomType } from './methodAny';

/**
 * Builds a method for getting/setting a Point instance
 *
 * @function method.point
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.init=Point]
 * @arg [options.enforce=enforce.point]
 * @arg [options.compare=Point.isSame]
 *
 * @returns {Function}
 */
export default buildMethod({
	init: new Point(),
	enforce: enforcePoint,
	compare: compareCustomType(Point)
});
