const karmaConfig = require('karma-webpack-bundle').karmaConfig;
const testRunnerConfig = require('./testRunner.config.js');

module.exports = karmaConfig(testRunnerConfig);
