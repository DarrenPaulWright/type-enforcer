export default isInteger;

/**
 * Check if a value is a finite integer.
 *
 * @example
 * ``` javascript
 * import { isInteger } from 'type-enforcer';
 *
 * isInteger(42);
 * // => true
 *
 * isInteger('42');
 * // => false
 *
 * isInteger('42', true);
 * // => true
 *
 * isInteger('42.5', true);
 * // => false
 * ```
 *
 * @function is.integer
 * @alias isInteger
 *
 * @param {unknown} value - The value to check.
 * @param {boolean} [coerce=false] - If true then see if the value can be coerced into an Integer.
 *
 * @returns {boolean}
 */
declare function isInteger(value: unknown): value is number;
declare function isInteger(value: unknown, coerce?: boolean): boolean;
