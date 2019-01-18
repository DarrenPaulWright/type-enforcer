import isDate from '../../checks/isDate';
import enforcer from './enforcer';

/**
 * Enforce that a value is a date. Uses [isDate](docs/checks.md#isDate).
 *
 * @function enforce.date
 *
 * @arg {*} value
 * @arg {Date} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Date}
 */
export default enforcer(isDate, (value) => new Date(value));
