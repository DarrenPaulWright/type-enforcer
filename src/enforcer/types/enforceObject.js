import isObject from '../../checks/types/isObject';

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
 * @arg {*} value
 * @arg {Object} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Object}
 */
export default (value, alt, coerce) => {
	if (coerce === true && !isObject(value) && isObject(value, true)) {
		return JSON.parse(value);
	}
	return isObject(value) ? value : alt;
};
