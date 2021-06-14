import isArray from '../checks/isArray.js';
import enforceObject from './enforceObject.js';

/**
 * Enforce that a value is an array. Uses [isArray](docs/checks.md#isArray).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * enforce.array(['a string'], ['alt']);
 * // => ['a string']
 *
 * enforce.array('[]', ['alt']);
 * // => ['alt']
 *
 * enforce.array('[]', ['alt'], true);
 * // => []
 * ```
 *
 * @function enforce.array
 * @alias enforceArray
 *
 * @param {*} value
 * @param {Array} alt - Returned if the value is not the correct type
 * @param {boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Array}
 */
export default enforceObject.extend(isArray, JSON.parse);
