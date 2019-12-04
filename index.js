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
 * #### Other
 * - [Enum](docs/Enum.md)
 * - [Queue](docs/Queue.md)
 * - [applySettings](docs/applySettings.md)
 * - [PrivateVars](docs/PrivateVars.md)
 * - [Removable](docs/Removable.md)
 * - [equality checks](docs/equality.md)
 *
 * <br>
 *
 * ### Extending & Modifying Type Enforcer
 *
 * #### Enforcers
 * All enforcers with a "coerce" option also have a static method ".extend" that creates a new enforcer. It accepts two args:
 * - The first arg should be a valid check function that accepts a second "coerce" arg.
 * - The second arg should be a function that coerces a coercible value (as determined by the check function).
 *
 * <br>
 *
 * #### Methods
 * methodAny and all methods that extend it have a static method ".extend" that creates a new method. It accepts two args:
 * - The first arg should be an object with default options. These options override any options in the method being extended.
 * - The second arg (optional) should be a function that gets called when a method is initialized. This function is passed one arg, the options for this method.
 *
 * These methods also have a static method ".defaults" that mutates the default options for that method. For instance, if you would prefer that methodBoolean didn't have a default value of false, then you could use the following:
 * ``` javascript
 * methodBoolean.defaults({init: undefined});
 * ```
 */
export { default as is } from './src/checks/is';
export { default as isArray } from './src/checks/isArray';
export { default as isBoolean } from './src/checks/isBoolean';
export { default as isDate } from './src/checks/isDate';
export { default as isFloat } from './src/checks/isFloat';
export { default as isFunction } from './src/checks/isFunction';
export { default as isInstanceOf } from './src/checks/isInstanceOf';
export { default as isInteger } from './src/checks/isInteger';
export { default as isJson } from './src/checks/isJson';
export { default as isMap } from './src/checks/isMap';
export { default as isNumber } from './src/checks/isNumber';
export { default as isObject } from './src/checks/isObject';
export { default as isRegExp } from './src/checks/isRegExp';
export { default as isSet } from './src/checks/isSet';
export { default as isString } from './src/checks/isString';
export { default as isSymbol } from './src/checks/isSymbol';
export { default as isWeakMap } from './src/checks/isWeakMap';
export { default as isWeakSet } from './src/checks/isWeakSet';

export { default as enforce } from './src/enforcer/enforce';
export { default as enforceArray } from './src/enforcer/enforceArray';
export { default as enforceBoolean } from './src/enforcer/enforceBoolean';
export { default as enforceDate } from './src/enforcer/enforceDate';
export { default as enforceEnum } from './src/enforcer/enforceEnum';
export { default as enforceFloat } from './src/enforcer/enforceFloat';
export { default as enforceFunction } from './src/enforcer/enforceFunction';
export { default as enforceInstanceOf } from './src/enforcer/enforceInstanceOf';
export { default as enforceInteger } from './src/enforcer/enforceInteger';
export { default as enforceMap } from './src/enforcer/enforceMap';
export { default as enforceNumber } from './src/enforcer/enforceNumber';
export { default as enforceObject } from './src/enforcer/enforceObject';
export { default as enforceRegExp } from './src/enforcer/enforceRegExp';
export { default as enforceSet } from './src/enforcer/enforceSet';
export { default as enforceString } from './src/enforcer/enforceString';
export { default as enforceSymbol } from './src/enforcer/enforceSymbol';
export { default as enforceWeakMap } from './src/enforcer/enforceWeakMap';
export { default as enforceWeakSet } from './src/enforcer/enforceWeakSet';

export { default as method } from './src/methods/method';
export { default as methodAny } from './src/methods/methodAny';
export { default as methodArray } from './src/methods/methodArray';
export { default as methodBoolean } from './src/methods/methodBoolean';
export { default as methodDate } from './src/methods/methodDate';
export { default as methodEnum } from './src/methods/methodEnum';
export { default as methodFloat } from './src/methods/methodFloat';
export { default as methodFunction } from './src/methods/methodFunction';
export { default as methodInstanceOf } from './src/methods/methodInstanceOf';
export { default as methodInteger } from './src/methods/methodInteger';
export { default as methodKeyValue } from './src/methods/methodKeyValue';
export { default as methodMap } from './src/methods/methodMap';
export { default as methodNumber } from './src/methods/methodNumber';
export { default as methodObject } from './src/methods/methodObject';
export { default as methodQueue } from './src/methods/methodQueue';
export { default as methodRegExp } from './src/methods/methodRegExp';
export { default as methodSet } from './src/methods/methodSet';
export { default as methodString } from './src/methods/methodString';
export { default as methodSymbol } from './src/methods/methodSymbol';
export { default as methodWeakMap } from './src/methods/methodWeakMap';
export { default as methodWeakSet } from './src/methods/methodWeakSet';

export { default as Enum } from './src/Enum';
export { default as Queue } from './src/Queue';

export { default as Removable } from './src/Removable';

export { default as applySettings } from './src/utility/applySettings';
export { default as castArray } from './src/utility/castArray';
export { default as PrivateVars } from './src/utility/PrivateVars';

export { default as abstractEquality } from './src/equality/abstractEquality';
export { default as strictEquality } from './src/equality/strictEquality';
export { default as sameValue } from './src/equality/sameValue';
export { default as sameValueZero } from './src/equality/sameValueZero';
