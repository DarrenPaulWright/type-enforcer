import enforceArray from './types/enforceArray';
import enforceBool from './types/enforceBool';
import enforceCssSize from './types/enforceCssSize';
import enforceDate from './types/enforceDate';
import enforceDockPoint from './types/enforceDockPoint';
import enforceElement from './types/enforceElement';
import enforceEnum from './types/enforceEnum';
import enforceFunc from './types/enforceFunc';
import enforceInt from './types/enforceInt';
import enforceNumber from './types/enforceNumber';
import enforceObject from './types/enforceObject';
import enforcePoint from './types/enforcePoint';
import enforceString from './types/enforceString';
import enforceThickness from './types/enforceThickness';
import enforceVector from './types/enforceVector';

/**
 * Utility functions for enforcing data types.
 *
 * ## Usage
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 * ```
 *
 * @typedef {object} enforce
 */
export default {
	array: enforceArray,
	bool: enforceBool,
	cssSize: enforceCssSize,
	date: enforceDate,
	dockPoint: enforceDockPoint,
	element: enforceElement,
	enum: enforceEnum,
	func: enforceFunc,
	int: enforceInt,
	number: enforceNumber,
	object: enforceObject,
	point: enforcePoint,
	string: enforceString,
	thickness: enforceThickness,
	vector: enforceVector
};
