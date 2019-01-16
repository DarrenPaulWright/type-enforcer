import { isPlainObject } from 'lodash';
import { buildCheckWithCoerce } from './checks';
import isJson from './isJson';

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
export default buildCheckWithCoerce(isPlainObject, (value) => isJson(value) && isPlainObject(JSON.parse(value)));
