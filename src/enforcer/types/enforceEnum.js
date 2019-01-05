/**
 * If the first value exists in the provided enum then return that, otherwise return the alt value.
 *
 * @function enforce.enum
 *
 * @arg   {*} value
 * @arg   {Enum} enumerable
 * @arg   {String} alt
 *
 * @returns {String}
 */
export default (value, enumerable, alt) => (enumerable && enumerable.has(value)) ? value : alt;
