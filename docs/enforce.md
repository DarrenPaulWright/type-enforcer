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

**Kind**: global typedef  

* [enforce](#enforce) : <code>object</code>
    * [.array(value, alt, [coerce])](#enforce.array) ⇒ <code>Array</code>
    * [.bool(value, alt, [coerce])](#enforce.bool) ⇒ <code>Boolean</code>
    * [.cssSize(value, alt, [coerce])](#enforce.cssSize) ⇒ <code>CssSize</code>
    * [.date(value, alt, [coerce])](#enforce.date) ⇒ <code>Date</code>
    * [.dockPoint(value, alt, [coerce])](#enforce.dockPoint) ⇒ <code>DockPoint</code>
    * [.element(value, alt)](#enforce.element) ⇒ <code>Element</code>
    * [.enum(value, enumerable, alt)](#enforce.enum) ⇒ <code>String</code>
    * [.func(value, alt)](#enforce.func) ⇒ <code>function</code>
    * [.instance(value, constructor, alt)](#enforce.instance) ⇒ <code>Object</code>
    * [.int(value, alt, [coerce], [minValue], [maxValue])](#enforce.int) ⇒ <code>int</code>
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

<a name="enforce.bool"></a>

### enforce.bool(value, alt, [coerce]) ⇒ <code>Boolean</code>
Enforce that a value is a boolean. Uses [isBool](docs/checks.md#isBool).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>Boolean</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

<a name="enforce.cssSize"></a>

### enforce.cssSize(value, alt, [coerce]) ⇒ <code>CssSize</code>
Enforce that a value is a [CssSize](docs/CssSize.md). Uses [isCssSize](docs/checks.md#isCssSize).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>CssSize</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

<a name="enforce.date"></a>

### enforce.date(value, alt, [coerce]) ⇒ <code>Date</code>
Enforce that a value is a date. Uses [isDate](docs/checks.md#isDate).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>Date</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

<a name="enforce.dockPoint"></a>

### enforce.dockPoint(value, alt, [coerce]) ⇒ <code>DockPoint</code>
Enforce that a value is a [DockPoint](docs/DockPoint.md). Uses [isDockPoint](docs/checks.md#isDockPoint).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>String</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

<a name="enforce.element"></a>

### enforce.element(value, alt) ⇒ <code>Element</code>
Enforce that a value is a DOM element. Uses [isElement](docs/checks.md#isElement).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> |  |
| alt | <code>Element</code> | Returned if the value is not the correct type |

<a name="enforce.enum"></a>

### enforce.enum(value, enumerable, alt) ⇒ <code>String</code>
Enforce that a value exists in the provided [Enum](docs/Enum.md)

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> |  |
| enumerable | <code>Enum</code> |  |
| alt | <code>String</code> | Returned if the value is not the correct type |

<a name="enforce.func"></a>

### enforce.func(value, alt) ⇒ <code>function</code>
Enforce that a value is a function. Uses [isFunction](docs/checks.md#isFunction).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> |  |
| alt | <code>function</code> | Returned if the value is not the correct type |

<a name="enforce.instance"></a>

### enforce.instance(value, constructor, alt) ⇒ <code>Object</code>
Enforce that a value is an instance of a constructor. Uses [isInstanceOf](docs/checks.md#isInstanceOf).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> |  |
| constructor | <code>function</code> |  |
| alt | <code>Object</code> | Returned if the value is not the correct type |

<a name="enforce.int"></a>

### enforce.int(value, alt, [coerce], [minValue], [maxValue]) ⇒ <code>int</code>
Enforce that a value is an integer. Uses [isInt](docs/checks.md#isInt).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>int</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |
| [minValue] | <code>int</code> |  |  |
| [maxValue] | <code>int</code> |  |  |

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

<a name="enforce.object"></a>

### enforce.object(value, alt, [coerce]) ⇒ <code>Object</code>
Enforce that a value is an object. Uses [isObject](docs/checks.md#isObject).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>Object</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

<a name="enforce.point"></a>

### enforce.point(value, alt, [coerce]) ⇒ <code>Point</code>
Enforce that a value is a [Point](docs/Point.md). Uses [isPoint](docs/checks.md#isPoint).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>Point</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

<a name="enforce.regExp"></a>

### enforce.regExp(value, alt, [coerce]) ⇒ <code>RegExp</code>
Enforce that a value is a RegExp. Uses [isRegExp](docs/checks.md#isRegExp).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>RegExp</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

<a name="enforce.string"></a>

### enforce.string(value, alt, [coerce]) ⇒ <code>String</code>
Enforce that a value is a string. Uses [isString](docs/checks.md#isString).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>String</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

<a name="enforce.thickness"></a>

### enforce.thickness(value, alt, [coerce]) ⇒ <code>Thickness</code>
Enforce that a value is a [Thickness](docs/Thickness.md). Uses [isThickness](docs/checks.md#isThickness).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>Thickness</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

<a name="enforce.vector"></a>

### enforce.vector(value, alt, [coerce]) ⇒ <code>Vector</code>
Enforce that a value is a [Vector](docs/Vector.md). Uses [isVector](docs/checks.md#isVector).

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>Vector</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |


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
