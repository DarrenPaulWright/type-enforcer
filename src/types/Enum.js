import { forOwn } from 'object-agent';
import PrivateVars from '../utility/PrivateVars';

const _ = new PrivateVars();

/**
 * Freezes an enumerable object and adds a few helper methods
 *
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
		const _self = _.set(this, {
			keys: [],
			values: []
		});
		forOwn(object, (value, key) => {
			_self.keys.push(key);
			_self.values.push(value);
		});
		Object.freeze(this);
		object = null;
	}

	/**
	 * Check if a provided value is in this enum
	 *
	 * @memberOf Enum
	 * @instance
	 *
	 * @arg {String} value
	 *
	 * @returns {boolean}
	 */
	has(value) {
		return _(this).values.includes(value);
	}

	/**
	 * Get the key of a provided value
	 *
	 * @memberOf Enum
	 * @instance
	 *
	 * @arg {String} value
	 *
	 * @returns {String}
	 */
	key(value) {
		const _self = _(this);

		return _self.keys[_self.values.indexOf(value)];
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
	 * @memberOf Enum
	 * @instance
	 *
	 * @arg {Function} callback
	 */
	each(callback) {
		_(this).values.forEach(callback);
	}
}
