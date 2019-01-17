import isCssSize from '../../checks/isCssSize';
import CssSize from '../../types/CssSize';
import enforcer from './enforcer';

/**
 * If the first value is a valid CssSize then return that, otherwise return the alt value.
 *
 * @function enforce.cssSize
 *
 * @arg {*} value
 * @arg {CssSize} alt
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {CssSize}
 */
export default enforcer(isCssSize, (value) => new CssSize(value));
