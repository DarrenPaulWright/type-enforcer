import { isEqual } from 'lodash';
import enforceArray from '../../enforcer/types/enforceArray';
import buildMethod from '../variants/buildMethod';

/**
 * Builds a method for getting/setting an array
 *
 * @function method.array
 *
 * @param   {Object}       [options]
 * @param   {Function}     [options.before] - A callback that gets executed before a new valid value is set
 * @param   {Function}     [options.set]       - A callback that gets executed when a new valid value is
 *     set
 * @param   {Array}        [options.other] - An array of other values that that can be set
 *
 * @returns {this|Array} - If setting a value then returns this, otherwise returns valueObject.property
 */
export default buildMethod({
	enforce: enforceArray,
	init: [],
	compare: function(newValue, oldValue) {
		return !isEqual(newValue, oldValue);
	}
});
