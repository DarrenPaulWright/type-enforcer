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
export { default as is } from './checks/is';
export { default as isArray } from './checks/types/isArray';
export { default as isBoolean } from './checks/types/isBoolean';
export { default as isCssSize } from './checks/types/isCssSize';
export { default as isDate } from './checks/types/isDate';
export { default as isDockPoint } from './checks/types/isDockPoint';
export { default as isElement } from './checks/types/isElement';
export { default as isFunction } from './checks/types/isFunction';
export { default as isInstanceOf } from './checks/types/isInstanceOf';
export { default as isInteger } from './checks/types/isInteger';
export { default as isJson } from './checks/types/isJson';
export { default as isNumber } from './checks/types/isNumber';
export { default as isObject } from './checks/types/isObject';
export { default as isPoint } from './checks/types/isPoint';
export { default as isRegExp } from './checks/types/isRegExp';
export { default as isString } from './checks/types/isString';
export { default as isThickness } from './checks/types/isThickness';
export { default as isVector } from './checks/types/isVector';


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
