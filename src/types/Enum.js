import { assign, each, values } from 'lodash';

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
 * @arg {Object} value
 */
export default class Enum {
	constructor(value) {
		assign(this, value);
		this[VALUES] = values(value);
		Object.freeze(this);
		value = null;
	}

	/**
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
	 * @param {Function} callback
	 */
	each(callback) {
		each(this[VALUES], callback);
	}
}
