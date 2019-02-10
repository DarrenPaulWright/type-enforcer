import isArray from '../checks/types/isArray';

/**
 * Convert non-arrays to arrays.
 *
 * @example
 * ``` javascript
 * import { castArray } from 'type-enforcer';
 *
 * castArray('string');
 * // => ['string']
 *
 * isArray(['string']);
 * // => ['string']
 * ```
 *
 * @function castArray
 *
 * @arg {*} value
 *
 * @returns {Array}
 */
export default (value) => isArray(value) ? value : [value];
