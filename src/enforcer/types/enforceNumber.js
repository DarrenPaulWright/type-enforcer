import { clamp, isInteger, isNumber } from 'lodash';

/**
 * If the first value is a number then return that, otherwise return the alt value.
 *
 * @function enforce.number
 *
 * @arg   {Number} value
 * @arg   {Number} alt
 * @arg   {Number} [minValue]
 * @arg   {Number} [maxValue]
 *
 * @returns {Number}
 */
export default (value, alt, minValue = -Infinity, maxValue = Infinity) => {
	return (!isNaN(value) && isNumber(value)) ? clamp(value, minValue, maxValue) : alt;
}
