import isDockPoint from '../../checks/types/isDockPoint';
import enforceDockPoint from '../../enforcer/types/enforceDockPoint';
import DockPoint from '../../types/DockPoint';
import { buildMethod, compareCustomType, mapEnforcerDefaultCoerceTrue } from './methodAny';

/**
 * Builds a chainable method for getting/setting a [DockPoint](docs/DockPoint.md)
 *
 * @function method.dockPoint
 * @extends method.any
 * @alias methodDockPoint
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.dockPoint]
 * @arg {Function} [options.compare=DockPoint.isSame]
 * @arg {Boolean} [options.coerce=true] - If false then don't coerce the value
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: mapEnforcerDefaultCoerceTrue(enforceDockPoint),
	compare: compareCustomType(DockPoint, isDockPoint)
});
