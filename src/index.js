/**
 * Type enforcement library for javascript
 *
 * ## Installation
 *
 * With npm
 * ```
 * npm install type-enforcer
 * ```
 *
 * ## Compatibility
 *
 * Requires:
 * - Babel >= 7.2
 * - [@babel/plugin-proposal-class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties)
 * - [@babel/plugin-proposal-private-methods](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-private-methods)
 *
 * ## Notes
 *
 * - Still needs full test coverage
 * - Needs better documentation
 *
 * @name type-enforcer
 */
export { default as CallbackQueue } from './types/CallbackQueue';
export * from './types/CssSize';
export { default as CssSize } from './types/CssSize';
export { default as DockPoint } from './types/DockPoint';
export { default as Enum } from './types/Enum';
export { default as Point } from './types/Point';
export { default as Thickness } from './types/Thickness';
export { default as Vector } from './types/Vector';

export { default as enforce } from './enforcer/enforce';

export { default as method } from './methods/method';
