import methodAny from './types/methodAny';
import methodArray from './types/methodArray';
import methodBool from './types/methodBool';
import methodCallbackQueue from './types/methodCallbackQueue';
import methodCssSize from './types/methodCssSize';
import methodDate from './types/methodDate';
import methodDockPoint from './types/methodDockPoint';
import methodElement from './types/methodElement';
import methodEnum from './types/methodEnum';
import methodFunc from './types/methodFunc';
import methodInstance from './types/methodInstance';
import methodInt from './types/methodInt';
import methodKeyValue from './types/methodKeyValue';
import methodNumber from './types/methodNumber';
import methodObject from './types/methodObject';
import methodPoint from './types/methodPoint';
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
 * @typedef {object} method
 */
export default {
	any: methodAny,
	array: methodArray,
	bool: methodBool,
	callbackQueue: methodCallbackQueue,
	cssSize: methodCssSize,
	date: methodDate,
	dockPoint: methodDockPoint,
	element: methodElement,
	enum: methodEnum,
	func: methodFunc,
	int: methodInt,
	instance: methodInstance,
	keyValue: methodKeyValue,
	number: methodNumber,
	object: methodObject,
	point: methodPoint,
	string: methodString,
	thickness: methodThickness,
	vector: methodVector
};
