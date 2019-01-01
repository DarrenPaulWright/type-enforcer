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
 * ## Contributing
 *
 * If you would like to help out, type-enforcer still needs full test coverage and more data types. If you add a new type be sure to add an enforce function and a method. When done, add any new types to package.json scripts, docs-newType, and add that to the docs script, then run
 * ```
 * npm run docs
 * ```
 * to generate new docs. If a new file is generated, add a link to it in the description in index.js
 *
 * ## Docs
 *
 * ### Data Types
 * - [CssSize](https://github.com/darrenpaulwright/type-enforcer/blob/master/docs/CssSize.md)
 * - [DockPoint](https://github.com/darrenpaulwright/type-enforcer/blob/master/docs/DockPoint.md)
 * - [Enum](https://github.com/darrenpaulwright/type-enforcer/blob/master/docs/Enum.md)
 * - [Point](https://github.com/darrenpaulwright/type-enforcer/blob/master/docs/Point.md)
 * - [Queue](https://github.com/darrenpaulwright/type-enforcer/blob/master/docs/Queue.md)
 * - [Thickness](https://github.com/darrenpaulwright/type-enforcer/blob/master/docs/Thickness.md)
 * - [Vector](https://github.com/darrenpaulwright/type-enforcer/blob/master/docs/Vector.md)
 *
 * ### Enforcement
 * - [enforce](https://github.com/darrenpaulwright/type-enforcer/blob/master/docs/enforce.md)
 *
 * ### Methods
 * - [method](https://github.com/darrenpaulwright/type-enforcer/blob/master/docs/method.md)
 *
 * @name Installation
 */
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
