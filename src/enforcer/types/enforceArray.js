import isArray from '../../checks/isArray';

/**
 * If the first value is an [array]{@link https://lodash.com/docs/#isArray}, then return that, otherwise return the alt value.
 *
 * @function enforce.array
 *
 * @arg   {*} value
 * @arg   {Array} alt
 *
 * @returns {Array}
 */
export default (value, alt) => isArray(value) ? value : alt;
