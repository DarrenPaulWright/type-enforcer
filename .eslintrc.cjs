const { eslintrc, OFF } = require('karma-webpack-bundle');

eslintrc.rules['jsdoc/valid-types'] = OFF;

module.exports = eslintrc;
