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

### is : <code>object</code>
> Utility functions for checking if something is a particular data type.> > ``` javascript> import { is } from 'type-enforcer';> > // Or import individual functions> import { isBoolean, isString } from 'type-enforcer';> ```


* [is](#is) : <code>object</code>
    * [.array(value, [coerce])](#is.array) ⇒ <code>Boolean</code>
    * [.boolean(value, [coerce])](#is.boolean) ⇒ <code>Boolean</code>
    * [.date(value, [coerce])](#is.date) ⇒ <code>Boolean</code>
    * [.float(value, [coerce])](#is.float) ⇒ <code>Boolean</code>
    * [.function(value)](#is.function) ⇒ <code>Boolean</code>
    * [.instanceOf(object, constructor)](#is.instanceOf) ⇒ <code>Boolean</code>
    * [.integer(value, [coerce])](#is.integer) ⇒ <code>Boolean</code>
    * [.json(value)](#is.json) ⇒ <code>Boolean</code>
    * [.number(value, [coerce])](#is.number) ⇒ <code>Boolean</code>
    * [.object(value, [coerce])](#is.object) ⇒ <code>Boolean</code>
    * [.regExp(value, [coerce])](#is.regExp) ⇒ <code>Boolean</code>
    * [.string(value, [coerce])](#is.string) ⇒ <code>Boolean</code>


<br><a name="is.array"></a>

#### is.array(value, [coerce]) ⇒ <code>Boolean</code>
> Check if a value is an array

**Alias:** `isArray`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into an array |

**Example**  
``` javascriptimport { isArray } from 'type-enforcer';isArray([]);// => trueisArray('[]');// => falseisArray('[]', true);// => true```

<br><a name="is.boolean"></a>

#### is.boolean(value, [coerce]) ⇒ <code>Boolean</code>
> Check if a value is a boolean

**Alias:** `isBoolean`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a boolean. Always returns true, as _everything_ can be coerced into a boolean. |

**Example**  
``` javascriptimport { isBoolean } from 'type-enforcer';isBoolean(false);// => trueisBoolean('a string');// => falseisBoolean('a string', true);// => true```

<br><a name="is.date"></a>

#### is.date(value, [coerce]) ⇒ <code>Boolean</code>
> Check if a value is a date

**Alias:** `isDate`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a Date |

**Example**  
``` javascriptimport { isDate } from 'type-enforcer';isDate(new Date());// => trueisDate('10/12/1980');// => falseisDate('10/12/1980', true);// => true```

<br><a name="is.float"></a>

#### is.float(value, [coerce]) ⇒ <code>Boolean</code>
> Check if a value is a finite float

**Alias:** `isFloat`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a float |

**Example**  
``` javascriptimport { isFloat } from 'type-enforcer';isFloat(3.14159);// => trueisFloat('3.14159');// => falseisFloat('3.14159', true);// => true```

<br><a name="is.function"></a>

#### is.function(value) ⇒ <code>Boolean</code>
> Check if a value is a function

**Alias:** `isFunction`


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
``` javascriptimport { isFunction } from 'type-enforcer';isFunction(() => {});// => true```

<br><a name="is.instanceOf"></a>

#### is.instanceOf(object, constructor) ⇒ <code>Boolean</code>
> Check if a value is an instance of a constructor. Fixes issues with native instanceOf and primitives Boolean, Number, and String (see example).

**Alias:** `isInstanceOf`


| Param | Type |
| --- | --- |
| object | <code>\*</code> | 
| constructor | <code>function</code> | 

**Example**  
``` javascriptimport { isInstanceOf } from 'type-enforcer';isInstanceOf(false, Boolean); => truefalse instanceof Boolean => falseisInstanceOf(false, Boolean); => true42 instanceof Number => falseisInstanceOf(42, Number); => true'a string' instanceof String => falseisInstanceOf('a string', String); => true```

<br><a name="is.integer"></a>

#### is.integer(value, [coerce]) ⇒ <code>Boolean</code>
> Check if a value is a finite integer

**Alias:** `isInteger`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into an Integer |

**Example**  
``` javascriptimport { isInteger } from 'type-enforcer';isInteger(42);// => trueisInteger('42');// => falseisInteger('42', true);// => trueisInteger('42.5', true);// => false```

<br><a name="is.json"></a>

#### is.json(value) ⇒ <code>Boolean</code>
> Check if a value can be parsed as JSON

**Alias:** `isJson`


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
``` javascriptimport { isJson } from 'type-enforcer';```

<br><a name="is.number"></a>

#### is.number(value, [coerce]) ⇒ <code>Boolean</code>
> Check if a value is a number

**Alias:** `isNumber`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a Number |

**Example**  
``` javascriptimport { isNumber } from 'type-enforcer';isNumber(3.14159);// => trueisNumber('3.14159');// => falseisNumber('3.14159', true);// => true```

<br><a name="is.object"></a>

#### is.object(value, [coerce]) ⇒ <code>Boolean</code>
> Check if a value is a plain object

**Alias:** `isObject`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into an Object |

**Example**  
``` javascriptimport { isObject } from 'type-enforcer';isObject({});// => trueisObject('{}');// => falseisObject('{}', true);// => true```

<br><a name="is.regExp"></a>

#### is.regExp(value, [coerce]) ⇒ <code>Boolean</code>
> Check if a value is a RegExp

**Alias:** `isRegExp`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a RegExp |

**Example**  
``` javascriptimport { isRegExp } from 'type-enforcer';isRegExp(/*+/g);// => trueisRegExp('/*+/g');// => falseisRegExp('/*+/g', true);// => true```

<br><a name="is.string"></a>

#### is.string(value, [coerce]) ⇒ <code>Boolean</code>
> Check if a value is a string

**Alias:** `isString`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a String |

**Example**  
``` javascriptimport { isString } from 'type-enforcer';isString('type');// => trueisString(new Date());// => falseisString(new Date(), true);// => true```

[npm]: https://img.shields.io/npm/v/type-enforcer.svg
[npm-url]: https://npmjs.com/package/type-enforcer
[build]: https://travis-ci.org/DarrenPaulWright/type-enforcer.svg?branch&#x3D;master
[build-url]: https://travis-ci.org/DarrenPaulWright/type-enforcer
[coverage]: https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer/badge.svg?branch&#x3D;master
[coverage-url]: https://coveralls.io/github/DarrenPaulWright/type-enforcer?branch&#x3D;master
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer
[size]: https://packagephobia.now.sh/badge?p&#x3D;type-enforcer
[size-url]: https://packagephobia.now.sh/result?p&#x3D;type-enforcer
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/type-enforcer.svg
[license-url]: https://npmjs.com/package/type-enforcer/LICENSE.md
