/**
 * If the first value is a boolean, then return that, otherwise return the alt value.
 *
 * @function enforce.bool
 *
 * @arg   {Boolean} value
 * @arg   {Boolean} alt
 *
 * @returns {Boolean}
 */
export default (value, alt) => (value === false || value === true) ? value : alt;
