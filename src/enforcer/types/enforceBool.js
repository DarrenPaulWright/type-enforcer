/**
 * If the first value is a boolean, then return that, otherwise return the second value.
 *
 * @function enforce.bool
 *
 * @param   {Boolean} setterValue
 * @param   {Boolean} defaultValue
 *
 * @returns {Boolean}
 */
export default (setterValue, defaultValue) => (setterValue === false || setterValue === true) ? setterValue : defaultValue;
