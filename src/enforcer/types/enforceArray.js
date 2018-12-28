/**
 * If the first value is an array, then return that, otherwise return the second value.
 *
 * @function enforce.array
 *
 * @param   {Array} setterValue
 * @param   {Array} defaultValue
 *
 * @returns {Array}
 */
export default (setterValue, defaultValue) => Array.isArray(setterValue) ? setterValue : defaultValue;
