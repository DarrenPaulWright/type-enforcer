import isCssSize from '../../checks/isCssSize';
import CssSize from '../../types/CssSize';
import customTypeEnforcer from './customTypeEnforcer';

/**
 * If the first value is a valid CssSize then return that, otherwise return the alt value.
 *
 * @function enforce.cssSize
 *
 * @arg {*} value
 * @arg {CssSize} alt
 * @arg {Object}  [options]
 * @arg {Boolean} [options.coerce=true] - If false, then will only accept a specific instance
 *
 * @returns {CssSize}
 */
export default customTypeEnforcer(CssSize, isCssSize);
