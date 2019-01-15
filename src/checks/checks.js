export const buildCustomTypeCheck = (Type) => (value, coerce) => {
	return coerce ? Type.isValid(value) : value instanceof Type;
};
