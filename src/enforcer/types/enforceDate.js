import isDate from '../../checks/isDate';

/**
 * If the first value is a [date]{@link https://lodash.com/docs/#isDate} then return that, otherwise return the alt value.
 *
 * @function enforce.date
 *
 * @arg {*} value
 * @arg {Date} alt
 *
 * @returns {Date}
 */
export default (value, alt) => isDate(value) ? value : alt;
