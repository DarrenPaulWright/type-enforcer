export default (Type) => (value, alt, options = {}) => {
	if (options.coerce !== false && Type.isValid(value) && !Type.isInstance(value)) {
		value = new Type(value);
	}
	return Type.isInstance(value) ? value : alt;
};
