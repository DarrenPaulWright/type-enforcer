import isArray from './isArray.js';

/**
 * Check if a value is a WeakSet.
 *
 * @example
 * ``` javascript
 * import { isWeakSet } from 'type-enforcer';
 *
 * const a = new Map();
 *
 * isWeakSet(new WeakSet());
 * // => true
 *
 * isWeakSet(new Date());
 * // => false
 *
 * isWeakSet([a], new WeakSet(), true);
 * // => WeakSet with a
 * ```
 *
 * @function is.weakSet
 * @alias isWeakSet
 *
 * @param {*} value - The value to check.
 * @param {boolean} [coerce=false] - If true then see if the value can be coerced into a WeakSet. Arrays of objects can be coerced into WeakSets.
 *
 * @returns {boolean}
 */
export default (value, coerce) => {
	return value instanceof WeakSet || (coerce === true && isArray(value));
};
