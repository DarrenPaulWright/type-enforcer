# type-enforcer
[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/type-enforcer?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile=package.json)

Type enforcement library for javascript

<a name="enforce"></a>

## enforce : <code>object</code>
Utility functions for enforcing data types.

## Usage
``` javascript
import { enforce } from 'type-enforcer';
```
Or import individual functions
``` javascript
import { enforceString } from 'type-enforcer';
```

**Kind**: global typedef  

* [enforce](#enforce) : <code>object</code>
    * [.array(value, alt, [coerce])](#enforce.array) ⇒ <code>Array</code>
    * [.boolean(value, alt, [coerce])](#enforce.boolean) ⇒ <code>Boolean</code>
    * [.cssSize(value, alt, [coerce])](#enforce.cssSize) ⇒ <code>CssSize</code>
    * [.date(value, alt, [coerce])](#enforce.date) ⇒ <code>Date</code>
    * [.dockPoint(value, alt, [coerce])](#enforce.dockPoint) ⇒ <code>DockPoint</code>
    * [.element(value, alt)](#enforce.element) ⇒ <code>Element</code>
    * [.enum(value, enumerable, alt)](#enforce.enum) ⇒ <code>String</code>
    * [.function(value, alt)](#enforce.function) ⇒ <code>function</code>
    * [.instance(value, constructor, alt)](#enforce.instance) ⇒ <code>Object</code>
    * [.integer(value, alt, [coerce], [minValue], [maxValue])](#enforce.integer) ⇒ <code>int</code>
    * [.number(value, alt, [coerce], [minValue], [maxValue])](#enforce.number) ⇒ <code>Number</code>
    * [.object(value, alt, [coerce])](#enforce.object) ⇒ <code>Object</code>
    * [.point(value, alt, [coerce])](#enforce.point) ⇒ <code>Point</code>
    * [.regExp(value, alt, [coerce])](#enforce.regExp) ⇒ <code>RegExp</code>
    * [.string(value, alt, [coerce])](#enforce.string) ⇒ <code>String</code>
    * [.thickness(value, alt, [coerce])](#enforce.thickness) ⇒ <code>Thickness</code>
    * [.vector(value, alt, [coerce])](#enforce.vector) ⇒ <code>Vector</code>

<a name="enforce.array"></a>

### enforce.array(value, alt, [coerce]) ⇒ <code>Array</code>
Enforce that a value is an array. Uses [isArray](docs/checks.md#isArray).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>Array</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

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
<a name="enforce.boolean"></a>

### enforce.boolean(value, alt, [coerce]) ⇒ <code>Boolean</code>
Enforce that a value is a boolean. Uses [isBoolean](docs/checks.md#isBoolean).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>Boolean</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

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
<a name="enforce.cssSize"></a>

### enforce.cssSize(value, alt, [coerce]) ⇒ <code>CssSize</code>
Enforce that a value is a [CssSize](docs/CssSize.md). Uses [isCssSize](docs/checks.md#isCssSize).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>CssSize</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

enforce.cssSize(new CssSize('14px'), new CssSize());
// => cssSize of 14px

enforce.cssSize('14px', new CssSize());
// => cssSize of 0

enforce.cssSize('14px', new CssSize(), true);
// => cssSize of 14px
```
<a name="enforce.date"></a>

### enforce.date(value, alt, [coerce]) ⇒ <code>Date</code>
Enforce that a value is a date. Uses [isDate](docs/checks.md#isDate).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>Date</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

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
<a name="enforce.dockPoint"></a>

### enforce.dockPoint(value, alt, [coerce]) ⇒ <code>DockPoint</code>
Enforce that a value is a [DockPoint](docs/DockPoint.md). Uses [isDockPoint](docs/checks.md#isDockPoint).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>String</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

enforce.dockPoint(new DockPoint(DockPoint.POINTS.TOP), new DockPoint(DockPoint.POINTS.BOTTOM));
// => dockPoint of top

enforce.dockPoint('top', new DockPoint(DockPoint.POINTS.BOTTOM));
// => dockPoint of bottom

enforce.dockPoint('top', new DockPoint(DockPoint.POINTS.BOTTOM), true);
// => dockPoint of top
```
<a name="enforce.element"></a>

### enforce.element(value, alt) ⇒ <code>Element</code>
Enforce that a value is a DOM element. Uses [isElement](docs/checks.md#isElement).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> |  |
| alt | <code>Element</code> | Returned if the value is not the correct type |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

enforce.element(document.createElement('span'), document.createElement('div'));
// => a span element

enforce.element('span', document.createElement('div'));
// => a div element

enforce.element('span', document.createElement('div'), true);
// => a span element
```
<a name="enforce.enum"></a>

### enforce.enum(value, enumerable, alt) ⇒ <code>String</code>
Enforce that a value exists in the provided [Enum](docs/Enum.md)

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> |  |
| enumerable | <code>Enum</code> |  |
| alt | <code>String</code> | Returned if the value is not the correct type |

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
<a name="enforce.function"></a>

### enforce.function(value, alt) ⇒ <code>function</code>
Enforce that a value is a function. Uses [isFunction](docs/checks.md#isFunction).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> |  |
| alt | <code>function</code> | Returned if the value is not the correct type |

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
<a name="enforce.instance"></a>

### enforce.instance(value, constructor, alt) ⇒ <code>Object</code>
Enforce that a value is an instance of a constructor. Uses [isInstanceOf](docs/checks.md#isInstanceOf).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> |  |
| constructor | <code>function</code> |  |
| alt | <code>Object</code> | Returned if the value is not the correct type |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

class A {};
class C {};

const a = new A();
const b = new A();
const c = new C();

enforce.instance(b, A, a);
 => b

enforce.instance(c, A, a);
 => a
```
<a name="enforce.integer"></a>

### enforce.integer(value, alt, [coerce], [minValue], [maxValue]) ⇒ <code>int</code>
Enforce that a value is an integer. Uses [isInteger](docs/checks.md#isInteger).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>int</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |
| [minValue] | <code>int</code> |  |  |
| [maxValue] | <code>int</code> |  |  |

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
<a name="enforce.number"></a>

### enforce.number(value, alt, [coerce], [minValue], [maxValue]) ⇒ <code>Number</code>
Enforce that a value is a number (excluding NaN). Uses [isNumber](docs/checks.md#isNumber).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>Number</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |
| [minValue] | <code>Number</code> | <code>-Infinity</code> |  |
| [maxValue] | <code>Number</code> | <code>Infinity</code> |  |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

enforce.number(3.14159, 13.2);
// => 3.14159

enforce.number('3.14159', 13.2);
// => 13.2

enforce.number('3.14159', 13.2, true);
// => 3.14159
```
<a name="enforce.object"></a>

### enforce.object(value, alt, [coerce]) ⇒ <code>Object</code>
Enforce that a value is an object. Uses [isObject](docs/checks.md#isObject).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>Object</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

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
<a name="enforce.point"></a>

### enforce.point(value, alt, [coerce]) ⇒ <code>Point</code>
Enforce that a value is a [Point](docs/Point.md). Uses [isPoint](docs/checks.md#isPoint).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>Point</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

enforce.point(new Point(1, 2), new Point());
// => point 1,2

enforce.point('1,2', new Point());
// => point 0,0

enforce.point('1,2', new Point(), true);
// => point 1,2
```
<a name="enforce.regExp"></a>

### enforce.regExp(value, alt, [coerce]) ⇒ <code>RegExp</code>
Enforce that a value is a RegExp. Uses [isRegExp](docs/checks.md#isRegExp).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>RegExp</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

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
<a name="enforce.string"></a>

### enforce.string(value, alt, [coerce]) ⇒ <code>String</code>
Enforce that a value is a string. Uses [isString](docs/checks.md#isString).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>String</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

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
<a name="enforce.thickness"></a>

### enforce.thickness(value, alt, [coerce]) ⇒ <code>Thickness</code>
Enforce that a value is a [Thickness](docs/Thickness.md). Uses [isThickness](docs/checks.md#isThickness).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>Thickness</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

enforce.thickness(new Thickness('12px 20px'), new Thickness());
// => thickness of '12px 20px'

enforce.thickness('12px 20px', new Thickness());
// => thickness of 0

enforce.thickness('12px 20px', new Thickness(), true);
// => thickness of '12px 20px'
```
<a name="enforce.vector"></a>

### enforce.vector(value, alt, [coerce]) ⇒ <code>Vector</code>
Enforce that a value is a [Vector](docs/Vector.md). Uses [isVector](docs/checks.md#isVector).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>Vector</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript
import { enforce } from 'type-enforcer';

enforce.vector(new Vector('[[1,2],[3,4]]'), new Vector());
// => vector of '[[1,2],[3,4]]'

enforce.vector('[[1,2],[3,4]]', new Vector());
// => vector of '[[0,0],[0,0]]'

enforce.vector('[[1,2],[3,4]]', new Vector(), true);
// => vector of '[[1,2],[3,4]]'
```

## License

[MIT](LICENSE.md)

[npm]: https://img.shields.io/npm/v/type-enforcer.svg
[npm-url]: https://npmjs.com/package/type-enforcer
[build]: https://travis-ci.org/DarrenPaulWright/type-enforcer.svg?branch=master
[build-url]: https://travis-ci.org/DarrenPaulWright/type-enforcer
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer
[size]: https://packagephobia.now.sh/badge?p=type-enforcer
[size-url]: https://packagephobia.now.sh/result?p=type-enforcer
