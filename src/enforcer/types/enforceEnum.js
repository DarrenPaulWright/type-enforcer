/**
 * Enforce that a value exists in the provided [Enum](docs/Enum.md)
 *
 * @example
 * ``` javascript
 * import { enforce, Enum } from 'type-enforcer';
 *
 * const values = new Enum({
 *     a: 'item a',
 *     b: 'item b'
 * });
 *
 * enforce.enum(values.a, values, values.b);
 * // => 'item a'
 *
 * enforce.enum(values.c, values, values.b);
 * // => 'item b'
 * ```
 *
 * @function enforce.enum
 *
 * @arg {*} value
 * @arg {Enum} enumerable
 * @arg {String} alt - Returned if the value is not the correct type
 *
 * @returns {String}
 */
export default (value, enumerable, alt) => (enumerable && enumerable.has(value)) ? value : alt;
