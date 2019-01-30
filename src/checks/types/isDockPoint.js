import DockPoint from '../../types/DockPoint';
import { buildCustomTypeCheck } from './checks';

/**
 * Check if a value is a [DockPoint](docs/DockPoint.md)
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
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a DockPoint
 *
 * @returns {Boolean}
 */
export default buildCustomTypeCheck(DockPoint);
