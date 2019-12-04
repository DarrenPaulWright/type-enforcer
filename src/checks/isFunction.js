/**
 * Check if a value is a function
 *
 * @example
 * ``` javascript
 * import { isFunction } from 'type-enforcer';
 *
 * isFunction(() => {});
 * // => true
 * ```
 *
 * @function is.function
 * @alias isFunction
 *
 * @arg {*} value
 *
 * @returns {Boolean}
 */
export default (value) => typeof value === 'function';
