# type-enforcer
[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/type-enforcer?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile=package.json)

Type enforcement library for javascript

## Functions

<dl>
<dt><a href="#isArray">isArray(value, [coerce])</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is an <a href="https://lodash.com/docs/#isArray">array</a></p>
</dd>
<dt><a href="#isBoolean">isBoolean(value, [coerce])</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="https://lodash.com/docs/#isBoolean">boolean</a></p>
</dd>
<dt><a href="#isCssSize">isCssSize(value, [coerce])</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="docs/CssSize.md">CssSize</a></p>
</dd>
<dt><a href="#isDate">isDate(value, [coerce])</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="https://lodash.com/docs/#isDate">date</a></p>
</dd>
<dt><a href="#isDockPoint">isDockPoint(value, [coerce])</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="docs/DockPoint.md">DockPoint</a></p>
</dd>
<dt><a href="#isElement">isElement(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="https://lodash.com/docs/#isElement">DOM element</a></p>
</dd>
<dt><a href="#isFunction">isFunction(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="https://lodash.com/docs/#isFunction">function</a></p>
</dd>
<dt><a href="#isInstanceOf">isInstanceOf(object, constructor)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is an instance of a constructor. Fixes issues with native instanceOf and primitives Boolean, Number, and String (see example).</p>
</dd>
<dt><a href="#isInteger">isInteger(value, [coerce])</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is an <a href="https://lodash.com/docs/#isInteger">integer</a></p>
</dd>
<dt><a href="#isJson">isJson(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value can be parsed as JSON</p>
</dd>
<dt><a href="#isNumber">isNumber(value, [coerce])</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="https://lodash.com/docs/#isNumber">number</a></p>
</dd>
<dt><a href="#isObject">isObject(value, [coerce])</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="https://lodash.com/docs/#isPlainObject">plain object</a></p>
</dd>
<dt><a href="#isPoint">isPoint(value, [coerce])</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="docs/Point.md">Point</a></p>
</dd>
<dt><a href="#isRegExp">isRegExp(value, [coerce])</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="https://lodash.com/docs/#isRegExp">RegExp</a></p>
</dd>
<dt><a href="#isString">isString(value, [coerce])</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="https://lodash.com/docs/#isString">string</a></p>
</dd>
<dt><a href="#isThickness">isThickness(value, [coerce])</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="docs/Thickness.md">Thickness</a></p>
</dd>
<dt><a href="#isVector">isVector(value, [coerce])</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="docs/Vector.md">Vector</a></p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#is">is</a> : <code>object</code></dt>
<dd><p>Utility functions for checking if something is a particular data type.</p>
<h2 id="usage">Usage</h2>
<pre><code class="lang-javascript">import { is } from &#39;type-enforcer&#39;;
</code></pre>
<p>Or import individual functions</p>
<pre><code class="lang-javascript">import { isString } from &#39;type-enforcer&#39;;
</code></pre>
</dd>
</dl>

<a name="isArray"></a>

## isArray(value, [coerce]) ⇒ <code>Boolean</code>
Check if a value is an [array](https://lodash.com/docs/#isArray)

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into an array |

**Example**  
``` javascriptimport { isArray } from 'type-enforcer';isArray([]);// => trueisArray('[]');// => falseisArray('[]', true);// => true```
<a name="isBoolean"></a>

## isBoolean(value, [coerce]) ⇒ <code>Boolean</code>
Check if a value is a [boolean](https://lodash.com/docs/#isBoolean)

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a boolean. Always returns true, as _everything_ can be coerced into a boolean. |

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
<a name="isCssSize"></a>

## isCssSize(value, [coerce]) ⇒ <code>Boolean</code>
Check if a value is a [CssSize](docs/CssSize.md)

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a CssSize |

**Example**  
``` javascriptimport { isCssSize } from 'type-enforcer';isCssSize(new CssSize());// => trueisCssSize('14px');// => falseisCssSize('14px', true);// => true```
<a name="isDate"></a>

## isDate(value, [coerce]) ⇒ <code>Boolean</code>
Check if a value is a [date](https://lodash.com/docs/#isDate)

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a Date |

**Example**  
``` javascriptimport { isDate } from 'type-enforcer';isDate(new Date());// => trueisDate('10/12/1980');// => falseisDate('10/12/1980', true);// => true```
<a name="isDockPoint"></a>

## isDockPoint(value, [coerce]) ⇒ <code>Boolean</code>
Check if a value is a [DockPoint](docs/DockPoint.md)

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a DockPoint |

**Example**  
``` javascriptimport { isDockPoint } from 'type-enforcer';isDockPoint(new DockPoint());// => trueisDockPoint('top');// => falseisDockPoint('top', true);// => true```
<a name="isElement"></a>

## isElement(value) ⇒ <code>Boolean</code>
Check if a value is a [DOM element](https://lodash.com/docs/#isElement)

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
``` javascriptimport { isElement } from 'type-enforcer';isElement(document.createElement('div'));// => true```
<a name="isFunction"></a>

## isFunction(value) ⇒ <code>Boolean</code>
Check if a value is a [function](https://lodash.com/docs/#isFunction)

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
``` javascript
import { isFunction } from 'type-enforcer';

isFunction(() => {});
// => true
```
<a name="isInstanceOf"></a>

## isInstanceOf(object, constructor) ⇒ <code>Boolean</code>
Check if a value is an instance of a constructor. Fixes issues with native instanceOf and primitives Boolean, Number, and String (see example).

**Kind**: global function  

| Param | Type |
| --- | --- |
| object | <code>\*</code> | 
| constructor | <code>function</code> | 

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
```
<a name="isInteger"></a>

## isInteger(value, [coerce]) ⇒ <code>Boolean</code>
Check if a value is an [integer](https://lodash.com/docs/#isInteger)

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into an Integer |

**Example**  
``` javascript
import { isInteger } from 'type-enforcer';

isInteger(42);
// => true

isInteger('42');
// => false

isInteger('42', true);
// => true
```
<a name="isJson"></a>

## isJson(value) ⇒ <code>Boolean</code>
Check if a value can be parsed as JSON

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
``` javascript
import { isJson } from 'type-enforcer';
```
<a name="isNumber"></a>

## isNumber(value, [coerce]) ⇒ <code>Boolean</code>
Check if a value is a [number](https://lodash.com/docs/#isNumber)

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a Number |

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
<a name="isObject"></a>

## isObject(value, [coerce]) ⇒ <code>Boolean</code>
Check if a value is a [plain object](https://lodash.com/docs/#isPlainObject)

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into an Object |

**Example**  
``` javascriptimport { isObject } from 'type-enforcer';isObject({});// => trueisObject('{}');// => falseisObject('{}', true);// => true```
<a name="isPoint"></a>

## isPoint(value, [coerce]) ⇒ <code>Boolean</code>
Check if a value is a [Point](docs/Point.md)

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a Point |

**Example**  
``` javascriptimport { isPoint } from 'type-enforcer';isPoint(new Point());// => trueisPoint('1,2');// => falseisPoint('1,2', true);// => true```
<a name="isRegExp"></a>

## isRegExp(value, [coerce]) ⇒ <code>Boolean</code>
Check if a value is a [RegExp](https://lodash.com/docs/#isRegExp)

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a RegExp |

**Example**  
``` javascriptimport { isRegExp } from 'type-enforcer';isRegExp(/*+/g);// => trueisRegExp('/*+/g');// => falseisRegExp('/*+/g', true);// => true```
<a name="isString"></a>

## isString(value, [coerce]) ⇒ <code>Boolean</code>
Check if a value is a [string](https://lodash.com/docs/#isString)

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a String |

**Example**  
``` javascriptimport { isString } from 'type-enforcer';isString('type');// => trueisString(new Date());// => falseisString(new Date(), true);// => true```
<a name="isThickness"></a>

## isThickness(value, [coerce]) ⇒ <code>Boolean</code>
Check if a value is a [Thickness](docs/Thickness.md)

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a Thickness |

**Example**  
``` javascriptimport { isThickness } from 'type-enforcer';isThickness(new Thickness());// => trueisThickness('12px 20px');// => falseisThickness('12px 20px', true);// => true```
<a name="isVector"></a>

## isVector(value, [coerce]) ⇒ <code>Boolean</code>
Check if a value is a [Vector](docs/Vector.md)

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a Vector |

**Example**  
``` javascriptimport { isVector } from 'type-enforcer';isVector(new Vector());// => trueisVector('[[1,2],[3,4]]');// => falseisVector('[[1,2],[3,4]]', true);// => true```
<a name="is"></a>

## is : <code>object</code>
Utility functions for checking if something is a particular data type.## Usage``` javascriptimport { is } from 'type-enforcer';```Or import individual functions``` javascriptimport { isString } from 'type-enforcer';```

**Kind**: global typedef  

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
