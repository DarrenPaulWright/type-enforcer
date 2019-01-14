import enforceDockPoint from '../../enforcer/types/enforceDockPoint';
import DockPoint from '../../types/DockPoint';
import { buildMethod, compareCustomType } from './methodAny';

/**
 * Builds a method for getting/setting a DockPoint instance
 *
 * @function method.dockPoint
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.enforce=enforce.dockPoint]
 * @arg [options.compare=DockPoint.isSame]
 * @arg [options.coerce=true] - If false then use strict equality
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: enforceDockPoint,
	compare: compareCustomType(DockPoint)
});
