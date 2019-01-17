import isPoint from '../../checks/isPoint';
import Point from '../../types/Point';
import enforcer from './enforcer';

/**
 * If the first value is a point then return that, otherwise return the alt value.
 *
 * @function enforce.point
 *
 * @arg {*} value
 * @arg {Point} alt
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Point}
 */
export default enforcer(isPoint, (value) => new Point(value));
