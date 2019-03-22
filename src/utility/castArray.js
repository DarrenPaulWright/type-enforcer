import isArray from '../checks/types/isArray';
import isNumber from '../checks/types/isNumber';

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
export default (value) => {
	if (isArray(value)) {
		return value;
	}
	if (value === undefined) {
		return [];
	}
	if (typeof value === 'object' && value !== null && isNumber(value.length)) {
		return Array.prototype.slice.call(value);
	}
	return [value];
}
