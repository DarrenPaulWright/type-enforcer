import isDate from '../../checks/isDate';
import enforcer from './enforcer';

/**
 * If the first value is a [date]{@link https://lodash.com/docs/#isDate} then return that, otherwise return the alt value.
 *
 * @function enforce.date
 *
 * @arg {*} value
 * @arg {Date} alt
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Date}
 */
export default enforcer(isDate, (value) => new Date(value));
