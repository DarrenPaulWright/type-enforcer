/**
 * If the first value is a function then return that, otherwise return the second value.
 *
 * @function enforce.func
 *
 * @param   {Function} setterValue
 * @param   {Function} defaultValue
 *
 * @returns {Function}
 */
export default (setterValue, defaultValue) => typeof setterValue === 'function' ? setterValue : defaultValue;
