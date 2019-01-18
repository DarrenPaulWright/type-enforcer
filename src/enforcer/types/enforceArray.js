import isArray from '../../checks/isArray';
import enforcer from './enforcer';

/**
 * Enforce that a value is an array. Uses [isArray](docs/checks.md#isArray).
 *
 * @function enforce.array
 *
 * @arg {*} value
 * @arg {Array} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Array}
 */
export default enforcer(isArray, Array);
