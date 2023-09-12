import isNumber from '../checks/isNumber.js';
import clamp from '../utility/clamp.js';

const numericEnforcer = (check, doCoercion) => {
	const enforcer = (value, alt, coerce, minValue = -Infinity, maxValue = Infinity) => {
		return check(value) ? clamp(value, minValue, maxValue) : ((coerce === true && check(value, true)) ? clamp(doCoercion(value), minValue, maxValue) : alt);
	};

	enforcer.extend = (extendedCheck, extendedDoCoercion) => numericEnforcer(extendedCheck, extendedDoCoercion);

	return enforcer;
};

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
 * @param {unknown} value
 * @param {number} alt - Returned if the value is not the correct type
 * @param {boolean} [coerce=false] - If true then coerce the value when possible
 * @param {number} [minValue=-Infinity]
 * @param {number} [maxValue=Infinity]
 *
 * @returns {number}
 */
export default numericEnforcer(isNumber, Number);
