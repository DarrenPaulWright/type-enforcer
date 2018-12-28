import buildMethod from '../variants/buildMethod';

export default buildMethod({
	enforce: (newValue, oldValue, options) => {
		return newValue instanceof options.instance ? newValue : oldValue;
	}
});
