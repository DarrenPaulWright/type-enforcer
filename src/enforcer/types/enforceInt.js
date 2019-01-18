import isInt from '../../checks/isInt';
import enforcer from './enforcer';

/**
 * Enforce that a value is an integer. Uses [isInt](docs/checks.md#isInt).
 *
 * @function enforce.int
 *
 * @arg {*} value
 * @arg {int} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 * @arg {int} [minValue]
 * @arg {int} [maxValue]
 *
 * @returns {int}
 */
export default enforcer(isInt, Number, true);
