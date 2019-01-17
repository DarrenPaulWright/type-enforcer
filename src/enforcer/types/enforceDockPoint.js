import isDockPoint from '../../checks/isDockPoint';
import DockPoint from '../../types/DockPoint';
import { customTypeEnforcer } from './customTypeEnforcer';

/**
 * If the first value is a valid dockPoint then return that, otherwise return the alt value.
 *
 * @function enforce.dockPoint
 *
 * @arg {*} value
 * @arg {String} alt
 * @arg {Boolean} [coerce=false] - If true then allow values that can be coerced into a DockPoint
 *
 * @returns {DockPoint}
 */
export default customTypeEnforcer(DockPoint, isDockPoint);
