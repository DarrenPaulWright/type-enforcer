import isDate from '../checks/isDate';

/**
 * Enforce that a value is a date. Uses [isDate](docs/checks.md#isDate).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * enforce.date(new Date('10/12/1980'), new Date('1/1/2000'));
 * // => date of 10/12/1980
 *
 * enforce.date('10/12/1980', new Date('1/1/2000'));
 * // => date of 1/1/2000
 *
 * enforce.date('10/12/1980', new Date('1/1/2000'), true);
 * // => date of 10/12/1980
 * ```
 *
 * @function enforce.date
 * @alias enforceDate
 *
 * @arg {*} value
 * @arg {Date} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Date}
 */
export default (value, alt, coerce) => {
	if (isDate(value)) {
		return value;
	}

	if (coerce === true && isDate(value, true)) {
		return new Date(value);
	}

	return alt;
};
