import { isNumber } from 'lodash';

/**
 * Check if a value is a [number]{@link https://lodash.com/docs/#isNumber}
 *
 * @example
 * ``` javascript
 * import { isNumber } from 'type-enforcer';
 *
 * isNumber(3.14159);
 * // => true
 * ```
 *
 * @function isNumber
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if this value can be parsed as a number
 *
 * @returns {Boolean}
 */
export default (value, coerce) => {
	if (coerce === true) {
		return !isNaN(value);
	}
	return isNumber(value);
};
