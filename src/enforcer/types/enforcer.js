import { clamp } from 'lodash';

export default (check, doCoercion, isNumeric) => {
	if (isNumeric) {
		return (value, alt, coerce, minValue = -Infinity, maxValue = Infinity) => {
			if (coerce === true && check(value, true) && !check(value)) {
				return clamp(doCoercion(value), minValue, maxValue);
			}
			return check(value) ? clamp(value, minValue, maxValue) : alt;
		};
	}
	else if (doCoercion) {
		return (value, alt, coerce) => {
			if (coerce === true && check(value, true) && !check(value)) {
				return doCoercion(value);
			}
			return check(value) ? value : alt;
		}
	}
	else {
		return (value, alt) => check(value) ? value : alt;
	}
};
