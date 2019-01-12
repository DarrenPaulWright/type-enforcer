import Point from '../../types/Point';
import customTypeEnforcer from './customTypeEnforcer';

/**
 * If the first value is a point then return that, otherwise return the alt value.
 *
 * @function enforce.point
 *
 * @arg {*} value
 * @arg {Point} alt
 * @arg {Object}  [options]
 * @arg {Boolean} [options.coerce=true] - If false, then will only accept a specific instance
 *
 * @returns {Point}
 */
export default customTypeEnforcer(Point);
