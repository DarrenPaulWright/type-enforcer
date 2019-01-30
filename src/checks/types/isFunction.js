import { isFunction } from 'lodash';

/**
 * Check if a value is a [function]{@link https://lodash.com/docs/#isFunction}
 *
 * @example
 * ``` javascript
 * import { isFunction } from 'type-enforcer';
 *
 * isFunction(() => {});
 * // => true
 * ```
 *
 * @function isFunction
 *
 * @arg {*} value
 *
 * @returns {Boolean}
 */
export default (value) => isFunction(value);
