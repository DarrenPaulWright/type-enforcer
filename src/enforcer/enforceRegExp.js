import isRegExp from '../checks/isRegExp.js';
import enforceObject from './enforceObject.js';

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
 * @param {*} value
 * @param {RegExp} alt - Returned if the value is not the correct type
 * @param {boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {RegExp}
 */
export default enforceObject.extend(isRegExp, (value) => {
	if (value.charAt(0) !== SEPARATOR) {
		return RegExp(value); // eslint-disable-line require-unicode-regexp
	}

	const index = value.lastIndexOf(SEPARATOR);
	return RegExp(value.slice(1, index), value.slice(Math.max(0, index + 1)));
});
