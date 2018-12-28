import { clamp, isInteger } from 'lodash';

/**
 * If the first value is an integer then return that, otherwise return the second value.
 *
 * @function enforce.int
 *
 * @param   {int} setterValue
 * @param   {int} defaultValue
 * @param   {int} [minValue]
 * @param   {int} [maxValue]
 *
 * @returns {int}
 */
export default (setterValue, defaultValue, minValue = -Infinity, maxValue = Infinity) => {
	return isInteger(setterValue) ? clamp(setterValue, minValue, maxValue) : defaultValue;
};
