import Point from '../types/Point';
import { buildCustomTypeCheck } from './checks';

/**
 * Check if a value is a Point
 *
 * @example
 * ``` javascript
 * import { isPoint } from 'type-enforcer';
 *
 * isPoint(new Point());
 * // => true
 * ```
 *
 * @function isPoint
 *
 * @arg {*} value
 *
 * @returns {Boolean}
 */
export default buildCustomTypeCheck(Point);
