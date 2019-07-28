/**
 * @name Installation
 * @summary
 *
 * ```
 * npm install type-enforcer
 * ```
 * _Requires Babel 7.2+_
 */

/**
 * @name Docs
 * @summary
 * #### Extra Data Types
 * - [CssSize](docs/CssSize.md)
 * - [DockPoint](docs/DockPoint.md)
 * - [Enum](docs/Enum.md)
 * - [Point](docs/Point.md)
 * - [Queue](docs/Queue.md)
 * - [Thickness](docs/Thickness.md)
 * - [Vector](docs/Vector.md)
 *
 * #### Type Checks
 * - [checks](docs/checks.md)
 *
 * #### Type Enforcement
 * - [enforce](docs/enforce.md)
 * - [castArray](docs/castArray.md)
 *
 * #### Type Enforcing Methods
 * - [method](docs/method.md)
 *
 * #### Mixins
 * - [Removable](docs/Removable.md)
 *
 * #### Other
 * - [applySettings](docs/applySettings.md)
 * - [privateProp](docs/privateProp.md)
 * - [equality checks](docs/equality.md)
 */
export { default as is } from './checks/is';
export { default as isArray } from './checks/types/isArray';
export { default as isBoolean } from './checks/types/isBoolean';
export { default as isCssSize } from './checks/types/isCssSize';
export { default as isDate } from './checks/types/isDate';
export { default as isDockPoint } from './checks/types/isDockPoint';
export { default as isElement } from './checks/types/isElement';
export { default as isFloat } from './checks/types/isFloat';
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

export { default as enforce } from './enforcer/enforce';
export { default as enforceArray } from './enforcer/types/enforceArray';
export { default as enforceBoolean } from './enforcer/types/enforceBoolean';
export { default as enforceCssSize } from './enforcer/types/enforceCssSize';
export { default as enforceDate } from './enforcer/types/enforceDate';
export { default as enforceDockPoint } from './enforcer/types/enforceDockPoint';
export { default as enforceElement } from './enforcer/types/enforceElement';
export { default as enforceEnum } from './enforcer/types/enforceEnum';
export { default as enforceFloat } from './enforcer/types/enforceFloat';
export { default as enforceFunction } from './enforcer/types/enforceFunction';
export { default as enforceInstance } from './enforcer/types/enforceInstance';
export { default as enforceInteger } from './enforcer/types/enforceInteger';
export { default as enforceNumber } from './enforcer/types/enforceNumber';
export { default as enforceObject } from './enforcer/types/enforceObject';
export { default as enforcePoint } from './enforcer/types/enforcePoint';
export { default as enforceRegExp } from './enforcer/types/enforceRegExp';
export { default as enforceString } from './enforcer/types/enforceString';
export { default as enforceThickness } from './enforcer/types/enforceThickness';
export { default as enforceVector } from './enforcer/types/enforceVector';

export { default as method } from './methods/method';
export { default as methodAny } from './methods/types/methodAny';
export { default as methodArray } from './methods/types/methodArray';
export { default as methodBoolean } from './methods/types/methodBoolean';
export { default as methodCssSize } from './methods/types/methodCssSize';
export { default as methodDate } from './methods/types/methodDate';
export { default as methodDockPoint } from './methods/types/methodDockPoint';
export { default as methodElement } from './methods/types/methodElement';
export { default as methodEnum } from './methods/types/methodEnum';
export { default as methodFloat } from './methods/types/methodFloat';
export { default as methodFunction } from './methods/types/methodFunction';
export { default as methodInstance } from './methods/types/methodInstance';
export { default as methodInteger } from './methods/types/methodInteger';
export { default as methodKeyValue } from './methods/types/methodKeyValue';
export { default as methodNumber } from './methods/types/methodNumber';
export { default as methodObject } from './methods/types/methodObject';
export { default as methodPoint } from './methods/types/methodPoint';
export { default as methodQueue } from './methods/types/methodQueue';
export { default as methodRegExp } from './methods/types/methodRegExp';
export { default as methodString } from './methods/types/methodString';
export { default as methodThickness } from './methods/types/methodThickness';
export { default as methodVector } from './methods/types/methodVector';

export * from './types/CssSize';
export { default as CssSize } from './types/CssSize';
export { default as DockPoint } from './types/DockPoint';
export { default as Enum } from './types/Enum';
export { default as Point } from './types/Point';
export { default as Queue } from './types/Queue';
export { default as Thickness } from './types/Thickness';
export { default as Vector } from './types/Vector';

export { default as Removable } from './mixins/Removable';

export { default as applySettings } from './utility/applySettings';
export { default as castArray } from './utility/castArray';
export { default as privateProp } from './utility/privateProp';

export { default as abstractEquality } from './equality/abstractEquality';
export { default as strictEquality } from './equality/strictEquality';
export { default as sameValue } from './equality/sameValue';
export { default as sameValueZero } from './equality/sameValueZero';
