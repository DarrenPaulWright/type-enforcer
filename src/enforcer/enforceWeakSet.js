import isWeakSet from '../checks/isWeakSet';
import enforceObject from './enforceObject';

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
 * @arg {*} value
 * @arg {WeakSet} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Object}
 */
export default enforceObject.extend(isWeakSet, (value) => new WeakSet(value));