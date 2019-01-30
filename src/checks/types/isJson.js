/**
 * Check if a value can be parsed as JSON
 *
 * @example
 * ``` javascript
 * import { isJson } from 'type-enforcer';
 * ```
 *
 * @function isJson
 *
 * @arg {*} value
 *
 * @returns {Boolean}
 */
export default (value) => {
	try {
		JSON.parse(value);
	} catch (e) {
		return false;
	}
	return true;
};
