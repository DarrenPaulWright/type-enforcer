import isString from './isString.js';

/**
 * Check if a value is a RegExp.
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
 * @param {unknown} value - The value to check.
 * @param {boolean} [coerce=false] - If true then see if the value can be coerced into a RegExp.
 *
 * @returns {boolean}
 */
export default (value, coerce) => {
	return value instanceof RegExp || (coerce === true && isString(value));
};
