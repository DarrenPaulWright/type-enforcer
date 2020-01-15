import isNumber from './isNumber.js';

/**
 * Check if a value is a finite integer
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
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into an Integer
 *
 * @returns {Boolean}
 */
const isInteger = (value, coerce) => {
	return (isNumber(value) && value !== Infinity && value !== -Infinity && value == (value | 0)) || (coerce === true && !isNaN(value) && isInteger(parseFloat(value)));
};

export default isInteger;
