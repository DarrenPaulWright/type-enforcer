import isDockPoint from '../../checks/isDockPoint';
import DockPoint from '../../types/DockPoint';
import enforcer from './enforcer';

/**
 * Enforce that a value is a [DockPoint](docs/DockPoint.md). Uses [isDockPoint](docs/checks.md#isDockPoint).
 *
 * @function enforce.dockPoint
 *
 * @arg {*} value
 * @arg {String} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {DockPoint}
 */
export default enforcer(isDockPoint, (value) => new DockPoint(value));
