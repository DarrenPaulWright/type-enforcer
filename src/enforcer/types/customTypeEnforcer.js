export const customTypeEnforcer = (Type, check) => (value, alt, coerce) => {
	if (coerce === true && check(value, true) && !check(value)) {
		value = new Type(value);
	}
	return check(value) ? value : alt;
};
