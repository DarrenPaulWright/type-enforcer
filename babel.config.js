module.exports = function(api) {
	const presets = [
		[
			'@babel/preset-env'
		]
	];
	const plugins = [
		'lodash',
		['@babel/plugin-proposal-private-methods', {'loose': true}],
		['@babel/plugin-proposal-class-properties', {'loose': true}]
	];

	api.cache(true);

	return {
		presets,
		plugins
	};
};
