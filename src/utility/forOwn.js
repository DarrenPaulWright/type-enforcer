export default (object, callback) => !(!object || !Object.keys(object)
	.some((key) => key in object ? callback(object[key], key) : false));
