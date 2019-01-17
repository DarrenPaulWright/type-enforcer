import isPoint from '../../checks/isPoint';
import Point from '../../types/Point';
import { customTypeEnforcer } from './customTypeEnforcer';

/**
 * If the first value is a point then return that, otherwise return the alt value.
 *
 * @function enforce.point
 *
 * @arg {*} value
 * @arg {Point} alt
 * @arg {Boolean} [coerce=false] - If true then allow values that can be coerced into a Point
 *
 * @returns {Point}
 */
export default customTypeEnforcer(Point, isPoint);
