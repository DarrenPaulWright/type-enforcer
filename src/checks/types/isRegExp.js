import { buildCheckWithCoerce } from './checks';
import isInstanceOf from './isInstanceOf';
import isString from './isString';

/**
 * Check if a value is a RegExp
 *
 * @example
 * ``` javascript
 * import { isRegExp } from 'type-enforcer';
 *
 * isRegExp(/*+/g);
 * // => true
 *
 * isRegExp('/*+/g');
 * // => false
 *
 * isRegExp('/*+/g', true);
 * // => true
 * ```
 *
 * @function is.regExp
 * @alias isRegExp
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a RegExp
 *
 * @returns {Boolean}
 */
export default buildCheckWithCoerce((item) => isInstanceOf(item, RegExp), (value) => isString(value));
