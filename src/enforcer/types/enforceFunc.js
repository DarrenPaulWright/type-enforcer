import isFunction from '../../checks/isFunc';
import enforcer from './enforcer';

/**
 * If the first value is a [function]{@link https://lodash.com/docs/#isFunction} then return that, otherwise return the alt value.
 *
 * @function enforce.func
 *
 * @arg {*} value
 * @arg {Function} alt
 *
 * @returns {Function}
 */
export default enforcer(isFunction);
