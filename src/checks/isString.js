import { isString } from 'lodash';

/**
 * Check if a value is a [string]{@link https://lodash.com/docs/#isString}
 *
 * @example
 * ``` javascript
 * import { isString } from 'type-enforcer';
 *
 * isString('type');
 * // => true
 * ```
 *
 * @function isString
 *
 * @arg {*} value
 *
 * @returns {Boolean}
 */
export default (value) => isString(value);
