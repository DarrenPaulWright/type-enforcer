module.exports = function(config) {
	config.set({
		browsers: ['Chrome', 'Firefox'],
		files: [
			'tests/TestUtil.js',
			'tests/**/*.Test.js',
		],
		frameworks: ['jasmine'],
		preprocessors: {
			'tests/TestUtil.js': ['webpack'],
			'tests/**/*.Test.js': ['webpack']
		},
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
