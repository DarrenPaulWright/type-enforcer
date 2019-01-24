import isFunction from '../../checks/isFunction';
import enforcer from './enforcer';

/**
 * Enforce that a value is a function. Uses [isFunction](docs/checks.md#isFunction).
 *
 * @function enforce.function
 *
 * @arg {*} value
 * @arg {Function} alt - Returned if the value is not the correct type
 *
 * @returns {Function}
 */
export default enforcer(isFunction);
