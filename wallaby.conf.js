const wallabyWebpack = require('wallaby-webpack');

module.exports = function(wallaby) {
	const webpackPostprocessor = wallabyWebpack();

	return {
		name: 'type-enforcer',
		files: [
			{pattern: 'tests/TestUtil.js', instrument: false, load: false},
			{pattern: 'tests/enforcer/enforceTestUtility.js', instrument: false, load: false},
			{pattern: 'src/**/*.js', instrument: true, load: false}
		],
		tests: [
			{pattern: 'tests/**/*.Test.js', instrument: false, load: false}
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
