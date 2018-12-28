
export default get = (options) => function() {
	return options.get.call(this);
};
