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
 *
 * isObject('{}');
 * // => false
 *
 * isObject('{}', true);
 * // => true
 * ```
 *
 * @function isObject
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if this value can be coerced into an Object
 *
 * @returns {Boolean}
 */
export default buildCheckWithCoerce(isPlainObject, (value) => isJson(value) && isPlainObject(JSON.parse(value)));
