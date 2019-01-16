export const buildCustomTypeCheck = (Type) => (value, coerce) => {
	return (value instanceof Type) || (coerce === true && Type.isValid(value));
};

export const buildCheckWithCoerce = (check, doCoercion) => (value, coerce) => {
	return check(value) || (coerce === true && doCoercion(value));
};
