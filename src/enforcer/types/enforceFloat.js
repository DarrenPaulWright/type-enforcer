import isFloat from '../../checks/types/isFloat';
import clamp from '../../utility/clamp';

/**
 * Enforce that a value is a finite float. Uses [isFloat](docs/checks.md#isFloat).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * enforce.float(3.14159, 13.2);
 * // => 3.14159
 *
 * enforce.float('3.14159', 13.2);
 * // => 13.2
 *
 * enforce.float('3.14159', 13.2, true);
 * // => 3.14159
 * ```
 *
 * @function enforce.float
 * @alias enforceFloat
 *
 * @arg {*} value
 * @arg {int} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 * @arg {int} [minValue]
 * @arg {int} [maxValue]
 *
 * @returns {int}
 */
export default (value, alt, coerce, minValue = -Infinity, maxValue = Infinity) => {
	if (coerce === true && !isFloat(value) && isFloat(value, true)) {
		return clamp(Number(value), minValue, maxValue);
	}
	return isFloat(value) ? clamp(value, minValue, maxValue) : alt;
};
