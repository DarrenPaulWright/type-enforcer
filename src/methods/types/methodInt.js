import enforceInt from '../../enforcer/types/enforceInt';
import buildMethod from '../variants/buildMethod';

/**
 * Gets or Sets an integer
 *
 * @function method.int
 *
 * @param   {Object}       valueObject      - An object that holds the property to be set and returned
 * @param   {Array}        property         - The property of valueObject that gets returned or should get
 *     set when a new value is passed in
 * @param   {Object}       [options]
 * @param   {Function}     [options.before] - A callback that gets executed before a new valid value is set
 * @param   {Function}     [options.set]       - A callback that gets executed when a new valid value is
 *     set
 * @param   {Array}        [options.other] - An array of other values that that can be set
 * @param   {Int}          [options.min]              - The minimum accepted value
 * @param   {Int}          [options.max]              - The maximum accepted value
 *
 * @returns {this|Int} - If setting a value then returns this, otherwise returns valueObject.property
 */
export default buildMethod({
	enforce: (newValue, oldValue, options) => {
		return enforceInt(newValue, oldValue, options.min, options.max);
	}
});
