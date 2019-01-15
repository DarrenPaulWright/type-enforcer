import { isNumber } from 'lodash';

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
 * @arg   {*} value
 *
 * @returns {Boolean}
 */
export default (value) => isNumber(value);
