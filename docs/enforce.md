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


<br><a name="enforce"></a>

## enforce : <code>object</code>
> Utility functions for enforcing data types.

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

// Or import individual functions
import { enforceBoolean, enforceString } from 'type-enforcer';
```

##### Extending enforcers
All enforcers with a "coerce" option also have a static method ".extend" that creates a new enforcer. It accepts two args:
- The first arg should be a valid check function that accepts a second "coerce" arg.
- The second arg should be a function that coerces a coercible value (as determined by the check function).

<br>

* [enforce](#enforce) : <code>object</code>
    * [.array(value, alt, [coerce])](#enforce.array) ⇒ <code>Array.&lt;ReturnType&gt;</code>
    * [.boolean(value, alt, [coerce])](#enforce.boolean) ⇒ <code>boolean</code>
    * [.date(value, alt, [coerce])](#enforce.date) ⇒ <code>Date</code>
    * [.enum(value, enumerable, alt)](#enforce.enum) ⇒ <code>string</code>
    * [.float(value, alt, [coerce], [minValue], [maxValue])](#enforce.float) ⇒ <code>number</code>
    * [.function(value, alt)](#enforce.function) ⇒ <code>function</code>
    * [.instanceOf(value, constructor, alt)](#enforce.instanceOf) ⇒ <code>object</code>
    * [.integer(value, alt, [coerce], [minValue], [maxValue])](#enforce.integer) ⇒ <code>number</code>
    * [.map(value, alt, [coerce])](#enforce.map) ⇒ <code>object</code>
    * [.number(value, alt, [coerce], [minValue], [maxValue])](#enforce.number) ⇒ <code>number</code>
    * [.object(value, alt, [coerce])](#enforce.object) ⇒ <code>T</code>
    * [.promise(value, alt, [coerce])](#enforce.promise) ⇒ <code>Promise</code>
    * [.regExp(value, alt, [coerce])](#enforce.regExp) ⇒ <code>RegExp</code>
    * [.set(value, alt, [coerce])](#enforce.set) ⇒ <code>object</code>
    * [.string(value, alt, [coerce])](#enforce.string) ⇒ <code>string</code>
    * [.symbol(value, alt, [coerce])](#enforce.symbol) ⇒ <code>object</code>
    * [.weakMap(value, alt, [coerce])](#enforce.weakMap) ⇒ <code>object</code>
    * [.weakSet(value, alt, [coerce])](#enforce.weakSet) ⇒ <code>object</code>


<br><a name="enforce.array"></a>

### enforce.array(value, alt, [coerce]) ⇒ <code>Array.&lt;ReturnType&gt;</code>
> Enforce that a value is an array. Uses [isArray](docs/checks.md#isArray).

**Alias:** `enforceArray`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  |  |
| alt | <code>Array.&lt;ReturnType&gt;</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

enforce.array(['a string'], ['alt']);
// => ['a string']

enforce.array('[]', ['alt']);
// => ['alt']

enforce.array('[]', ['alt'], true);
// => []
```

<br><a name="enforce.boolean"></a>

### enforce.boolean(value, alt, [coerce]) ⇒ <code>boolean</code>
> Enforce that a value is a boolean. Uses [isBoolean](docs/checks.md#isBoolean).

**Alias:** `enforceBoolean`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  |  |
| alt | <code>boolean</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

enforce.boolean(false, true);
// => false

enforce.boolean('', true);
// => true

enforce.boolean('', true, true);
// => false
```

<br><a name="enforce.date"></a>

### enforce.date(value, alt, [coerce]) ⇒ <code>Date</code>
> Enforce that a value is a date. Uses [isDate](docs/checks.md#isDate).

**Alias:** `enforceDate`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  |  |
| alt | <code>Date</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

enforce.date(new Date('10/12/1980'), new Date('1/1/2000'));
// => date of 10/12/1980

enforce.date('10/12/1980', new Date('1/1/2000'));
// => date of 1/1/2000

enforce.date('10/12/1980', new Date('1/1/2000'), true);
// => date of 10/12/1980
```

<br><a name="enforce.enum"></a>

### enforce.enum(value, enumerable, alt) ⇒ <code>string</code>
> Enforce that a value exists in the provided [Enum](docs/Enum.md).

**Alias:** `enforceEnum`


| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to enforce. |
| enumerable | <code>Enum</code> | A valid enum. |
| alt | <code>string</code> | Returned if the value is not the correct type. |

**Example**  
``` javascript
import { enforce, Enum } from 'type-enforcer';

const values = new Enum({
    a: 'item a',
    b: 'item b'
});

enforce.enum(values.a, values, values.b);
// => 'item a'

enforce.enum(values.c, values, values.b);
// => 'item b'
```

<br><a name="enforce.float"></a>

### enforce.float(value, alt, [coerce], [minValue], [maxValue]) ⇒ <code>number</code>
> Enforce that a value is a finite float. Uses [isFloat](docs/checks.md#isFloat).

**Alias:** `enforceFloat`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  |  |
| alt | <code>number</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then coerce the value when possible |
| [minValue] | <code>number</code> |  |  |
| [maxValue] | <code>number</code> |  |  |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

enforce.float(3.14159, 13.2);
// => 3.14159

enforce.float('3.14159', 13.2);
// => 13.2

enforce.float('3.14159', 13.2, true);
// => 3.14159
```

<br><a name="enforce.function"></a>

### enforce.function(value, alt) ⇒ <code>function</code>
> Enforce that a value is a function. Uses [isFunction](docs/checks.md#isFunction).

**Alias:** `enforceFunction`


| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to enforce. |
| alt | <code>function</code> | Returned if the value is not the correct type. |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

const a = () => {};
const b = () => {};

enforce.function(a, b);
// => a

enforce.function('', b);
// => b
```

<br><a name="enforce.instanceOf"></a>

### enforce.instanceOf(value, constructor, alt) ⇒ <code>object</code>
> Enforce that a value is an instance of a constructor. Uses [isInstanceOf](docs/checks.md#isInstanceOf).

**Alias:** `enforceInstanceOf`


| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | The value to enforce. |
| constructor | <code>function</code> | A constructor function. |
| alt | <code>object</code> | Returned if the value is not the correct type. |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

class A {};
class C {};

const a = new A();
const b = new A();
const c = new C();

enforce.instanceOf(b, A, a);
 => b

enforce.instanceOf(c, A, a);
 => a
```

<br><a name="enforce.integer"></a>

### enforce.integer(value, alt, [coerce], [minValue], [maxValue]) ⇒ <code>number</code>
> Enforce that a value is a finite integer. Uses [isInteger](docs/checks.md#isInteger).

**Alias:** `enforceInteger`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  |  |
| alt | <code>number</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then coerce the value when possible |
| [minValue] | <code>number</code> |  |  |
| [maxValue] | <code>number</code> |  |  |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

enforce.integer(42, 12);
// => 42

enforce.integer('42', 12);
// => 12

enforce.integer('42', 12, true);
// => 42
```

<br><a name="enforce.map"></a>

### enforce.map(value, alt, [coerce]) ⇒ <code>object</code>
> Enforce that a value is a Map. Uses [isMap](docs/checks.md#isMap).

**Alias:** `enforceMap`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  |  |
| alt | <code>Map</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

const a = new Map();
const b = new Map();

enforce.map(a, b);
// => a

enforce.map('map', b);
// => b
```

<br><a name="enforce.number"></a>

### enforce.number(value, alt, [coerce], [minValue], [maxValue]) ⇒ <code>number</code>
> Enforce that a value is a number (excluding NaN). Uses [isNumber](docs/checks.md#isNumber).

**Alias:** `enforceNumber`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  |  |
| alt | <code>number</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then coerce the value when possible |
| [minValue] | <code>number</code> | <code>-Infinity</code> |  |
| [maxValue] | <code>number</code> | <code>Infinity</code> |  |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

enforce.number(3.14159, 13.2);
// => 3.14159

enforce.number('3.14159', 13.2);
// => 13.2

enforce.number('3.14159', 13.2, true);
// => 3.14159

enforce.number(Infinity, 13.2, true);
// => Infinity
```

<br><a name="enforce.object"></a>

### enforce.object(value, alt, [coerce]) ⇒ <code>T</code>
> Enforce that a value is an object. Uses [isObject](docs/checks.md#isObject).

**Alias:** `enforceObject`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  |  |
| alt | <code>T</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

const a = {};
const b = {};

enforce.object(a, b);
// => a

enforce.object('{}', b);
// => b

enforce.object('{}', b, true);
// => {}
```

<br><a name="enforce.promise"></a>

### enforce.promise(value, alt, [coerce]) ⇒ <code>Promise</code>
> Enforce that a value is a Promise. Uses [isPromise](docs/checks.md#isPromise).

**Alias:** `enforcePromise`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  |  |
| alt | <code>Promise</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then coerce the value if it's a function. Functions are wrapped in a Promise that resolves with the result of the function. |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

const a = new Promise((resolve) => resolve());
const b = new Promise((resolve) => resolve());

enforce.promise(a, b);
// => a

enforce.promise('', b);
// => b
```

<br><a name="enforce.regExp"></a>

### enforce.regExp(value, alt, [coerce]) ⇒ <code>RegExp</code>
> Enforce that a value is a RegExp. Uses [isRegExp](docs/checks.md#isRegExp).

**Alias:** `enforceRegExp`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  |  |
| alt | <code>RegExp</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

enforce.regExp(/*+/g, /[a-z]+/);
// => /*+/g

enforce.regExp('/*+/g', /[a-z]+/);
// => /[a-z]+/

enforce.regExp('/*+/g', /[a-z]+/, true);
// => /*+/g
```

<br><a name="enforce.set"></a>

### enforce.set(value, alt, [coerce]) ⇒ <code>object</code>
> Enforce that a value is a Set. Uses [isSet](docs/checks.md#isSet).

**Alias:** `enforceSet`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  |  |
| alt | <code>Set</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

const a = new Set();
const b = new Set();

enforce.set(a, b);
// => a

enforce.set('set', b);
// => b

enforce.set([1, 2], b, true);
// => Set with 1 and 2
```

<br><a name="enforce.string"></a>

### enforce.string(value, alt, [coerce]) ⇒ <code>string</code>
> Enforce that a value is a string. Uses [isString](docs/checks.md#isString).

**Alias:** `enforceString`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  |  |
| alt | <code>string</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

enforce.string('a', 'b');
// => 'a'

enforce.string(new Point(), 'b');
// => 'b'

enforce.string(new Point(), 'b', true);
// => '0,0'
```

<br><a name="enforce.symbol"></a>

### enforce.symbol(value, alt, [coerce]) ⇒ <code>object</code>
> Enforce that a value is a Symbol. Uses [isSymbol](docs/checks.md#isSymbol).

**Alias:** `enforceSymbol`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  |  |
| alt | <code>symbol</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

enforce.symbol(Symbol('label'), Symbol('alt'));
// => Symbol(label)

enforce.symbol('symbol', Symbol('alt'));
// => Symbol('alt')

enforce.symbol('label', Symbol('alt'), true);
// => Symbol(label)
```

<br><a name="enforce.weakMap"></a>

### enforce.weakMap(value, alt, [coerce]) ⇒ <code>object</code>
> Enforce that a value is a WeakMap. Uses [isWeakMap](docs/checks.md#isWeakMap).

**Alias:** `enforceWeakMap`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  |  |
| alt | <code>WeakMap</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

const a = new WeakMap();
const b = new WeakMap();

enforce.weakMap(a, b);
// => a

enforce.weakMap('weakMap', b);
// => b

enforce.weakMap([[a, 12]], new WeakMap(), true);
// => WeakMap with key a set to 12
```

<br><a name="enforce.weakSet"></a>

### enforce.weakSet(value, alt, [coerce]) ⇒ <code>object</code>
> Enforce that a value is a WeakSet. Uses [isWeakSet](docs/checks.md#isWeakSet).

**Alias:** `enforceWeakSet`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>unknown</code> |  |  |
| alt | <code>WeakSet</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

const a = new WeakSet();
const b = new WeakSet();

enforce.weakSet(a, b);
// => a

enforce.weakSet('weakSet', b);
// => b

enforce.weakSet([new Map()], b, true);
// => WeakSet with a Map in it
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
