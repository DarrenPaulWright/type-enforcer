import isArray from './isArray';

export const isCoercableToWeakMap = (value) => {
	return isArray(value) && value.every((item) => {
		return (isArray(item) && item.length === 2);
	});
};

/**
 * Check if a value is a WeakMap
 *
 * @example
 * ``` javascript
 * import { isWeakMap } from 'type-enforcer';
 *
 * const a = {};
 *
 * isWeakMap(new WeakMap());
 * // => true
 *
 * isWeakMap(new Date());
 * // => false
 *
 * isWeakMap([[a, 12]], true);
 * // => true
 * ```
 *
 * @function is.weakMap
 * @alias isWeakMap
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a WeakMap. Must be an array of arrays, each inner array must be length 2, and the first item of each inner array must be an object to be coerced into a WeakMap.
 *
 * @returns {Boolean}
 */
export default (value, coerce) => {
	return value instanceof WeakMap || (coerce === true && isCoercableToWeakMap(value));
};
