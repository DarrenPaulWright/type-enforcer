import { isPlainObject } from 'lodash';

/**
 * Check if a value is a [plain object]{@link https://lodash.com/docs/#isPlainObject}
 *
 * @example
 * ``` javascript
 * import { isObject } from 'type-enforcer';
 *
 * isObject({});
 * // => true
 * ```
 *
 * @function isObject
 *
 * @arg {*} value
 *
 * @returns {Boolean}
 */
export default (value) => isPlainObject(value);
