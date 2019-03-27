import { buildCheckWithCoerce } from './checks';
import isNumber, { isFinite } from './isNumber';

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
export default buildCheckWithCoerce((item) => isNumber(item) && item == (item | 0) && isFinite(item), (value) => {
	const parsed = parseFloat(value);
	return !isNaN(value) && parsed == (parsed | 0) && isFinite(parsed);
});
