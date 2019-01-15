import Enum from '../types/Enum';

const typeOfMap = new Enum({
	boolean: Boolean,
	number: Number,
	string: String
});

/**
 * @description Check if a value is an instance of a constructor.
 *
 * @example
 * ``` javascript
 * import { isInstanceOf } from 'type-enforcer';
 * ```
 *
 * Fixes issues with primitives and instanceOf
 * ``` javascript
 * isInstanceOf(false, Boolean);
 *  => true
 *
 * isInstanceOf(42, Number);
 *  => true
 *
 * isInstanceOf('test', String);
 *  => true
 * ```
 *
 * @function isInstanceOf
 *
 * @arg   {*} object
 * @arg   {Function} constructor
 *
 * @returns {Boolean}
 */
export default (object, constructor) => {
	if (object === undefined || !(typeof constructor === 'function' && constructor.prototype)) {
		return false;
	}
	return object instanceof constructor || typeof object === typeOfMap.key(constructor);
};
