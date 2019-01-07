import Enum from '../types/Enum';

const typeOfMap = new Enum({
	boolean: Boolean,
	number: Number,
	string: String
});

/**
 * Check if a value is an instance of a constructor.
 *
 * ## Usage
 * ``` javascript
 * import { isInstanceOf } from 'type-enforcer';
 * ```
 *
 * Fixes issues with primitives and instanceOf, example:
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
export default isInstanceOf = (object, constructor) => {
	if (object === undefined || typeof constructor !== 'function') {
		return false;
	}
	return object instanceof constructor || typeof object === typeOfMap.key(constructor);
};
