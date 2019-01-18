/**
 * Enforce that a value exists in the provided [Enum](docs/Enum.md)
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
