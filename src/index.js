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
 * - [Enum](docs/Enum.md)
 * - [Queue](docs/Queue.md)
 * - [applySettings](docs/applySettings.md)
 * - [PrivateVars](docs/PrivateVars.md)
 * - [equality checks](docs/equality.md)
 */
export { default as is } from './checks/is';
export { default as isArray } from './checks/isArray';
export { default as isBoolean } from './checks/isBoolean';
export { default as isDate } from './checks/isDate';
export { default as isFloat } from './checks/isFloat';
export { default as isFunction } from './checks/isFunction';
export { default as isInstanceOf } from './checks/isInstanceOf';
export { default as isInteger } from './checks/isInteger';
export { default as isJson } from './checks/isJson';
export { default as isMap } from './checks/isMap';
export { default as isNumber } from './checks/isNumber';
export { default as isObject } from './checks/isObject';
export { default as isRegExp } from './checks/isRegExp';
export { default as isSet } from './checks/isSet';
export { default as isString } from './checks/isString';
export { default as isSymbol } from './checks/isSymbol';
export { default as isWeakMap } from './checks/isWeakMap';

export { default as enforce } from './enforcer/enforce';
export { default as enforceArray } from './enforcer/enforceArray';
export { default as enforceBoolean } from './enforcer/enforceBoolean';
export { default as enforceDate } from './enforcer/enforceDate';
export { default as enforceEnum } from './enforcer/enforceEnum';
export { default as enforceFloat } from './enforcer/enforceFloat';
export { default as enforceFunction } from './enforcer/enforceFunction';
export { default as enforceInstanceOf } from './enforcer/enforceInstanceOf';
export { default as enforceInteger } from './enforcer/enforceInteger';
export { default as enforceMap } from './enforcer/enforceMap';
export { default as enforceNumber } from './enforcer/enforceNumber';
export { default as enforceObject } from './enforcer/enforceObject';
export { default as enforceRegExp } from './enforcer/enforceRegExp';
export { default as enforceSet } from './enforcer/enforceSet';
export { default as enforceString } from './enforcer/enforceString';
export { default as enforceSymbol } from './enforcer/enforceSymbol';
export { default as enforceWeakMap } from './enforcer/enforceWeakMap';

export { default as method } from './methods/method';
export { default as methodAny } from './methods/methodAny';
export { default as methodArray } from './methods/methodArray';
export { default as methodBoolean } from './methods/methodBoolean';
export { default as methodDate } from './methods/methodDate';
export { default as methodEnum } from './methods/methodEnum';
export { default as methodFloat } from './methods/methodFloat';
export { default as methodFunction } from './methods/methodFunction';
export { default as methodInstanceOf } from './methods/methodInstanceOf';
export { default as methodInteger } from './methods/methodInteger';
export { default as methodKeyValue } from './methods/methodKeyValue';
export { default as methodMap } from './methods/methodMap';
export { default as methodNumber } from './methods/methodNumber';
export { default as methodObject } from './methods/methodObject';
export { default as methodQueue } from './methods/methodQueue';
export { default as methodRegExp } from './methods/methodRegExp';
export { default as methodSet } from './methods/methodSet';
export { default as methodString } from './methods/methodString';
export { default as methodSymbol } from './methods/methodSymbol';
export { default as methodWeakMap } from './methods/methodWeakMap';

export { default as Enum } from './Enum';
export { default as Queue } from './Queue';

export { default as Removable } from './Removable';

export { default as applySettings } from './utility/applySettings';
export { default as castArray } from './utility/castArray';
export { default as PrivateVars } from './utility/PrivateVars';

export { default as abstractEquality } from './equality/abstractEquality';
export { default as strictEquality } from './equality/strictEquality';
export { default as sameValue } from './equality/sameValue';
export { default as sameValueZero } from './equality/sameValueZero';
