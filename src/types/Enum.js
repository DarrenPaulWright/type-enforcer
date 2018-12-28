import { assign, values } from 'lodash';

const VALUES = Symbol();

/**
 * A data type. Freezes an enumerable object and adds a "has" method
 *
 * @module Enum
 * @constructor
 */
export default class Enum {
	constructor(value) {
		assign(this, value);
		this[VALUES] = values(value);
		Object.freeze(this);
		value = null;
	}

	/**
	 * @method has
	 * @member module:Enum
	 * @instance
	 *
	 * @param {string} item
	 *
	 * @returns {boolean}
	 */
	has(item) {
		return this[VALUES].includes(item);
	}
}
