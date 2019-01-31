import { clamp } from 'lodash';

const shouldCoerce = (coerce, check, value) => {
	return (coerce === true && check(value, true) && !check(value));
};

export const numericEnforcer = (check, doCoercion) => {
	return (value, alt, coerce, minValue = -Infinity, maxValue = Infinity) => {
		if (shouldCoerce(coerce, check, value)) {
			return clamp(doCoercion(value), minValue, maxValue);
		}
		return check(value) ? clamp(value, minValue, maxValue) : alt;
	};
};

export const coercibleEnforcer = (check, doCoercion) => {
	return (value, alt, coerce) => {
		if (shouldCoerce(coerce, check, value)) {
			return doCoercion(value);
		}
		return check(value) ? value : alt;
	};
};

export const baseEnforcer = (check) => {
	return (value, alt) => check(value) ? value : alt;
};
