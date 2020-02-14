import isFunction from './isFunction.js';

/**
 * Check if a value is a plain object
 *
 * @example
 * ``` javascript
 * import { isPromise } from 'type-enforcer';
 *
 * isPromise(new Promise());
 * // => true
 *
 * isPromise('');
 * // => false
 *
 * isObject(() => {}, true);
 * // => true
 * ```
 *
 * @function is.promise
 * @alias isPromise
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a Promise. Functions can be coerced into Promises.
 *
 * @returns {Boolean}
 */
export default (value, coerce) => {
	return value instanceof Promise || (coerce === true && isFunction(value));
};
