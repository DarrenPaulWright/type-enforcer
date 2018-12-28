import CallbackQueue from '../../types/CallbackQueue';

export default (options = {}) => {
	const key = Symbol();

	return function(newValue) {
		if (this && !this[key] && !this.isRemoved()) {
			this[key] = new CallbackQueue();

			this.onRemove(() => {
				this[key].discardAll();
			});
		}

		if (arguments.length) {
			if (typeof newValue === 'function') {
				this[key].add(newValue);

				if (options.set) {
					options.set.call(this, this[key]);
				}
			}

			return this;
		}

		return this ? this[key] : undefined;
	};
};
