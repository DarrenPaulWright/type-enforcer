import isSymbol from '../checks/isSymbol';
import enforceObject from './enforceObject';

/**
 * Enforce that a value is a Symbol. Uses [isSymbol](docs/checks.md#isSymbol).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * enforce.symbol(Symbol('label'), Symbol('alt'));
 * // => Symbol(label)
 *
 * enforce.symbol('symbol', Symbol('alt'));
 * // => Symbol('alt')
 *
 * enforce.symbol('label', Symbol('alt'), true);
 * // => Symbol(label)
 * ```
 *
 * @function enforce.symbol
 * @alias enforceSymbol
 *
 * @arg {*} value
 * @arg {Symbol} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Object}
 */
export default enforceObject.extend(isSymbol, (value) => Symbol(value + ''));
