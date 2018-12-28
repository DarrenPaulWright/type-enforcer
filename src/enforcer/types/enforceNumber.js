import { clamp, isInteger, isNumber } from 'lodash';

/**
 * If the first value is a number then return that, otherwise return the second value.
 *
 * @function enforce.number
 *
 * @param   {Number} setterValue
 * @param   {Number} defaultValue
 * @param   {Number} [minValue]
 * @param   {Number} [maxValue]
 *
 * @returns {Number}
 */
export default (setterValue, defaultValue, minValue = -Infinity, maxValue = Infinity) => {
	return (!isNaN(setterValue) && isNumber(setterValue)) ? clamp(setterValue, minValue, maxValue) : defaultValue;
}
