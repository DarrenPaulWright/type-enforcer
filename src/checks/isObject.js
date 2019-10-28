/**
 * Check if a value is a plain object
 *
 * @example
 * ``` javascript
 * import { isObject } from 'type-enforcer';
 *
 * isObject({});
 * // => true
 *
 * isObject('{}');
 * // => false
 *
 * isObject('{}', true);
 * // => true
 * ```
 *
 * @function is.object
 * @alias isObject
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into an Object
 *
 * @returns {Boolean}
 */
const isObject = (value, coerce) => {
	if (value && value.constructor === Object) {
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

		return isObject(json);
	}

	return false;
};

export default isObject;
