/**
 * If the first value is exists in the provided types then return that, otherwise return the second value.
 *
 * @function enforce.enum
 *
 * @param   {String} setterValue
 * @param   {Enum} enumerable
 * @param   {String} defaultValue
 *
 * @returns {String}
 */
export default (setterValue, enumerable, defaultValue) => (enumerable && enumerable.has(setterValue)) ? setterValue : defaultValue;
