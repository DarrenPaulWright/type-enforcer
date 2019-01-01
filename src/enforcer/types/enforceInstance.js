/**
 * If the first value is an instance of constructor then return that, otherwise return the alt value.
 *
 * @function enforce.instance
 *
 * @arg   {Object} value
 * @arg   {Function} constructor
 * @arg   {Object} alt
 *
 * @returns {Object}
 */
export default (value, constructor, alt) => value instanceof constructor ? value : alt;
