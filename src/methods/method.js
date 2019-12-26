import methodAny from './methodAny';
import methodArray from './methodArray';
import methodBoolean from './methodBoolean';
import methodDate from './methodDate';
import methodEnum from './methodEnum';
import methodFloat from './methodFloat';
import methodFunction from './methodFunction';
import methodInstanceOf from './methodInstanceOf';
import methodInteger from './methodInteger';
import methodKeyValue from './methodKeyValue';
import methodMap from './methodMap';
import methodNumber from './methodNumber';
import methodObject from './methodObject';
import methodQueue from './methodQueue';
import methodRegExp from './methodRegExp';
import methodSet from './methodSet';
import methodString from './methodString';
import methodSymbol from './methodSymbol';
import methodWeakMap from './methodWeakMap';
import methodWeakSet from './methodWeakSet';

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
