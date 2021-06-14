import isNumber from './isNumber.js';

/**
 * Check if a value is a finite integer.
 *
 * @example
 * ``` javascript
 * import { isInteger } from 'type-enforcer';
 *
 * isInteger(42);
 * // => true
 *
 * isInteger('42');
 * // => false
 *
 * isInteger('42', true);
 * // => true
 *
 * isInteger('42.5', true);
 * // => false
 * ```
 *
 * @function is.integer
 * @alias isInteger
 *
 * @param {*} value - The value to check.
 * @param {boolean} [coerce=false] - If true then see if the value can be coerced into an Integer.
 *
 * @returns {boolean}
 */
const isInteger = (value, coerce) => {
	return (isNumber(value) && value !== Infinity && value !== -Infinity && value == (value | 0)) || (coerce === true && !isNaN(value) && isInteger(parseFloat(value))); // eslint-disable-line eqeqeq
};

export default isInteger;
