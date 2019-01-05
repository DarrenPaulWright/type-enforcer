import { isFunction } from 'lodash';

/**
 * If the first value is a [function]{@link https://lodash.com/docs/#isFunction} then return that, otherwise return the alt value.
 *
 * @function enforce.func
 *
 * @arg   {*} value
 * @arg   {Function} alt
 *
 * @returns {Function}
 */
export default (value, alt) => isFunction(value) ? value : alt;
