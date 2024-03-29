import isPromise from '../checks/isPromise.js';
import enforceObject from './enforceObject.js';

/**
 * Enforce that a value is a Promise. Uses [isPromise](docs/checks.md#isPromise).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * const a = new Promise((resolve) => resolve());
 * const b = new Promise((resolve) => resolve());
 *
 * enforce.promise(a, b);
 * // => a
 *
 * enforce.promise('', b);
 * // => b
 * ```
 *
 * @function enforce.promise
 * @alias enforcePromise
 *
 * @param {unknown} value
 * @param {Promise} alt - Returned if the value is not the correct type
 * @param {boolean} [coerce=false] - If true then coerce the value if it's a function. Functions are wrapped in a Promise that resolves with the result of the function.
 *
 * @returns {Promise}
 */
export default enforceObject.extend(isPromise, (value) => new Promise((resolve) => {
	resolve(value());
}));
