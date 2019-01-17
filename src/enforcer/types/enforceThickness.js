import isThickness from '../../checks/isThickness';
import Thickness from '../../types/Thickness';
import enforcer from './enforcer';

/**
 * If the first value is a thickness then return that, otherwise return the alt value.
 *
 * @function enforce.thickness
 *
 * @arg {*} value
 * @arg {Thickness} alt
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Thickness}
 */
export default enforcer(isThickness, (value) => new Thickness(value));
