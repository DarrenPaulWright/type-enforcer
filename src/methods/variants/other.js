import { getStoredValue, hasOtherValidValue } from './helper';

export default (options) => {
	const key = Symbol();

	return function(newValue, isForcedSave) {
		const value = getStoredValue.call(this, key, options.init);

		if (arguments.length) {
			if (!hasOtherValidValue(options.other, newValue)) {
				newValue = options.enforce(newValue, value, options);
			}
			if (options.compare(newValue, value) || isForcedSave) {
				this[key] = newValue;
			}

			return this;
		}

		return (options.stringify && value && value.toString) ? value.toString() : value;
	};
};
