import methodAny from './methodAny.js';
import methodArray from './methodArray.js';
import methodBoolean from './methodBoolean.js';
import methodDate from './methodDate.js';
import methodEnum from './methodEnum.js';
import methodFloat from './methodFloat.js';
import methodFunction from './methodFunction.js';
import methodInstanceOf from './methodInstanceOf.js';
import methodInteger from './methodInteger.js';
import methodKeyValue from './methodKeyValue.js';
import methodMap from './methodMap.js';
import methodNumber from './methodNumber.js';
import methodObject from './methodObject.js';
import methodQueue from './methodQueue.js';
import methodRegExp from './methodRegExp.js';
import methodSet from './methodSet.js';
import methodString from './methodString.js';
import methodSymbol from './methodSymbol.js';
import methodWeakMap from './methodWeakMap.js';
import methodWeakSet from './methodWeakSet.js';

/**
 * Enforce data types and remove common boilerplate code on class methods.
 *
 * @example
 * ``` javascript
 * import { method } from 'type-enforcer';
 *
 * // Or import individual functions
 * import { methodBoolean, methodString } from 'type-enforcer';
 *
 *
 * // Use it as a prototype:
 * const Thing = function() {};
 *
 * Thing.prototype.myMethod = method.string([options]);
 *
 *
 * // or in a class:
 * class Thing() {}
 *
 * Thing.prototype.myMethod = method.string([options]);
 *
 *
 * // or as a non-prototype method:
 * const Thing = function() {
 *     this.myMethod = method.string([options]);
 * };
 * ```
 *
 * ##### Extending methods
 * methodAny and all methods that extend it have a static method ".extend" that creates a new method. It accepts two args:
 * - The first arg should be an object with default options. These options override any options in the method being extended.
 * - The second arg (optional) should be a function that gets called when a method is initialized. This function is passed one arg, the options for this method.
 *
 * These methods also have a static method ".defaults" that mutates the default options for that method. For instance, if you would prefer that methodBoolean didn't have a default value of false, then you could use the following:
 * ``` javascript
 * methodBoolean.defaults({init: undefined});
 * ```
 *
 * <br>
 *
 * @namespace method
 */
export default {
	any: methodAny,
	array: methodArray,
	boolean: methodBoolean,
	queue: methodQueue,
	date: methodDate,
	enum: methodEnum,
	float: methodFloat,
	function: methodFunction,
	integer: methodInteger,
	instanceOf: methodInstanceOf,
	keyValue: methodKeyValue,
	map: methodMap,
	number: methodNumber,
	object: methodObject,
	regExp: methodRegExp,
	set: methodSet,
	string: methodString,
	symbol: methodSymbol,
	weakMap: methodWeakMap,
	weakSet: methodWeakSet
};
