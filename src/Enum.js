// eslint-disable-next-line unicorn/prevent-abbreviations
import PrivateVars from './utility/PrivateVars.js';

const _ = new PrivateVars();

/**
 * @callback eachCallback
 * @private
 * @param {unknown} value
 */

/**
 * ``` javascript
 * import { Enum } from 'type-enforcer';
 * ```
 *
 * @class Enum
 * @classdesc Freezes an enumerable object and adds a few helper methods
 *
 * @param {Object.<string, unknown>} object
 */
export default class Enum {
	constructor(object) {
		_.set(Object.assign(this, object), {
			keys: Object.keys(object),
			values: Object.values(object)
		});

		Object.freeze(this);
	}

	/**
	 * Check if a provided value is in this enum.
	 *
	 * @memberOf Enum
	 * @instance
	 *
	 * @param {unknown} value - A value to check against the values in this Enum.
	 *
	 * @returns {boolean}
	 */
	has(value) {
		return _(this).values.includes(value);
	}

	/**
	 * Get the key of a provided value.
	 *
	 * @memberOf Enum
	 * @instance
	 *
	 * @param {unknown} value - A value in this enum.
	 *
	 * @returns {string | undefined}
	 */
	key(value) {
		const _self = _(this);

		return _self.keys[_self.values.indexOf(value)];
	}

	/**
	 * Calls a callback with each of the enum values.
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
	 * @memberOf Enum
	 * @instance
	 *
	 * @param {eachCallback} callback - Callback is provided one arg, the value.
	 */
	each(callback) {
		_(this).values.forEach((value) => callback(value));
	}
}
