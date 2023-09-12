import isObject from '../checks/isObject.js';

/**
 * @function enforcer
 * @private
 *
 * @template T
 * @param {unknown} value
 * @param {T} alt
 * @param {boolean} [coerce=false]
 *
 * @returns {T}
 */

/**
 * @callback checkFunction
 * @private
 * @param {unknown} value
 * @returns {boolean}
 */

/**
 * @callback coerceFunction
 * @private
 * @param {unknown} value
 * @returns {unknown}
 */

/**
 * @function simpleEnforcer
 * @private
 *
 * @param {checkFunction} check
 * @param {coerceFunction} doCoercion
 *
 * @returns {enforcer}
 */
const simpleEnforcer = (check, doCoercion) => {
	const enforcer = (value, alt, coerce) => {
		return check(value) ?
			value :
			((coerce === true && check(value, coerce)) ?
				doCoercion(value) :
				alt);
	};

	enforcer.extend = simpleEnforcer;

	return enforcer;
};

/**
 * Enforce that a value is an object. Uses [isObject](docs/checks.md#isObject).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * const a = {};
 * const b = {};
 *
 * enforce.object(a, b);
 * // => a
 *
 * enforce.object('{}', b);
 * // => b
 *
 * enforce.object('{}', b, true);
 * // => {}
 * ```
 *
 * @function enforce.object
 * @alias enforceObject
 *
 * @template T
 * @param {unknown} value
 * @param {T} alt - Returned if the value is not the correct type
 * @param {boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {T}
 */
export default simpleEnforcer(isObject, JSON.parse);
