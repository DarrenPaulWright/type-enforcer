import enforceEnum from '../enforcer/enforceEnum.js';
import methodAny from './methodAny.js';

/* eslint-disable jsdoc/no-undefined-types */
/**
 * Builds a chainable method for getting/setting an enumerable value in an [Enum](docs/Enum.md)
 *
 * @function method.enum
 * @extends method.any
 * @alias methodEnum
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {Function} [options.enforce=enforce.enum]
 * @param {Enum} options.enum - An enum to restrict the values to.
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce(newValue, oldValue, options) {
		return enforceEnum(newValue, options.enum, oldValue);
	}
});
