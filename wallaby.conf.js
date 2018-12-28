const wallabyWebpack = require('wallaby-webpack');

module.exports = function(wallaby) {
	const webpackPostprocessor = wallabyWebpack({
		module: {
			rules: [{
				test: /\.js$/,
				enforce: 'pre',
				exclude: /node_modules/,
				use: [
					{
						loader: 'eslint-loader',
						options: {
							configFile: '.eslintrc.json',
							cache: true,
							emitWarning: true
						}
					}
				]
			}]
		}
	});

	return {
		name: 'type-enforcer',
		files: [
			{ pattern: 'tests/TestUtil.js', instrument: false, load: false },
			{ pattern: 'src/**/*.js', instrument: true, load: false }
		],
		tests: [
			{ pattern: 'tests/**/*.Test.js', instrument: false, load: false }
		],
		env: {
			kind: 'chrome'
		},
		postprocessor: webpackPostprocessor,
		compilers: {
			'**/*.js': wallaby.compilers.babel()
		},
		setup: function() {
			window.__moduleBundler.loadTests();
		},
		lowCoverageThreshold: 99,
		debug: true
	};
};
