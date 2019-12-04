import enforceArray from '../enforcer/enforceArray';
import isObject from './isObject';
import { isCoercableToWeakMap } from './isWeakMap';

/**
 * Check if a value is a Map
 *
 * @example
 * ``` javascript
 * import { isMap } from 'type-enforcer';
 *
 * isMap(new Map());
 * // => true
 *
 * isMap(new Date());
 * // => false
 *
 * isMap({'a': 12}, new Map(), true);
 * // => Map with key 'a' set to 12
 * ```
 *
 * @function is.map
 * @alias isMap
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a Map. Objects or Strings that can be coerced into Objects can be coerced into Maps, as well as anything that can be coerced into a WeakMap
 *
 * @returns {Boolean}
 */
export default (value, coerce) => {
	return value instanceof Map || (coerce === true && (isObject(value, true) || isCoercableToWeakMap(enforceArray(value, 0, true))));
};
