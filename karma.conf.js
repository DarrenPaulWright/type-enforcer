const testRunnerConfig = require('test-runner-config');
const config = require('./testRunner.config.js');

const singleRun = process.argv.includes('--single-run');

const exclude = (file) => {
	return {
		pattern: file,
		included: false
	};
};

const files = testRunnerConfig.getKarmaFiles(config, {
	src: exclude
});
const preprocessors = {};
testRunnerConfig.getKarmaFiles(config, {
	css: exclude,
	src: exclude
}).files.forEach((pattern) => {
	if (pattern.included !== false) {
		preprocessors[pattern] = ['webpack'];
	}
});

const reporters = ['brief', 'coverage'];
if (singleRun) {
	reporters.push('coveralls');
}

module.exports = function(config) {
	config.set({
		browsers: ['ChromeHeadless', 'FirefoxHeadless'],
		customLaunchers: {
			FirefoxHeadless: {
				base: 'Firefox',
				flags: ['-headless']
			}
		},
		files: files.files,
		frameworks: ['mocha'],
		preprocessors: preprocessors,
		reporters: reporters,
		briefReporter: {
			renderOnRunCompleteOnly: singleRun
		},
		coverageReporter: {
			type: 'lcov',
			dir: 'coverage/'
		},
		webpack: {
			mode: 'development',
			module: {
				rules: [{
					test: /\.js$/,
					enforce: 'pre',
					exclude: /node_modules/,
					use: [{
						loader: 'eslint-loader',
						options: {
							configFile: '.eslintrc.json',
							cache: true,
							emitWarning: true
						}
					}]
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
