import isCssSize from '../../checks/isCssSize';
import CssSize from '../../types/CssSize';
import { customTypeEnforcer } from './customTypeEnforcer';

/**
 * If the first value is a valid CssSize then return that, otherwise return the alt value.
 *
 * @function enforce.cssSize
 *
 * @arg {*} value
 * @arg {CssSize} alt
 * @arg {Boolean} [coerce=false] - If true then allow values that can be coerced into a CssSize
 *
 * @returns {CssSize}
 */
export default customTypeEnforcer(CssSize, isCssSize);
