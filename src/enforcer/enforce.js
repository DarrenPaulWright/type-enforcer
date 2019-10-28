import enforceArray from './enforceArray';
import enforceBoolean from './enforceBoolean';
import enforceDate from './enforceDate';
import enforceEnum from './enforceEnum';
import enforceFloat from './enforceFloat';
import enforceFunction from './enforceFunction';
import enforceInstanceOf from './enforceInstanceOf';
import enforceInteger from './enforceInteger';
import enforceNumber from './enforceNumber';
import enforceObject from './enforceObject';
import enforceRegExp from './enforceRegExp';
import enforceString from './enforceString';

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
	number: enforceNumber,
	object: enforceObject,
	regExp: enforceRegExp,
	string: enforceString
};
