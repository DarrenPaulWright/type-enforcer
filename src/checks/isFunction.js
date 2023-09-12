/**
 * Check if a value is a function.
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
 * @param {unknown} value - The value to check.
 *
 * @returns {boolean}
 */
export default (value) => typeof value === 'function';
