import Point from '../../types/Point';

/**
 * Check if a value is a [Point](docs/Point.md)
 *
 * @example
 * ``` javascript
 * import { isPoint } from 'type-enforcer';
 *
 * isPoint(new Point());
 * // => true
 *
 * isPoint('1,2');
 * // => false
 *
 * isPoint('1,2', true);
 * // => true
 * ```
 *
 * @function is.point
 * @alias isPoint
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a Point
 *
 * @returns {Boolean}
 */
export default (value, coerce) => {
	return (value instanceof Point) || (coerce === true && Point.isValid(value));
};
