import isBoolean from '../checks/isBoolean';

/**
 * Enforce that a value is a boolean. Uses [isBoolean](docs/checks.md#isBoolean).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * enforce.boolean(false, true);
 * // => false
 *
 * enforce.boolean('', true);
 * // => true
 *
 * enforce.boolean('', true, true);
 * // => false
 * ```
 *
 * @function enforce.boolean
 * @alias enforceBoolean
 *
 * @arg {*} value
 * @arg {Boolean} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Boolean}
 */
export default (value, alt, coerce) => {
	if (isBoolean(value)) {
		return value;
	}

	if (coerce === true && isBoolean(value, true)) {
		return Boolean(value);
	}

	return alt;
};
