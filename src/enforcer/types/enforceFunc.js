/**
 * If the first value is a function then return that, otherwise return the alt value.
 *
 * @function enforce.func
 *
 * @arg   {Function} value
 * @arg   {Function} alt
 *
 * @returns {Function}
 */
export default (value, alt) => typeof value === 'function' ? value : alt;
