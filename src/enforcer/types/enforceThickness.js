import Thickness from '../../types/Thickness';
import customTypeEnforcer from './customTypeEnforcer';

/**
 * If the first value is a thickness then return that, otherwise return the alt value.
 *
 * @function enforce.thickness
 *
 * @arg {*} value
 * @arg {Thickness} alt
 * @arg {Object}  [options]
 * @arg {Boolean} [options.coerce=true] - If false, then will only accept a specific instance
 *
 * @returns {Thickness}
 */
export default customTypeEnforcer(Thickness);
