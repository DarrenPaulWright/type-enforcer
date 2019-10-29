import enforceArray from './enforceArray';
import enforceBoolean from './enforceBoolean';
import enforceDate from './enforceDate';
import enforceEnum from './enforceEnum';
import enforceFloat from './enforceFloat';
import enforceFunction from './enforceFunction';
import enforceInstanceOf from './enforceInstanceOf';
import enforceInteger from './enforceInteger';
import enforceMap from './enforceMap';
import enforceNumber from './enforceNumber';
import enforceObject from './enforceObject';
import enforceRegExp from './enforceRegExp';
import enforceSet from './enforceSet';
import enforceString from './enforceString';
import enforceSymbol from './enforceSymbol';
import enforceWeakMap from './enforceWeakMap';

/**
 * Utility functions for enforcing data types.
 *
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * // Or import individual functions
 * import { enforceBoolean, enforceString } from 'type-enforcer';
 * ```
 *
 * @typedef {object} enforce
 */
export default {
	array: enforceArray,
	boolean: enforceBoolean,
	date: enforceDate,
	enum: enforceEnum,
	float: enforceFloat,
	function: enforceFunction,
	instanceOf: enforceInstanceOf,
	integer: enforceInteger,
	map: enforceMap,
	number: enforceNumber,
	object: enforceObject,
	regExp: enforceRegExp,
	set: enforceSet,
	string: enforceString,
	symbol: enforceSymbol,
	weakMap: enforceWeakMap
};
