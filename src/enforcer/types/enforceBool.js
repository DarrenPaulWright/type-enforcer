import isBoolean from '../../checks/isBool';

/**
 * If the first value is a [boolean]{@link https://lodash.com/docs/#isBoolean}, then return that, otherwise return the alt value.
 *
 * @function enforce.bool
 *
 * @arg   {*} value
 * @arg   {Boolean} alt
 *
 * @returns {Boolean}
 */
export default (value, alt) => isBoolean(value) ? value : alt;
