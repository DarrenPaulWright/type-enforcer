import { isArray } from 'lodash';

/**
 * Check if a value is an [array]{@link https://lodash.com/docs/#isArray}
 *
 * @example
 * ``` javascript
 * import { isArray } from 'type-enforcer';
 *
 * isArray([]);
 * // => true
 * ```
 *
 * @function isArray
 *
 * @arg {*} value
 *
 * @returns {Boolean}
 */
export default (value) => isArray(value);
