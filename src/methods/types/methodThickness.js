import isThickness from '../../checks/isThickness';
import enforceThickness from '../../enforcer/types/enforceThickness';
import Thickness from '../../types/Thickness';
import { buildMethod, compareCustomType, mapEnforcerDefaultCoerceTrue } from './methodAny';

/**
 * Builds a method for getting/setting a thickness instance
 *
 * @function method.thickness
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.enforce=enforce.thickness]
 * @arg [options.compare=Thickness.isSame]
 * @arg [options.coerce=true] - If false then use strict equality
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: mapEnforcerDefaultCoerceTrue(enforceThickness),
	compare: compareCustomType(Thickness, isThickness)
});
