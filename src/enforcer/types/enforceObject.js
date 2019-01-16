import isObject from '../../checks/isObject';

/**
 * If the first value is a [plain object]{@link https://lodash.com/docs/#isPlainObject} then return that, otherwise return the alt value.
 *
 * @function enforce.object
 *
 * @arg {*} value
 * @arg {Object} alt
 *
 * @returns {Object}
 */
export default (value, alt) => isObject(value) ? value : alt;
