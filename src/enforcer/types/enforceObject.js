import { isPlainObject } from 'lodash';

/**
 * If the first value is a plain object then return that, otherwise return the alt value.
 *
 * @function enforce.object
 *
 * @arg   {Object} value
 * @arg   {Object} alt
 *
 * @returns {Object}
 */
export default (value, alt) => isPlainObject(value) ? value : alt;
