import DockPoint from '../../types/DockPoint';
import customTypeEnforcer from './customTypeEnforcer';

/**
 * If the first value is a valid dockPoint then return that, otherwise return the alt value.
 *
 * @function enforce.dockPoint
 *
 * @arg {*} value
 * @arg {String} alt
 * @arg {Object}  [options]
 * @arg {Boolean} [options.coerce=true] - If false, then will only accept a specific instance
 *
 * @returns {DockPoint}
 */
export default customTypeEnforcer(DockPoint);
