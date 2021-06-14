import isWeakSet from '../checks/isWeakSet.js';
import enforceObject from './enforceObject.js';

/**
 * Enforce that a value is a WeakSet. Uses [isWeakSet](docs/checks.md#isWeakSet).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * const a = new WeakSet();
 * const b = new WeakSet();
 *
 * enforce.weakSet(a, b);
 * // => a
 *
 * enforce.weakSet('weakSet', b);
 * // => b
 *
 * enforce.weakSet([new Map()], b, true);
 * // => WeakSet with a Map in it
 * ```
 *
 * @function enforce.weakSet
 * @alias enforceWeakSet
 *
 * @param {*} value
 * @param {WeakSet} alt - Returned if the value is not the correct type
 * @param {boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {object}
 */
export default enforceObject.extend(isWeakSet, (value) => new WeakSet(value));
