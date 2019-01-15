export default (Type, check) => (value, alt, options = {}) => {
	if (options.coerce !== false && check(value, true) && !check(value)) {
		value = new Type(value);
	}
	return check(value) ? value : alt;
};
