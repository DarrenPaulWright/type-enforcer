import isThickness from '../../checks/isThickness';
import Thickness from '../../types/Thickness';
import enforcer from './enforcer';

/**
 * Enforce that a value is a [Thickness](docs/Thickness.md). Uses [isThickness](docs/checks.md#isThickness).
 *
 * @function enforce.thickness
 *
 * @arg {*} value
 * @arg {Thickness} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Thickness}
 */
export default enforcer(isThickness, (value) => new Thickness(value));
