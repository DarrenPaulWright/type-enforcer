import isArray from '../checks/isArray';
import enforceObject from './enforceObject';

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
 * @arg {*} value
 * @arg {Array} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Array}
 */
export default enforceObject.extend(isArray, JSON.parse);
