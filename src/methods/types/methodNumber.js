import enforceNumber from '../../enforcer/types/enforceNumber';
import buildMethod from '../variants/buildMethod';

/**
 * Gets or Sets a number
 *
 * @function method.bool
 *
 * @param   {Object}       valueObject      - An object that holds the property to be set and returned
 * @param   {Array}        property         - The property of valueObject that gets returned or should get
 *     set when a new value is passed in
 * @param   {Object}       [options]
 * @param   {Function}     [options.before] - A callback that gets executed before a new valid value is set
 * @param   {Function}     [options.set]       - A callback that gets executed when a new valid value is
 *     set
 * @param   {Array}        [options.other] - An array of other values that that can be set
 * @param   {Number}       [options.min]              - The minimum accepted value
 * @param   {Number}       [options.max]              - The maximum accepted value
 *
 * @returns {this|Number} - If setting a value then returns this, otherwise returns
 *     valueObject.property
 */
export default buildMethod({
	enforce: (newValue, oldValue, options) => {
		return enforceNumber(newValue, oldValue, options.min, options.max);
	}
});
