import buildMethod from '../variants/buildMethod';

/**
 * Builds a method for getting/setting any data type
 *
 * @function method.any
 *
 * @param   {Object}       [options]
 * @param   {Function}     [options.before] - A callback that gets executed before a new valid value is set
 * @param   {Function}     [options.set]       - A callback that gets executed when a new valid value is
 *     set
 *
 * @returns {this|Array} - If setting a value then returns this, otherwise returns valueObject.property
 */
export default buildMethod();
