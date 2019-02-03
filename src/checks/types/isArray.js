import { buildCheckWithCoerce } from './checks';
import isJson from './isJson';

/**
 * Check if a value is an array
 *
 * @example
 * ``` javascript
 * import { isArray } from 'type-enforcer';
 *
 * isArray([]);
 * // => true
 *
 * isArray('[]');
 * // => false
 *
 * isArray('[]', true);
 * // => true
 * ```
 *
 * @function isArray
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into an array
 *
 * @returns {Boolean}
 */
export default buildCheckWithCoerce((item) => Array.isArray(item), (value) => isJson(value) && Array.isArray(JSON.parse(value)));
