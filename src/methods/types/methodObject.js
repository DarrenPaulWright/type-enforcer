import enforceObject from '../../enforcer/types/enforceObject';
import buildMethod from '../variants/buildMethod';

/**
 * Gets or Sets a plain object
 *
 * @function method.object
 * @method object
 * @member module:method
 *
 * @param   {Object}       valueObject      - An object that holds the property to be set and returned
 * @param   {Array}        property         - The property of valueObject that gets returned or should get
 *     set when a new value is passed in
 * @param   {Object}       [options]
 * @param   {Function}     [options.before] - A callback that gets executed before a new valid value is set
 * @param   {Function}     [options.set]       - A callback that gets executed when a new valid value is
 *     set
 * @param   {Array}        [options.other] - An array of other values that that can be set
 *
 * @returns {this|Object} - If setting a value then returns this, otherwise returns
 *     valueObject.property
 */
export default buildMethod({
	enforce: enforceObject
});
