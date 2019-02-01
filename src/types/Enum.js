const KEYS = Symbol();
const VALUES = Symbol();

/**
 * Freezes an enumerable object and adds a "has" method
 *
 * ## Usage
 * ``` javascript
 * import { Enum } from 'type-enforcer';
 * ```
 *
 * @class Enum
 *
 * @arg {Object} object
 */
export default class Enum {
	constructor(object) {
		Object.assign(this, object);
		this[KEYS] = [];
		this[VALUES] = [];
		Object.keys(object).forEach((key) => {
			this[KEYS].push(key);
			this[VALUES].push(object[key]);
		});
		Object.freeze(this);
		object = null;
	}

	/**
	 * Check if a provided value is in this enum
	 *
	 * @memberof Enum
	 * @instance
	 *
	 * @arg {String} value
	 *
	 * @returns {boolean}
	 */
	has(value) {
		return this[VALUES].includes(value);
	}

	/**
	 * Get the key of a provided value
	 *
	 * @memberof Enum
	 * @instance
	 *
	 * @arg {String} value
	 *
	 * @returns {String}
	 */
	key(value) {
		return this[KEYS][this[VALUES].indexOf(value)];
	}

	/**
	 * Calls a callback with each of the enum values
	 * ``` javascript
	 * const items = new Enum({
	 *     THING: 'thing'
	 * });
	 *
	 * items.each((value) => {
	 *     console.log(value);
	 * });
	 * // => 'thing'
	 * ```
	 *
	 * @memberof Enum
	 * @instance
	 *
	 * @arg {Function} callback
	 */
	each(callback) {
		this[VALUES].forEach(callback);
	}
}
