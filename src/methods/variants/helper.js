import isInstanceOf from '../../checks/types/isInstanceOf';

export const getStoredValue = function(key, init) {
	if (this && !Object.getOwnPropertySymbols(this).includes(key)) {
		this[key] = init;
	}
	return this[key];
};

export const hasOtherValidValue = (values, newValue) => {
	for (let i = 0, t = values.length; i < t; i++) {
		if (newValue === values[i] || isInstanceOf(newValue, values[i])) {
			return true;
		}
	}

	return false;
};

export const processOutput = (value, options = {}) => {
	return (options.stringify && value && value.toString) ? value.toString() : value;
};
