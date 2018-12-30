import { getStoredValue } from './helper';

export default (options) => {
	const key = Symbol();

	return function(newValue, isForcedSave) {
		const value = getStoredValue.call(this, key, options.init);

		if (arguments.length) {
			newValue = options.enforce(newValue, value, options);
			if (options.compare(newValue, value) || isForcedSave) {
				options.before.call(this, value);
				this[key] = newValue;
				options.set.call(this, newValue);
			}

			return this;
		}

		return (options.stringify && value && value.toString) ? value.toString() : value;
	};
};
