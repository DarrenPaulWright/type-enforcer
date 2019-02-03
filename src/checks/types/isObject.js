import { buildCheckWithCoerce } from './checks';
import isJson from './isJson';

// const isPlainObject = (item) => item && typeof item === 'object' && item instanceof Object;
// const isPlainObject = (item) => isInstanceOf(item, Object);
const isPlainObject = (item) => item && typeof item === 'object' && toString.call(item) === '[object Object]' && item.constructor === Object;

/**
 * Check if a value is a plain object
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
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into an Object
 *
 * @returns {Boolean}
 */
export default buildCheckWithCoerce(isPlainObject, (value) => isJson(value) && isPlainObject(JSON.parse(value)));
