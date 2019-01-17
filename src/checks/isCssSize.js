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
 *
 * isCssSize('14px');
 * // => false
 *
 * isCssSize('14px', true);
 * // => true
 * ```
 *
 * @function isCssSize
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if this value can be coerced into a CssSize
 *
 * @returns {Boolean}
 */
export default buildCustomTypeCheck(CssSize);
