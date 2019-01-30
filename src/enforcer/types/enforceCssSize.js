import isCssSize from '../../checks/types/isCssSize';
import CssSize from '../../types/CssSize';
import enforcer from './enforcer';

/**
 * Enforce that a value is a [CssSize](docs/CssSize.md). Uses [isCssSize](docs/checks.md#isCssSize).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * enforce.cssSize(new CssSize('14px'), new CssSize());
 * // => cssSize of 14px
 *
 * enforce.cssSize('14px', new CssSize());
 * // => cssSize of 0
 *
 * enforce.cssSize('14px', new CssSize(), true);
 * // => cssSize of 14px
 * ```
 *
 * @function enforce.cssSize
 *
 * @arg {*} value
 * @arg {CssSize} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {CssSize}
 */
export default enforcer(isCssSize, (value) => new CssSize(value));
