
export default getOther = (options) => function(...args) {
	if (args.length) {
		return this;
	}

	return options.get.call(this);
};
