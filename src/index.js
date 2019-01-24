/**
 * With npm
 * ```
 * npm install type-enforcer
 * ```
 *
 * ## Compatibility
 *
 * Requires:
 * - Babel >= 7.2
 *
 * This library uses [@babel/plugin-proposal-class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties) and [@babel/plugin-proposal-private-methods](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-private-methods) so you will need to set up a [babel.config.js](https://babeljs.io/docs/en/config-files#project-wide-configuration) file and set the [rootMode](https://babeljs.io/docs/en/options#rootmode) option to 'upward'.
 *
 * @example
 * ``` javascript
 * // babel.config.js
 * module.exports = function(api) {
 * 	const presets = [['@babel/preset-env']];
 * 	const plugins = [
 * 		'lodash',
 * 		['@babel/plugin-proposal-private-methods', {'loose': true}],
 * 		['@babel/plugin-proposal-class-properties', {'loose': true}]
 * 	];
 *
 * 	api.cache(true);
 *
 * 	return {
 * 		presets,
 * 		plugins
 * 	};
 * };
 * ```
 *
 * ## Docs
 *
 * ### Data Types
 * - [CssSize](docs/CssSize.md)
 * - [DockPoint](docs/DockPoint.md)
 * - [Enum](docs/Enum.md)
 * - [Point](docs/Point.md)
 * - [Queue](docs/Queue.md)
 * - [Thickness](docs/Thickness.md)
 * - [Vector](docs/Vector.md)
 *
 * ### Checks
 * - [checks](docs/checks.md)
 *
 * ### Enforcement
 * - [enforce](docs/enforce.md)
 *
 * ### Methods
 * - [method](docs/method.md)
 *
 * ## Contributing
 *
 * If you add a new type be sure to add an enforce function and a method. When done, add any new types to package.json scripts (docs-newType), and add that to the docs script, then run
 * ```
 * npm run docs
 * ```
 * to generate new docs. If a new file is generated, add a link to it in the description in index.js and run the docs command again
 *
 * @name Installation
 */
export { default as isArray } from './checks/isArray';
export { default as isBoolean } from './checks/isBoolean';
export { default as isCssSize } from './checks/isCssSize';
export { default as isDate } from './checks/isDate';
export { default as isDockPoint } from './checks/isDockPoint';
export { default as isElement } from './checks/isElement';
export { default as isFunc } from './checks/isFunc';
export { default as isInstanceOf } from './checks/isInstanceOf';
export { default as isInt } from './checks/isInt';
export { default as isJson } from './checks/isJson';
export { default as isNumber } from './checks/isNumber';
export { default as isObject } from './checks/isObject';
export { default as isPoint } from './checks/isPoint';
export { default as isRegExp } from './checks/isRegExp';
export { default as isString } from './checks/isString';
export { default as isThickness } from './checks/isThickness';
export { default as isVector } from './checks/isVector';

export * from './types/CssSize';
export { default as CssSize } from './types/CssSize';
export { default as DockPoint } from './types/DockPoint';
export { default as Enum } from './types/Enum';
export { default as Point } from './types/Point';
export { default as Queue } from './types/Queue';
export { default as Thickness } from './types/Thickness';
export { default as Vector } from './types/Vector';

export { default as enforce } from './enforcer/enforce';

export { default as method } from './methods/method';
