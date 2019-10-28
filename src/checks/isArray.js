/**
 * Check if a value is an array
 *
 * @example
 * ``` javascript
 * import { isArray } from 'type-enforcer';
 *
 * isArray([]);
 * // => true
 *
 * isArray('[]');
 * // => false
 *
 * isArray('[]', true);
 * // => true
 * ```
 *
 * @function is.array
 * @alias isArray
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into an array
 *
 * @returns {Boolean}
 */
export default (value, coerce) => {
	if (Array.isArray(value)) {
		return true;
	}

	if (coerce === true) {
		let json;

		try {
			json = JSON.parse(value);
		}
		catch (e) {
			return false;
		}

		return Array.isArray(json);
	}

	return false;
};
