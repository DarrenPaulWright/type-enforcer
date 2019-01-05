import { clamp, isInteger } from 'lodash';

/**
 * If the first value is an [integer]{@link https://lodash.com/docs/#isInteger} then return that, otherwise return the alt value.
 *
 * @function enforce.int
 *
 * @arg   {*} value
 * @arg   {int} alt
 * @arg   {int} [minValue]
 * @arg   {int} [maxValue]
 *
 * @returns {int}
 */
export default (value, alt, minValue = -Infinity, maxValue = Infinity) => {
	return isInteger(value) ? clamp(value, minValue, maxValue) : alt;
};
