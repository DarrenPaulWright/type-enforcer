/**
 * Casts a value to an array.
 *
 * @example
 * ``` javascript
 * import { castArray } from 'type-enforcer';
 *
 * // Arrays are returned without modification
 * castArray(['string']);
 * // => ['string']
 *
 * // Undefined becomes an empty array
 * castArray();
 * // => []
 *
 * // Array-like objects are converted to arrays
 * function a() {
 *     castArray(arguments);
 * }
 * a('b', 'c', 'd');
 * // => ['b', 'c', 'd']
 *
 * // All other values are inserted into an array and that array is returned
 * castArray('string');
 * // => ['string']
 * ```
 *
 * @function castArray
 *
 * @arg {*} value
 *
 * @returns {Array}
 */
export default (value) => Array.isArray(value) ? value : (value === undefined) ? [] : (value !== null && typeof value === 'object' && typeof value.length === 'number') ? Array.prototype.slice.call(value) : [value];
