import isArray from './isArray';

/**
 * Check if a value is a WeakSet
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
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a WeakSet. Arrays of objects can be coerced into WeakSets.
 *
 * @returns {Boolean}
 */
export default (value, coerce) => {
	return value instanceof WeakSet || (coerce === true && isArray(value));
};
