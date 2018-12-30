export default (options) => function(...args) {
	if (args.length) {
		return this;
	}

	return options.get.call(this);
};
