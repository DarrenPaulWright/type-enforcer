import { isRegExp, isString } from 'lodash';
import { buildCheckWithCoerce } from './checks';

/**
 * Check if a value is a [RegExp]{@link https://lodash.com/docs/#isRegExp}
 *
 * @example
 * ``` javascript
 * import { isRegExp } from 'type-enforcer';
 *
 * isRegExp(/*+/g);
 * // => true
 *
 * isInt('/*+/g');
 * // => false
 *
 * isInt('/*+/g', true);
 * // => true
 * ```
 *
 * @function isRegExp
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a RegExp
 *
 * @returns {Boolean}
 */
export default buildCheckWithCoerce(isRegExp, (value) => isString(value));
