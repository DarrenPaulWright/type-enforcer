/**
 * Check if a value can be parsed as JSON.
 *
 * @example
 * ``` javascript
 * import { isJson } from 'type-enforcer';
 * ```
 *
 * @function is.json
 * @alias isJson
 *
 * @param {unknown} value - The value to check.
 *
 * @returns {boolean}
 */
export default (value) => {
	try {
		JSON.parse(value);
	}
	catch (error) {
		return false;
	}
	return true;
};
