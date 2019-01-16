import { clamp } from 'lodash';
import isNumber from '../../checks/isNumber';

/**
 * If the first value is a [number]{@link https://lodash.com/docs/#isNumber} (excluding NaN) then return that, otherwise return the alt value.
 *
 * @function enforce.number
 *
 * @arg   {*} value
 * @arg   {Number} alt
 * @arg   {Number} [minValue=-Infinity]
 * @arg   {Number} [maxValue=Infinity]
 *
 * @returns {Number}
 */
export default (value, alt, minValue = -Infinity, maxValue = Infinity) => {
	return isNumber(value) ? clamp(value, minValue, maxValue) : alt;
}
