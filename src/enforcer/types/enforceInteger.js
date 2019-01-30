import isInteger from '../../checks/types/isInteger';
import enforcer from './enforcer';

/**
 * Enforce that a value is an integer. Uses [isInteger](docs/checks.md#isInteger).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * enforce.integer(42, 12);
 * // => 42
 *
 * enforce.integer('42', 12);
 * // => 12
 *
 * enforce.integer('42', 12, true);
 * // => 42
 * ```
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
