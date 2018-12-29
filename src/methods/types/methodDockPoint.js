import enforceDockPoint from '../../enforcer/types/enforceDockPoint';
import { buildMethod } from './methodAny';

/**
 * Builds a method for getting/setting a DockPoint instance
 *
 * @function method.dockPoint
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.enforce=enforce.dockPoint]
 * @arg [options.compare=DockPoint.isSame]
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: enforceDockPoint,
	compare: (newValue, oldValue) => (newValue && newValue.isSame) ? !newValue.isSame(oldValue) : newValue !== oldValue
});
