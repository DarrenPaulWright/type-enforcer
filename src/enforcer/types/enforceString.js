import isString from '../../checks/isString';

/**
 * If the first value is a [string]{@link https://lodash.com/docs/#isString} then return that, otherwise return the alt value.
 *
 * @function enforce.string
 *
 * @arg   {*} value
 * @arg   {String} alt
 *
 * @returns {String}
 */
export default (value, alt) => isString(value) ? value : alt;
