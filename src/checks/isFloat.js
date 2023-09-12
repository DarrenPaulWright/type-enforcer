import isNumber from './isNumber.js';

const isFinite = (value) => value !== Infinity && value !== -Infinity;

/**
 * Check if a value is a finite float.
 *
 * @example
 * ``` javascript
 * import { isFloat } from 'type-enforcer';
 *
 * isFloat(3.14159);
 * // => true
 *
 * isFloat('3.14159');
 * // => false
 *
 * isFloat('3.14159', true);
 * // => true
 * ```
 *
 * @function is.float
 * @alias isFloat
 *
 * @param {unknown} value - The value to check.
 * @param {boolean} [coerce=false] - If true then see if the value can be coerced into a float.
 *
 * @returns {boolean}
 */
export default (value, coerce) => {
	return (isNumber(value) && value !== Infinity && value !== -Infinity) || (coerce === true && !isNaN(value) && isFinite(parseFloat(value)));
};
