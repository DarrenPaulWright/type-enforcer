import { isNumber } from 'lodash';
import { buildCheckWithCoerce } from './checks';

/**
 * Check if a value is a [number]{@link https://lodash.com/docs/#isNumber}
 *
 * @example
 * ``` javascript
 * import { isNumber } from 'type-enforcer';
 *
 * isNumber(3.14159);
 * // => true
 * ```
 *
 * @function isNumber
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if this value can be parsed as a number
 *
 * @returns {Boolean}
 */
export default buildCheckWithCoerce(isNumber, (value) => !isNaN(value));
