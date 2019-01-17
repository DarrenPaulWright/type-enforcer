import isDockPoint from '../../checks/isDockPoint';
import DockPoint from '../../types/DockPoint';
import enforcer from './enforcer';

/**
 * If the first value is a valid dockPoint then return that, otherwise return the alt value.
 *
 * @function enforce.dockPoint
 *
 * @arg {*} value
 * @arg {String} alt
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {DockPoint}
 */
export default enforcer(isDockPoint, (value) => new DockPoint(value));
