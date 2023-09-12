import { forOwnReduce } from 'object-agent';
import isMap from '../checks/isMap.js';
import enforceObject from './enforceObject.js';

/**
 * Enforce that a value is a Map. Uses [isMap](docs/checks.md#isMap).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * const a = new Map();
 * const b = new Map();
 *
 * enforce.map(a, b);
 * // => a
 *
 * enforce.map('map', b);
 * // => b
 * ```
 *
 * @function enforce.map
 * @alias enforceMap
 *
 * @param {unknown} value
 * @param {Map} alt - Returned if the value is not the correct type
 * @param {boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {object}
 */
export default enforceObject.extend(isMap, (value) => {
	return forOwnReduce(enforceObject(value, 0, true), (result, innerValue, key) => {
		return result.set(key, innerValue);
	}, new Map());
});
