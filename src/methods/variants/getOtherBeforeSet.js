import { hasOtherValidValue } from './helper';

export default (options) => function(newValue, isForcedSave) {
	const value = options.get.call(this);

	if (arguments.length) {
		if (!hasOtherValidValue(options.other, newValue)) {
			newValue = options.enforce(newValue, value, options);
		}
		if (options.compare(newValue, value) || isForcedSave) {
			options.before.call(this, value);
			options.set.call(this, newValue);
		}

		return this;
	}

	return (options.stringify && value && value.toString) ? value.toString() : value;
};
