import enforceArray from './enforceArray.js';
import enforceBoolean from './enforceBoolean.js';
import enforceDate from './enforceDate.js';
import enforceEnum from './enforceEnum.js';
import enforceFloat from './enforceFloat.js';
import enforceFunction from './enforceFunction.js';
import enforceInstanceOf from './enforceInstanceOf.js';
import enforceInteger from './enforceInteger.js';
import enforceMap from './enforceMap.js';
import enforceNumber from './enforceNumber.js';
import enforceObject from './enforceObject.js';
import enforcePromise from './enforcePromise.js';
import enforceRegExp from './enforceRegExp.js';
import enforceSet from './enforceSet.js';
import enforceString from './enforceString.js';
import enforceSymbol from './enforceSymbol.js';
import enforceWeakMap from './enforceWeakMap.js';
import enforceWeakSet from './enforceWeakSet.js';

/**
 * Utility functions for enforcing data types.
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer';
 *
 * // Or import individual functions
 * import { enforceBoolean, enforceString } from 'type-enforcer';
 * ```
 *
 * ##### Extending enforcers
 * All enforcers with a "coerce" option also have a static method ".extend" that creates a new enforcer. It accepts two args:
 * - The first arg should be a valid check function that accepts a second "coerce" arg.
 * - The second arg should be a function that coerces a coercible value (as determined by the check function).
 *
 * <br>
 *
 * @namespace enforce
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
	promise: enforcePromise,
	regExp: enforceRegExp,
	set: enforceSet,
	string: enforceString,
	symbol: enforceSymbol,
	weakMap: enforceWeakMap,
	weakSet: enforceWeakSet
};
