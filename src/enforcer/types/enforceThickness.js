import isThickness from '../../checks/isThickness';
import Thickness from '../../types/Thickness';
import { customTypeEnforcer } from './customTypeEnforcer';

/**
 * If the first value is a thickness then return that, otherwise return the alt value.
 *
 * @function enforce.thickness
 *
 * @arg {*} value
 * @arg {Thickness} alt
 * @arg {Boolean} [coerce=false] - If true then allow values that can be coerced into a Thickness
 *
 * @returns {Thickness}
 */
export default customTypeEnforcer(Thickness, isThickness);
