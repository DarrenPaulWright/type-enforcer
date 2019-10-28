import isArray from '../checks/isArray';
import isNumber from '../checks/isNumber';

const slice = [].slice;

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
	if (value !== null && typeof value === 'object' && isNumber(value.length)) {
		return slice.call(value);
	}
	return [value];
}
