import isNumber from '../../checks/types/isNumber';
import clamp from '../../utility/clamp';

/**
 * Enforce that a value is a number (excluding NaN). Uses [isNumber](docs/checks.md#isNumber).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * enforce.number(3.14159, 13.2);
 * // => 3.14159
 *
 * enforce.number('3.14159', 13.2);
 * // => 13.2
 *
 * enforce.number('3.14159', 13.2, true);
 * // => 3.14159
 *
 * enforce.number(Infinity, 13.2, true);
 * // => Infinity
 * ```
 *
 * @function enforce.number
 * @alias enforceNumber
 *
 * @arg {*} value
 * @arg {Number} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 * @arg {Number} [minValue=-Infinity]
 * @arg {Number} [maxValue=Infinity]
 *
 * @returns {Number}
 */
export default (value, alt, coerce, minValue = -Infinity, maxValue = Infinity) => {
	if (coerce === true && !isNumber(value) && isNumber(value, true)) {
		return clamp(Number(value), minValue, maxValue);
	}
	return isNumber(value) ? clamp(value, minValue, maxValue) : alt;
};
