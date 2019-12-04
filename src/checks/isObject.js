import isJson from './isJson';

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
 * @function is.object
 * @alias isObject
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into an Object
 *
 * @returns {Boolean}
 */
export default (value, coerce) => {
	return Boolean(value) && (value.constructor === Object || (coerce === true && typeof value === 'string' && value.charAt(0) === '{' && isJson(value)));
};
