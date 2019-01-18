import isFunction from '../../checks/isFunc';
import enforcer from './enforcer';

/**
 * Enforce that a value is a function. Uses [isFunction](docs/checks.md#isFunction).
 *
 * @function enforce.func
 *
 * @arg {*} value
 * @arg {Function} alt - Returned if the value is not the correct type
 *
 * @returns {Function}
 */
export default enforcer(isFunction);
