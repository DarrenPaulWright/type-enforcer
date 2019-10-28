import isRegExp from '../checks/isRegExp';

const SEPARATOR = '/';

/**
 * Enforce that a value is a RegExp. Uses [isRegExp](docs/checks.md#isRegExp).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * enforce.regExp(/*+/g, /[a-z]+/);
 * // => /*+/g
 *
 * enforce.regExp('/*+/g', /[a-z]+/);
 * // => /[a-z]+/
 *
 * enforce.regExp('/*+/g', /[a-z]+/, true);
 * // => /*+/g
 * ```
 *
 * @function enforce.regExp
 * @alias enforceRegExp
 *
 * @arg {*} value
 * @arg {RegExp} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {RegExp}
 */
export default (value, alt, coerce) => {
	if (coerce === true && !isRegExp(value) && isRegExp(value, true)) {
		if (value.charAt(0) !== SEPARATOR) {
			return RegExp(value);
		}
		else {
			const index = value.lastIndexOf(SEPARATOR);
			return RegExp(value.substring(1, index), value.substring(index + 1));
		}
	}
	return isRegExp(value) ? value : alt;
};
