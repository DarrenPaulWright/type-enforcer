import CssSize from '../../types/CssSize';

/**
 * Check if a value is a [CssSize](docs/CssSize.md)
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
 * @function is.cssSize
 * @alias isCssSize
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a CssSize
 *
 * @returns {Boolean}
 */
export default (value, coerce) => {
	return (value instanceof CssSize) || (coerce === true && CssSize.isValid(value));
};
