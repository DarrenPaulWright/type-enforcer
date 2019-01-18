import isNumber from '../../checks/isNumber';
import enforcer from './enforcer';

/**
 * Enforce that a value is a number (excluding NaN). Uses [isNumber](docs/checks.md#isNumber).
 *
 * @function enforce.number
 *
 * @arg {*} value
 * @arg {Number} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 * @arg {Number} [minValue=-Infinity]
 * @arg {Number} [maxValue=Infinity]
 *
 * @returns {Number}
 */
export default enforcer(isNumber, Number, true);
