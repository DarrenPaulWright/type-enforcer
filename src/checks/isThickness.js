import Thickness from '../types/Thickness';
import { buildCustomTypeCheck } from './checks';

/**
 * Check if a value is a Thickness
 *
 * @example
 * ``` javascript
 * import { isThickness } from 'type-enforcer';
 *
 * isThickness(new Thickness());
 * // => true
 * ```
 *
 * @function isThickness
 *
 * @arg   {*} value
 *
 * @returns {Boolean}
 */
export default buildCustomTypeCheck(Thickness);
