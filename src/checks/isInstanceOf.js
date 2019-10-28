const objectStringMap = new Map()
	.set(Array, '[object Array]')
	.set(Boolean, '[object Boolean]')
	.set(Date, '[object Date]')
	.set(Number, '[object Number]')
	.set(Object, '[object Object]')
	.set(RegExp, '[object RegExp]');

const typeOfMap = new Map()
	.set(Boolean, 'boolean')
	.set(Number, 'number')
	.set(String, 'string')
	.set(Symbol, 'symbol');

/**
 * @description Check if a value is an instance of a constructor. Fixes issues with native instanceOf and primitives Boolean, Number, String, and Symbol (see example).
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
 * @arg {*} object
 * @arg {Function} constructor
 *
 * @returns {Boolean}
 */
export default (object, constructor) => {
	if (object === undefined || !(typeof constructor === 'function' && constructor.prototype)) {
		return false;
	}

	if (object instanceof constructor) {
		return true;
	}

	const objectType = objectStringMap.get(constructor);

	return (objectType && toString.call(object) === objectType) || typeof object === typeOfMap.get(constructor);
};
