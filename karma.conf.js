module.exports = function(config) {
	config.set({
		browsers: ['chromeCustom'],
		customLaunchers: {
			chromeCustom: {
				base: 'ChromeHeadless',
				flags: ['--window-size=830,600']
			}
		},
		files: [
			'tests/test.css',
			'tests/TestUtil.js',
			'tests/enforcer/enforceTestUtility.js',
			'tests/**/*.Test.js'
		],
		frameworks: ['jasmine'],
		preprocessors: {
			'tests/TestUtil.js': ['webpack'],
			'tests/enforcer/enforceTestUtility.js': ['webpack'],
			'tests/**/*.Test.js': ['webpack']
		},
		reporters: ['dots'],
		webpack: {
			mode: 'development',
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
				}, {
					test: /\.js/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				}]
			},
			watch: true
		},
		webpackServer: {
			noInfo: true
		}
	});
};
