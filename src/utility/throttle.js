export default (func, limit) => {
	let throttled;

	return (...args) => {
		if (!throttled) {
			func.apply(this, args);
			throttled = true;
			setTimeout(() => throttled = false, limit);
		}
	};
};
