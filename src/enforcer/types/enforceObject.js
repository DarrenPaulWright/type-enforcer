import isObject from '../../checks/isObject';
import enforcer from './enforcer';

/**
 * If the first value is a [plain object]{@link https://lodash.com/docs/#isPlainObject} then return that, otherwise return the alt value.
 *
 * @function enforce.object
 *
 * @arg {*} value
 * @arg {Object} alt
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Object}
 */
export default enforcer(isObject, Object);
