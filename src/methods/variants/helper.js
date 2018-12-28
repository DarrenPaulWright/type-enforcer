
export const getStoredValue = function(key, init) {
	if (this && !Object.getOwnPropertySymbols(this).includes(key)) {
		this[key] = init;
	}
	return this ? this[key] : undefined;
};

const isInstanceOf = (constructor, value) => value && typeof constructor === 'function' && value instanceof constructor;

export const hasOtherValidValue = (values, newValue) => {
	for (let i = 0, t = values.length; i < t; i++) {
		if (newValue === values[i] ||
			isInstanceOf(values[i], newValue) ||
			(typeof values[i] === 'string' && typeof newValue === values[i])) {
			return true;
		}
	}

	return false;
};
