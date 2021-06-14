const { wallabyConfig } = require('karma-webpack-bundle');
const { name } = require('./package.json');

module.exports = wallabyConfig(undefined, { name });
