import Enum from '../../types/Enum';

const objectStringMap = {};
objectStringMap[Array] = '[object Array]';
objectStringMap[Boolean] = '[object Boolean]';
objectStringMap[Date] = '[object Date]';
objectStringMap[Number] = '[object Number]';
objectStringMap[Object] = '[object Object]';
objectStringMap[RegExp] = '[object RegExp]';

const typeOfMap = new Enum({
	boolean: Boolean,
	number: Number,
	string: String
});

/**
 * @description Check if a value is an instance of a constructor. Fixes issues with native instanceOf and primitives Boolean, Number, and String (see example).
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
	return object instanceof constructor || (objectStringMap[constructor] && toString.call(object) === objectStringMap[constructor]) || typeof object === typeOfMap.key(constructor);
};
