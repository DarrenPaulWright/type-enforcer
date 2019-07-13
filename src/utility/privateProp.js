/**
 * Sets a non-enumerable property on an object
 *
 * @function privateProp
 *
 * @arg {Object} object
 * @arg {String|Symbol} key
 * @arg {*} value
 *
 * @returns {Object}
 */
export default (object, key, value) => Object.defineProperty(object, key, {
	value: value,
	configurable: true,
	writable: true,
	enumerable: false
});

