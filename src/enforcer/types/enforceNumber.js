import isNumber from '../../checks/isNumber';
import enforcer from './enforcer';

/**
 * If the first value is a [number]{@link https://lodash.com/docs/#isNumber} (excluding NaN) then return that, otherwise return the alt value.
 *
 * @function enforce.number
 *
 * @arg {*} value
 * @arg {Number} alt
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 * @arg {Number} [minValue=-Infinity]
 * @arg {Number} [maxValue=Infinity]
 *
 * @returns {Number}
 */
export default enforcer(isNumber, Number, true);
