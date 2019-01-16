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
 * ```
 *
 * @function isInt
 *
 * @arg {*} value
 *
 * @returns {Boolean}
 */
// export default (value) => isInteger(value);
export default buildCheckWithCoerce(isInteger, (value) => !isNaN(value) && !isNaN(parseInt(value)));
