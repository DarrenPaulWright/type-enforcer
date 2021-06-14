const typeOfMap = new Map()
	.set(Boolean, 'boolean')
	.set(Number, 'number')
	.set(String, 'string')
	.set(Symbol, 'symbol');

/**
 * Check if a value is an instance of a constructor. Fixes issues with native instanceOf and primitives Boolean, Number, String, and Symbol (see example).
 *
 * @example
 * ``` javascript
 * import { isInstanceOf } from 'type-enforcer';
 *
 * isInstanceOf(false, Boolean);
 *  => true
 *
 * false instanceof Boolean
 *  => false
 * isInstanceOf(false, Boolean);
 *  => true
 *
 * 42 instanceof Number
 *  => false
 * isInstanceOf(42, Number);
 *  => true
 *
 * 'a string' instanceof String
 *  => false
 * isInstanceOf('a string', String);
 *  => true
 *
 * Symbol() instanceof Symbol
 *  => false
 * isInstanceOf(Symbol(), Symbol);
 *  => true
 * ```
 *
 * @function is.instanceOf
 * @alias isInstanceOf
 *
 * @param {*} object - The object to check.
 * @param {Function} constructor - The constructor function.
 *
 * @returns {boolean}
 */
export default (object, constructor) => {
	return constructor && constructor.prototype && (object instanceof constructor || typeof object === typeOfMap.get(constructor));
};
