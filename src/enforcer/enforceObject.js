import isObject from '../checks/isObject.js';

const simpleEnforcer = (check, doCoercion) => {
	const enforcer = (value, alt, coerce) => {
		return check(value) ? value : ((coerce === true && check(value, coerce)) ? doCoercion(value) : alt);
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
 * @param {*} value
 * @param {object} alt - Returned if the value is not the correct type
 * @param {boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {object}
 */
export default simpleEnforcer(isObject, JSON.parse);
