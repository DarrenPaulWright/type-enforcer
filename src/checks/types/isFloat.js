import { buildCheckWithCoerce } from './checks';
import isNumber from './isNumber';

const isFinite = (item) => item !== Infinity && item !== -Infinity;

/**
 * Check if a value is a finite float
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
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a float
 *
 * @returns {Boolean}
 */
export default buildCheckWithCoerce((item) => isNumber(item) && item !== Infinity && item !== -Infinity, (value) => {
	const parsed = parseFloat(value);
	return !isNaN(value) && parsed !== Infinity && parsed !== -Infinity;
});
