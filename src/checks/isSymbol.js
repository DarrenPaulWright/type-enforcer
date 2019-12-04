import isString from './isString';

/**
 * Check if a value is a Symbol
 *
 * @example
 * ``` javascript
 * import { isSymbol } from 'type-enforcer';
 *
 * isSymbol(Symbol());
 * // => true
 *
 * isSymbol(new Date());
 * // => false
 *
 * isSymbol('string', true);
 * // => true
 * ```
 *
 * @function is.symbol
 * @alias isSymbol
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a Symbol. Anything that can be coerced into a string can also be coerced into a Symbol.
 *
 * @returns {Boolean}
 */
export default (value, coerce) => {
	return typeof value === 'symbol' || (coerce === true && isString(value, true));
};
