import isPoint from '../../checks/types/isPoint';
import Point from '../../types/Point';
import { coercibleEnforcer } from './enforcer';

/**
 * Enforce that a value is a [Point](docs/Point.md). Uses [isPoint](docs/checks.md#isPoint).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * enforce.point(new Point(1, 2), new Point());
 * // => point 1,2
 *
 * enforce.point('1,2', new Point());
 * // => point 0,0
 *
 * enforce.point('1,2', new Point(), true);
 * // => point 1,2
 * ```
 *
 * @function enforce.point
 * @alias enforcePoint
 *
 * @arg {*} value
 * @arg {Point} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Point}
 */
export default coercibleEnforcer(isPoint, (value) => new Point(value));
