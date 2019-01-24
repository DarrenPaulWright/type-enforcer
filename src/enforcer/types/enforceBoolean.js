import isBoolean from '../../checks/isBoolean';
import enforcer from './enforcer';

/**
 * Enforce that a value is a boolean. Uses [isBoolean](docs/checks.md#isBoolean).
 *
 * @function enforce.boolean
 *
 * @arg {*} value
 * @arg {Boolean} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Boolean}
 */
export default enforcer(isBoolean, (value) => !!value);
