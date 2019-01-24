import methodAny from './types/methodAny';
import methodArray from './types/methodArray';
import methodBoolean from './types/methodBoolean';
import methodCssSize from './types/methodCssSize';
import methodDate from './types/methodDate';
import methodDockPoint from './types/methodDockPoint';
import methodElement from './types/methodElement';
import methodEnum from './types/methodEnum';
import methodFunction from './types/methodFunction';
import methodInstance from './types/methodInstance';
import methodInt from './types/methodInt';
import methodKeyValue from './types/methodKeyValue';
import methodNumber from './types/methodNumber';
import methodObject from './types/methodObject';
import methodPoint from './types/methodPoint';
import methodQueue from './types/methodQueue';
import methodRegExp from './types/methodRegExp';
import methodString from './types/methodString';
import methodThickness from './types/methodThickness';
import methodVector from './types/methodVector';

/**
 * Enforce data types and remove common boilerplate code on class methods.
 *
 * ## Usage
 * ``` javascript
 * import { method } from 'type-enforcer';
 * ```
 *
 * Use it as a prototype:
 * ``` javascript
 * const Thing = function() {};
 *
 * Thing.prototype.myMethod = method.string([options]);
 * ```
 *
 * or in a class:
 * ``` javascript
 * class Thing() {}
 *
 * Thing.prototype.myMethod = method.string([options]);
 * ```
 *
 * or as a non-prototype method:
 * ``` javascript
 * const Thing = function() {
 *     this.myMethod = method.string([options]);
 * };
 * ```
 *
 * @typedef {object} method
 */
export default {
	any: methodAny,
	array: methodArray,
	boolean: methodBoolean,
	queue: methodQueue,
	cssSize: methodCssSize,
	date: methodDate,
	dockPoint: methodDockPoint,
	element: methodElement,
	enum: methodEnum,
	function: methodFunction,
	int: methodInt,
	instance: methodInstance,
	keyValue: methodKeyValue,
	number: methodNumber,
	object: methodObject,
	point: methodPoint,
	regExp: methodRegExp,
	string: methodString,
	thickness: methodThickness,
	vector: methodVector
};
