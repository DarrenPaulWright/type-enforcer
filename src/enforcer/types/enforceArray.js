import isArray from '../../checks/isArray';
import enforcer from './enforcer';

/**
 * If the first value is an [array]{@link https://lodash.com/docs/#isArray}, then return that, otherwise return the alt value.
 *
 * @function enforce.array
 *
 * @arg {*} value
 * @arg {Array} alt
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Array}
 */
export default enforcer(isArray, Array);
