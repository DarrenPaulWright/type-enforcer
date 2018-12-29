import { isString } from 'lodash';

/**
 * If the first value is a string then return that, otherwise return the alt value.
 *
 * @function enforce.string
 *
 * @arg   {String} value
 * @arg   {String} alt
 *
 * @returns {String}
 */
export default (value, alt) => isString(value) ? value : alt;
