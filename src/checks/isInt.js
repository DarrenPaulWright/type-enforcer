import { isInteger } from 'lodash';
import { buildCheckWithCoerce } from './checks';

/**
 * Check if a value is an [integer]{@link https://lodash.com/docs/#isInteger}
 *
 * @example
 * ``` javascript
 * import { isInt } from 'type-enforcer';
 *
 * isInt(42);
 * // => true
 *
 * isInt('42');
 * // => false
 *
 * isInt('42', true);
 * // => true
 * ```
 *
 * @function isInt
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into an Integer
 *
 * @returns {Boolean}
 */
export default buildCheckWithCoerce(isInteger, (value) => !isNaN(value) && !isNaN(parseInt(value)));
