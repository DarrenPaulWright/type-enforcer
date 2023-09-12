import isArray from './isArray.js';

/**
 * Check if a value is a Set.
 *
 * @example
 * ``` javascript
 * import { isSet } from 'type-enforcer';
 *
 * isSet(new Set());
 * // => true
 *
 * isSet(new Date());
 * // => false
 *
 * isSet([1, 2], new Set(), true);
 * // => Set with key 1 and 2
 * ```
 *
 * @function is.set
 * @alias isSet
 *
 * @param {unknown} value - The value to check.
 * @param {boolean} [coerce=false] - If true then see if the value can be coerced into a Set. Arrays or Strings that can be coerced into Arrays can be coerced into Sets.
 *
 * @returns {boolean}
 */
export default (value, coerce) => {
	return value instanceof Set || (coerce === true && isArray(value, true));
};
