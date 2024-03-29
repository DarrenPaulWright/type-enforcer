# Type Enforcer

> A type enforcement library for javascript
>
> [![npm][npm]][npm-url]
[![build][build]][build-url]
[![coverage][coverage]][coverage-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![license][license]][license-url]


<br><a name="is"></a>

## is : <code>object</code>
> Utility functions for checking if a value is a particular data type.

**Example**  
``` javascript
import { is } from 'type-enforcer';

// Or import individual functions
import { isBoolean, isString } from 'type-enforcer';
```

* [is](#is) : <code>object</code>
    * [.array(value, [coerce])](#is.array) ⇒ <code>boolean</code>
    * [.boolean(value, [coerce])](#is.boolean) ⇒ <code>boolean</code>
    * [.date(value, [coerce])](#is.date) ⇒ <code>boolean</code>
    * [.float(value, [coerce])](#is.float) ⇒ <code>boolean</code>
    * [.function(value)](#is.function) ⇒ <code>boolean</code>
    * [.instanceOf(object, constructor)](#is.instanceOf) ⇒ <code>boolean</code>
    * [.integer(value, [coerce])](#is.integer) ⇒ <code>boolean</code>
    * [.json(value)](#is.json) ⇒ <code>boolean</code>
    * [.map(value, [coerce])](#is.map) ⇒ <code>boolean</code>
    * [.number(value, [coerce])](#is.number) ⇒ <code>boolean</code>
    * [.object(value, [coerce])](#is.object) ⇒ <code>boolean</code>
    * [.promise(value, [coerce])](#is.promise) ⇒ <code>boolean</code>
    * [.regExp(value, [coerce])](#is.regExp) ⇒ <code>boolean</code>
    * [.set(value, [coerce])](#is.set) ⇒ <code>boolean</code>
    * [.string(value, [coerce])](#is.string) ⇒ <code>boolean</code>
    * [.symbol(value, [coerce])](#is.symbol) ⇒ <code>boolean</code>
    * [.weakMap(value, [coerce])](#is.weakMap) ⇒ <code>boolean</code>
    * [.weakSet(value, [coerce])](#is.weakSet) ⇒ <code>boolean</code>


<br><a name="is.array"></a>

### is.array(value, [coerce]) ⇒ <code>boolean</code>
> Check if a value is an array.

**Alias:** `isArray`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  | The value to check. |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then see if the value can be coerced into an array. |

**Example**  
``` javascript
import { isArray } from 'type-enforcer';

isArray([]);
// => true

isArray('[]');
// => false

isArray('[]', true);
// => true
```

<br><a name="is.boolean"></a>

### is.boolean(value, [coerce]) ⇒ <code>boolean</code>
> Check if a value is a boolean.

**Alias:** `isBoolean`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  | The value to check. |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then see if the value can be coerced into a boolean. Always returns true, as _everything_ can be coerced into a boolean. |

**Example**  
``` javascript
import { isBoolean } from 'type-enforcer';

isBoolean(false);
// => true

isBoolean('a string');
// => false

isBoolean('a string', true);
// => true
```

<br><a name="is.date"></a>

### is.date(value, [coerce]) ⇒ <code>boolean</code>
> Check if a value is a date.

**Alias:** `isDate`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  | The value to check. |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then see if the value can be coerced into a Date. |

**Example**  
``` javascript
import { isDate } from 'type-enforcer';

isDate(new Date());
// => true

isDate('10/12/1980');
// => false

isDate('10/12/1980', true);
// => true
```

<br><a name="is.float"></a>

### is.float(value, [coerce]) ⇒ <code>boolean</code>
> Check if a value is a finite float.

**Alias:** `isFloat`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  | The value to check. |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then see if the value can be coerced into a float. |

**Example**  
``` javascript
import { isFloat } from 'type-enforcer';

isFloat(3.14159);
// => true

isFloat('3.14159');
// => false

isFloat('3.14159', true);
// => true
```

<br><a name="is.function"></a>

### is.function(value) ⇒ <code>boolean</code>
> Check if a value is a function.

**Alias:** `isFunction`


| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to check. |

**Example**  
``` javascript
import { isFunction } from 'type-enforcer';

isFunction(() => {});
// => true
```

<br><a name="is.instanceOf"></a>

### is.instanceOf(object, constructor) ⇒ <code>boolean</code>
> Check if a value is an instance of a constructor. Fixes issues with native instanceOf and primitives Boolean, Number, String, and Symbol (see example).

**Alias:** `isInstanceOf`


| Param | Type | Description |
| --- | --- | --- |
| object | <code>unknown</code> | The object to check. |
| constructor | <code>function</code> | The constructor function. |

**Example**  
``` javascript
import { isInstanceOf } from 'type-enforcer';

isInstanceOf(false, Boolean);
 => true

false instanceof Boolean
 => false
isInstanceOf(false, Boolean);
 => true

42 instanceof Number
 => false
isInstanceOf(42, Number);
 => true

'a string' instanceof String
 => false
isInstanceOf('a string', String);
 => true

Symbol() instanceof Symbol
 => false
isInstanceOf(Symbol(), Symbol);
 => true
```

<br><a name="is.integer"></a>

### is.integer(value, [coerce]) ⇒ <code>boolean</code>
> Check if a value is a finite integer.

**Alias:** `isInteger`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  | The value to check. |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then see if the value can be coerced into an Integer. |

**Example**  
``` javascript
import { isInteger } from 'type-enforcer';

isInteger(42);
// => true

isInteger('42');
// => false

isInteger('42', true);
// => true

isInteger('42.5', true);
// => false
```

<br><a name="is.json"></a>

### is.json(value) ⇒ <code>boolean</code>
> Check if a value can be parsed as JSON.

**Alias:** `isJson`


| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to check. |

**Example**  
``` javascript
import { isJson } from 'type-enforcer';
```

<br><a name="is.map"></a>

### is.map(value, [coerce]) ⇒ <code>boolean</code>
> Check if a value is a Map.

**Alias:** `isMap`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  | The value to check. |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then see if the value can be coerced into a Map. Objects or Strings that can be coerced into Objects can be coerced into Maps, as well as anything that can be coerced into a WeakMap. |

**Example**  
``` javascript
import { isMap } from 'type-enforcer';

isMap(new Map());
// => true

isMap(new Date());
// => false

isMap({'a': 12}, new Map(), true);
// => Map with key 'a' set to 12
```

<br><a name="is.number"></a>

### is.number(value, [coerce]) ⇒ <code>boolean</code>
> Check if a value is a number.

**Alias:** `isNumber`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  | The value to check. |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then see if the value can be coerced into a Number. |

**Example**  
``` javascript
import { isNumber } from 'type-enforcer';

isNumber(3.14159);
// => true

isNumber('3.14159');
// => false

isNumber('3.14159', true);
// => true
```

<br><a name="is.object"></a>

### is.object(value, [coerce]) ⇒ <code>boolean</code>
> Check if a value is a plain object.

**Alias:** `isObject`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  | The value to check. |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then see if the value can be coerced into an Object. |

**Example**  
``` javascript
import { isObject } from 'type-enforcer';

isObject({});
// => true

isObject('{}');
// => false

isObject('{}', true);
// => true
```

<br><a name="is.promise"></a>

### is.promise(value, [coerce]) ⇒ <code>boolean</code>
> Check if a value is a plain object.

**Alias:** `isPromise`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  | The value to check. |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then see if the value can be coerced into a Promise. Functions can be coerced into Promises. |

**Example**  
``` javascript
import { isPromise } from 'type-enforcer';

isPromise(new Promise());
// => true

isPromise('');
// => false

isObject(() => {}, true);
// => true
```

<br><a name="is.regExp"></a>

### is.regExp(value, [coerce]) ⇒ <code>boolean</code>
> Check if a value is a RegExp.

**Alias:** `isRegExp`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  | The value to check. |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then see if the value can be coerced into a RegExp. |

**Example**  
``` javascript
import { isRegExp } from 'type-enforcer';

isRegExp(/*+/g);
// => true

isRegExp('/*+/g');
// => false

isRegExp('/*+/g', true);
// => true
```

<br><a name="is.set"></a>

### is.set(value, [coerce]) ⇒ <code>boolean</code>
> Check if a value is a Set.

**Alias:** `isSet`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  | The value to check. |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then see if the value can be coerced into a Set. Arrays or Strings that can be coerced into Arrays can be coerced into Sets. |

**Example**  
``` javascript
import { isSet } from 'type-enforcer';

isSet(new Set());
// => true

isSet(new Date());
// => false

isSet([1, 2], new Set(), true);
// => Set with key 1 and 2
```

<br><a name="is.string"></a>

### is.string(value, [coerce]) ⇒ <code>boolean</code>
> Check if a value is a string.

**Alias:** `isString`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  | The value to check. |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then see if the value can be coerced into a string. |

**Example**  
``` javascript
import { isString } from 'type-enforcer';

isString('type');
// => true

isString(new Date());
// => false

isString(new Date(), true);
// => true
```

<br><a name="is.symbol"></a>

### is.symbol(value, [coerce]) ⇒ <code>boolean</code>
> Check if a value is a Symbol.

**Alias:** `isSymbol`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  | The value to check. |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then see if the value can be coerced into a Symbol. Anything that can be coerced into a string can also be coerced into a Symbol. |

**Example**  
``` javascript
import { isSymbol } from 'type-enforcer';

isSymbol(Symbol());
// => true

isSymbol(new Date());
// => false

isSymbol('string', true);
// => true
```

<br><a name="is.weakMap"></a>

### is.weakMap(value, [coerce]) ⇒ <code>boolean</code>
> Check if a value is a WeakMap.

**Alias:** `isWeakMap`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  | The value to check. |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then see if the value can be coerced into a WeakMap. Must be an array of arrays, each inner array must be length 2, and the first item of each inner array must be an object to be coerced into a WeakMap. |

**Example**  
``` javascript
import { isWeakMap } from 'type-enforcer';

const a = {};

isWeakMap(new WeakMap());
// => true

isWeakMap(new Date());
// => false

isWeakMap([[a, 12]], true);
// => true
```

<br><a name="is.weakSet"></a>

### is.weakSet(value, [coerce]) ⇒ <code>boolean</code>
> Check if a value is a WeakSet.

**Alias:** `isWeakSet`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  | The value to check. |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then see if the value can be coerced into a WeakSet. Arrays of objects can be coerced into WeakSets. |

**Example**  
``` javascript
import { isWeakSet } from 'type-enforcer';

const a = new Map();

isWeakSet(new WeakSet());
// => true

isWeakSet(new Date());
// => false

isWeakSet([a], new WeakSet(), true);
// => WeakSet with a
```

[npm]: https://img.shields.io/npm/v/type-enforcer.svg
[npm-url]: https://npmjs.com/package/type-enforcer
[build]: https://travis-ci.org/DarrenPaulWright/type-enforcer.svg?branch&#x3D;master
[build-url]: https://travis-ci.org/DarrenPaulWright/type-enforcer
[coverage]: https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer/badge.svg?branch&#x3D;master
[coverage-url]: https://coveralls.io/github/DarrenPaulWright/type-enforcer?branch&#x3D;master
[deps]: https://david-dm.org/DarrenPaulWright/type-enforcer.svg
[deps-url]: https://david-dm.org/DarrenPaulWright/type-enforcer
[size]: https://packagephobia.now.sh/badge?p&#x3D;type-enforcer
[size-url]: https://packagephobia.now.sh/result?p&#x3D;type-enforcer
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/type-enforcer.svg
[license-url]: https://npmjs.com/package/type-enforcer/LICENSE.md
