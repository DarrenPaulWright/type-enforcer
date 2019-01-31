import isCssSize from '../../checks/types/isCssSize';
import enforceCssSize from '../../enforcer/types/enforceCssSize';
import CssSize from '../../types/CssSize';
import { buildMethod, compareCustomType, mapEnforcerDefaultCoerceTrue } from './methodAny';

/**
 * Builds a chainable method for getting/setting a [CssSize](docs/CssSize.md)
 *
 * @function method.cssSize
 * @extends method.any
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.cssSize]
 * @arg {Function} [options.compare=CssSize.isSame]
 * @arg {Boolean} [options.coerce=true] - If false then don't coerce the value
 *
 * @returns {Function}
 */
export default buildMethod({
	enforce: mapEnforcerDefaultCoerceTrue(enforceCssSize),
	compare: compareCustomType(CssSize, isCssSize)
});
