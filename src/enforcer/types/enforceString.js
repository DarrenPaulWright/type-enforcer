import { isString } from 'lodash';

/**
 * If the first value is a string then return that, otherwise return the second value.
 *
 * @function enforce.string
 *
 * @param   {String} setterValue
 * @param   {String} defaultValue
 *
 * @returns {String}
 */
export default (setterValue, defaultValue) => isString(setterValue) ? setterValue : defaultValue;
