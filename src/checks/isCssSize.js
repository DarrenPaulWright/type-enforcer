import CssSize from '../types/CssSize';
import { buildCustomTypeCheck } from './checks';

/**
 * Check if a value is a CssSize
 *
 * @example
 * ``` javascript
 * import { isCssSize } from 'type-enforcer';
 *
 * isCssSize(new CssSize());
 * // => true
 * ```
 *
 * @function isCssSize
 *
 * @arg   {*} value
 *
 * @returns {Boolean}
 */
export default buildCustomTypeCheck(CssSize);
