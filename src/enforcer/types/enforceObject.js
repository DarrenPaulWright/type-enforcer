import { isPlainObject } from 'lodash';

/**
 * If the first value is a plain object then return that, otherwise return the second value.
 *
 * @function enforce.object
 *
 * @param   {Object} setterValue
 * @param   {Object} defaultValue
 *
 * @returns {Object}
 */
export default (setterValue, defaultValue) => isPlainObject(setterValue) ? setterValue : defaultValue;
