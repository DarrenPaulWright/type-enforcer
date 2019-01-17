import isBoolean from '../../checks/isBool';
import enforcer from './enforcer';

/**
 * If the first value is a [boolean]{@link https://lodash.com/docs/#isBoolean}, then return that, otherwise return the
 * alt value.
 *
 * @function enforce.bool
 *
 * @arg {*} value
 * @arg {Boolean} alt
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Boolean}
 */
export default enforcer(isBoolean, (value) => !!value);
