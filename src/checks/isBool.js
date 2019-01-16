import { isBoolean } from 'lodash';

/**
 * Check if a value is a [boolean]{@link https://lodash.com/docs/#isBoolean}
 *
 * @example
 * ``` javascript
 * import { isBool } from 'type-enforcer';
 *
 * isBool(false);
 * // => true
 * ```
 *
 * @function isBool
 *
 * @arg {*} value
 *
 * @returns {Boolean}
 */
export default (value) => isBoolean(value);
