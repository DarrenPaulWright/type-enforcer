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
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: enforceCssSize,
	compare: compareCustomType(CssSize)
});
