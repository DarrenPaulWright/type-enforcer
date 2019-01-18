import isString from '../../checks/isString';
import enforcer from './enforcer';

/**
 * Enforce that a value is a string. Uses [isString](docs/checks.md#isString).
 *
 * @function enforce.string
 *
 * @arg {*} value
 * @arg {String} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {String}
 */
export default enforcer(isString, (value) => value + '');
