export default (options) => function() {
	return options.get.call(this);
};
