const _ = require('lodash');
const testRunnerConfig = require('test-runner-config');
const config = require('./testRunner.config.js');

const exclude = (file) => {
	return {pattern: file, included: false};
};

const files = testRunnerConfig.getKarmaFiles(config, {
	src: exclude
});
const preprocessors = {};
_.each(testRunnerConfig.getKarmaFiles(config, {
	css: exclude,
	src: exclude
}).files, (pattern) => {
	if (pattern.included !== false) {
		preprocessors[pattern] = ['webpack'];
	}
});

module.exports = function(config) {
	config.set({
		browsers: ['chromeCustom'],
		customLaunchers: {
			chromeCustom: {
				base: 'ChromeHeadless',
				flags: ['--window-size=830,600']
			}
		},
		files: files.files,
		frameworks: ['jasmine'],
		preprocessors: preprocessors,
		reporters: ['brief'],
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
