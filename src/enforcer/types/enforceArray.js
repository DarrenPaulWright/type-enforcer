/**
 * If the first value is an array, then return that, otherwise return the alt value.
 *
 * @function enforce.array
 *
 * @arg   {Array} value
 * @arg   {Array} alt
 *
 * @returns {Array}
 */
export default (value, alt) => Array.isArray(value) ? value : alt;
