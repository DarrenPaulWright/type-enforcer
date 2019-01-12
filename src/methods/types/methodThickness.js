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
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: enforceThickness,
	compare: compareCustomType(Thickness)
});
