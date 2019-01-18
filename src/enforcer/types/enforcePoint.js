import isPoint from '../../checks/isPoint';
import Point from '../../types/Point';
import enforcer from './enforcer';

/**
 * Enforce that a value is a [Point](docs/Point.md). Uses [isPoint](docs/checks.md#isPoint).
 *
 * @function enforce.point
 *
 * @arg {*} value
 * @arg {Point} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Point}
 */
export default enforcer(isPoint, (value) => new Point(value));
