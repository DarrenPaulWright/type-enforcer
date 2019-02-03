export default (object, callback) => {
	if (object) {
		Object.keys(object).some((key) => {
			if (object.hasOwnProperty(key)) {
				return callback(object[key], key) === false;
			}
		});
	}
};
