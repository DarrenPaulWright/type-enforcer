import DockPoint from '../types/DockPoint';
import { buildCustomTypeCheck } from './checks';

/**
 * Check if a value is a DockPoint
 *
 * @example
 * ``` javascript
 * import { isDockPoint } from 'type-enforcer';
 *
 * isDockPoint(new DockPoint());
 * // => true
 *
 * isDockPoint('top');
 * // => false
 *
 * isDockPoint('top', true);
 * // => true
 * ```
 *
 * @function isDockPoint
 *
 * @arg {*} value
 *
 * @returns {Boolean}
 */
export default buildCustomTypeCheck(DockPoint);
