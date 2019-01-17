import isString from '../../checks/isString';
import enforcer from './enforcer';

/**
 * If the first value is a [string]{@link https://lodash.com/docs/#isString} then return that, otherwise return the alt value.
 *
 * @function enforce.string
 *
 * @arg {*} value
 * @arg {String} alt
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {String}
 */
export default enforcer(isString, (value) => value + '');
