import isSet from '../checks/isSet';
import enforceArray from './enforceArray';

/**
 * Enforce that a value is a Set. Uses [isSet](docs/checks.md#isSet).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * const a = new Set();
 * const b = new Set();
 *
 * enforce.set(a, b);
 * // => a
 *
 * enforce.set('set', b);
 * // => b
 *
 * enforce.set([1, 2], b, true);
 * // => Set with 1 and 2
 * ```
 *
 * @function enforce.set
 * @alias enforceSet
 *
 * @arg {*} value
 * @arg {Set} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Object}
 */
export default (value, alt, coerce) => {
	if (isSet(value)) {
		return value;
	}

	if (coerce === true && isSet(value, true)) {
		return new Set(enforceArray(value, 0, true));
	}

	return alt;
};
