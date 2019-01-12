import { getStoredValue, processOutput } from './helper';

export default (options) => {
	const key = Symbol();

	return function(newValue) {
		const value = getStoredValue.call(this, key, options.init);

		if (arguments.length) {
			newValue = options.enforce(newValue, value, options);
			if (options.compare(newValue, value)) {
				this[key] = newValue;
			}

			return this;
		}

		return processOutput(value, options);
	};
};
