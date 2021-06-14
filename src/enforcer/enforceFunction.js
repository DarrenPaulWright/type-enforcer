import isFunction from '../checks/isFunction.js';

/* eslint-disable jsdoc/valid-types */
/**
 * Enforce that a value is a function. Uses [isFunction](docs/checks.md#isFunction).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * const a = () => {};
 * const b = () => {};
 *
 * enforce.function(a, b);
 * // => a
 *
 * enforce.function('', b);
 * // => b
 * ```
 *
 * @function enforce.function
 * @alias enforceFunction
 *
 * @param {*} value - The value to enforce.
 * @param {Function} alt - Returned if the value is not the correct type.
 *
 * @returns {Function}
 */
export default (value, alt) => isFunction(value) ? value : alt;
