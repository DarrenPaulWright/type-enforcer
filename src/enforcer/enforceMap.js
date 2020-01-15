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
 * @arg {*} value
 * @arg {Map} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Object}
 */
export default enforceObject.extend(isMap, (value) => {
	return forOwnReduce(enforceObject(value, 0, true), (result, value, key) => {
		return result.set(key, value);
	}, new Map());
});
