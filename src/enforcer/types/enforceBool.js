import isBoolean from '../../checks/isBool';
import enforcer from './enforcer';

/**
 * Enforce that a value is a boolean. Uses [isBool](docs/checks.md#isBool).
 *
 * @function enforce.bool
 *
 * @arg {*} value
 * @arg {Boolean} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Boolean}
 */
export default enforcer(isBoolean, (value) => !!value);
