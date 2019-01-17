import isInt from '../../checks/isInt';
import enforcer from './enforcer';

/**
 * If the first value is an [integer]{@link https://lodash.com/docs/#isInteger} then return that, otherwise return the alt value.
 *
 * @function enforce.int
 *
 * @arg {*} value
 * @arg {int} alt
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 * @arg {int} [minValue]
 * @arg {int} [maxValue]
 *
 * @returns {int}
 */
export default enforcer(isInt, Number, true);
