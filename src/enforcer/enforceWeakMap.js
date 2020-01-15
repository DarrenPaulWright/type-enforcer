import isWeakMap from '../checks/isWeakMap.js';
import enforceObject from './enforceObject.js';

/**
 * Enforce that a value is a WeakMap. Uses [isWeakMap](docs/checks.md#isWeakMap).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * const a = new WeakMap();
 * const b = new WeakMap();
 *
 * enforce.weakMap(a, b);
 * // => a
 *
 * enforce.weakMap('weakMap', b);
 * // => b
 *
 * enforce.weakMap([[a, 12]], new WeakMap(), true);
 * // => WeakMap with key a set to 12
 * ```
 *
 * @function enforce.weakMap
 * @alias enforceWeakMap
 *
 * @arg {*} value
 * @arg {WeakMap} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Object}
 */
export default enforceObject.extend(isWeakMap, (value) => {
	return value.reduce((result, item) => {
		return result.set(item[0], value[1]);
	}, new WeakMap());
});
