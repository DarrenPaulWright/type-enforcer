import isThickness from '../../checks/isThickness';
import enforceBool from '../../enforcer/types/enforceBool';
import enforceThickness from '../../enforcer/types/enforceThickness';
import Thickness from '../../types/Thickness';
import { buildMethod, compareCustomType } from './methodAny';

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
	enforce: (newValue, oldValue, options) => {
		return enforceThickness(newValue, oldValue, enforceBool(options.coerce, true));
	},
	compare: compareCustomType(Thickness, isThickness)
});
