import isInteger from '../../checks/isInteger';
import enforcer from './enforcer';

/**
 * Enforce that a value is an integer. Uses [isInteger](docs/checks.md#isInteger).
 *
 * @function enforce.integer
 *
 * @arg {*} value
 * @arg {int} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 * @arg {int} [minValue]
 * @arg {int} [maxValue]
 *
 * @returns {int}
 */
export default enforcer(isInteger, Number, true);
