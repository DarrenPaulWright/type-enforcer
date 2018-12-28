import { forOwn, isPlainObject } from 'lodash';

export default (options = {}) => {
	return function(...args) {
		if (options.set && (args.length === 2 || isPlainObject(args[0]))) {
			if (isPlainObject(args[0])) {
				forOwn(args[0], (value, key) => {
					options.set.call(this, key, value);
				});
			}
			else {
				options.set.apply(this, args);
			}

			return this;
		}

		if (options.get) {
			return options.get.apply(this, args);
		}
	};
};
