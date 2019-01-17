import isCssSize from '../../checks/isCssSize';
import enforceBool from '../../enforcer/types/enforceBool';
import enforceCssSize from '../../enforcer/types/enforceCssSize';
import CssSize from '../../types/CssSize';
import { buildMethod, compareCustomType } from './methodAny';

/**
 * Builds a method for getting/setting a CssSize instance
 *
 * @function method.cssSize
 * @extends method.any
 *
 * @arg [options=Same as method.any except:]
 * @arg [options.enforce=enforce.cssSize]
 * @arg [options.compare=CssSize.isSame]
 * @arg [options.coerce=true] - If false then use strict equality
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: (newValue, oldValue, options) => {
		return enforceCssSize(newValue, oldValue, enforceBool(options.coerce, true));
	},
	compare: compareCustomType(CssSize, isCssSize)
});
