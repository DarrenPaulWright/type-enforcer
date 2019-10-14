import enforceArray from './types/enforceArray';
import enforceBoolean from './types/enforceBoolean';
import enforceDate from './types/enforceDate';
import enforceEnum from './types/enforceEnum';
import enforceFloat from './types/enforceFloat';
import enforceFunction from './types/enforceFunction';
import enforceInstance from './types/enforceInstance';
import enforceInteger from './types/enforceInteger';
import enforceNumber from './types/enforceNumber';
import enforceObject from './types/enforceObject';
import enforceRegExp from './types/enforceRegExp';
import enforceString from './types/enforceString';

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
	instance: enforceInstance,
	integer: enforceInteger,
	number: enforceNumber,
	object: enforceObject,
	regExp: enforceRegExp,
	string: enforceString
};
