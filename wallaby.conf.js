const wallabyConfig = require('karma-webpack-bundle').wallabyConfig;
const testRunnerConfig = require('./testRunner.config.js');

module.exports = wallabyConfig(testRunnerConfig, {
	name: 'type-enforcer'
});
