# type-enforcer
[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/type-enforcer?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile=package.json)

A type enforcement library for javascript

<a name="method"></a>

## method : <code>object</code>
Enforce data types and remove common boilerplate code on class methods.## Usage``` javascriptimport { method } from 'type-enforcer';```Or import individual functions``` javascriptimport { methodString } from 'type-enforcer';```Use it as a prototype:``` javascriptconst Thing = function() {};Thing.prototype.myMethod = method.string([options]);```or in a class:``` javascriptclass Thing() {}Thing.prototype.myMethod = method.string([options]);```or as a non-prototype method:``` javascriptconst Thing = function() {    this.myMethod = method.string([options]);};```

**Kind**: global typedef  

* [method](#method) : <code>object</code>
    * [.any([options])](#method.any) ⇒ <code>function</code>
    * [.array([options])](#method.array) ⇒ <code>function</code>
    * [.boolean([options])](#method.boolean) ⇒ <code>function</code>
    * [.cssSize([options])](#method.cssSize) ⇒ <code>function</code>
    * [.date([options])](#method.date) ⇒ <code>function</code>
    * [.dockPoint([options])](#method.dockPoint) ⇒ <code>function</code>
    * [.element([options])](#method.element) ⇒ <code>function</code>
    * [.enum([options])](#method.enum) ⇒ <code>function</code>
    * [.float([options])](#method.float) ⇒ <code>function</code>
    * [.function([options])](#method.function) ⇒ <code>function</code>
    * [.instance([options])](#method.instance) ⇒ <code>function</code>
    * [.int([options])](#method.int) ⇒ <code>function</code>
    * [.keyValue([options])](#method.keyValue) ⇒ <code>function</code>
    * [.number([options])](#method.number) ⇒ <code>function</code>
    * [.object([options])](#method.object) ⇒ <code>function</code>
    * [.point([options])](#method.point) ⇒ <code>function</code>
    * [.queue([options])](#method.queue) ⇒ <code>function</code>
    * [.regExp([options])](#method.regExp) ⇒ <code>function</code>
    * [.string([options])](#method.string) ⇒ <code>function</code>
    * [.thickness([options])](#method.thickness) ⇒ <code>function</code>
    * [.vector([options])](#method.vector) ⇒ <code>function</code>

<a name="method.any"></a>

### method.any([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting any data type

**Kind**: static method of [<code>method</code>](#method)  
**Returns**: <code>function</code> - if a "before" or "set" option is set, then this function accepts two args: a new value and forceSave override. If no args are provided then the current value is returned. If neither "before" nor "set" is set, then only one arg is accepted, the new value. Also returns the current value if no args are provided.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  |  |
| [options.init] | <code>\*</code> |  | The initial value |
| [options.enforce] | <code>function</code> |  | Enforce this data type |
| [options.compare] | <code>function</code> |  | Compares a new value to the current value. Return true if the two values are different. |
| [options.before] | <code>function</code> |  | Called before a new valid value is set. Provides the prior value, sets the context to the methods constructor. |
| [options.set] | <code>function</code> |  | Called after a new valid value is set. Provides the new value, sets the context to the methods constructor. |
| [options.get] | <code>function</code> |  | Called to get the value, sets the context to the methods constructor. |
| [options.other] | <code>Array</code> \| <code>\*</code> |  | Another value/type or array of other values/types that can be set |
| [options.stringify] | <code>Boolean</code> | <code>false</code> | If true, then call toString() on the value before returning it (if the value has a toString method) |

**Example**  
``` javascriptimport { method } from 'type-enforcer';const Widget = function() {    someMethod = method.any({        set: function(newValue) {            console.log(this);            console.log(newValue);        }    });    anotherMethod = method.any();    thirdMethod = method.any({        get: function(newValue) {            return 'item 2';        }    });};const widget = new Widget();widget.someMethod('a').anotherMethod(42).thirdMethod('item 1');// => console.log widget and 'a'widget.someMethod();// => 'a'widget.anotherMethod();// => 42widget.thirdMethod();// => 'item 2'```
<a name="method.array"></a>

### method.array([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting an array

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.init] | <code>\*</code> | <code>[]</code> |  |
| [options.enforce] | <code>function</code> | <code>enforce.array</code> |  |
| [options.compare] | <code>function</code> | <code>deepCompare</code> | Performs a deep comparison between values |
| [options.deep] | <code>Boolean</code> | <code>true</code> | If false then only use strict equality |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

<a name="method.boolean"></a>

### method.boolean([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting a boolean

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.init] | <code>\*</code> | <code>false</code> |  |
| [options.enforce] | <code>function</code> | <code>enforce.boolean</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

<a name="method.cssSize"></a>

### method.cssSize([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting a [CssSize](docs/CssSize.md)

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.cssSize</code> |  |
| [options.compare] | <code>function</code> | <code>CssSize.isSame</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>true</code> | If false then don't coerce the value |

<a name="method.date"></a>

### method.date([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting a date

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.date</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

<a name="method.dockPoint"></a>

### method.dockPoint([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting a [DockPoint](docs/DockPoint.md)

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.dockPoint</code> |  |
| [options.compare] | <code>function</code> | <code>DockPoint.isSame</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>true</code> | If false then don't coerce the value |

<a name="method.element"></a>

### method.element([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting a DOM element

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.element</code> |  |

<a name="method.enum"></a>

### method.enum([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting an enumerable value in an [Enum](docs/Enum.md)

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.enum</code> |  |
| options.enum | <code>Enum</code> |  | An enum to restrict the values to. |

<a name="method.float"></a>

### method.float([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting a float

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.float</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |
| [options.min] | <code>Number</code> |  | Passed to enforce.float |
| [options.max] | <code>Number</code> |  | Passed to enforce.float |

<a name="method.function"></a>

### method.function([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting a function

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.function</code> |  |

<a name="method.instance"></a>

### method.instance([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting an instance of a specific constructor

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.instance</code> |  |
| [options.instance] | <code>Constructor</code> |  | The item to run enforce.instance against |

<a name="method.int"></a>

### method.int([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting an integer

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.int</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |
| [options.min] | <code>Number</code> |  | Passed to enforce.int |
| [options.max] | <code>Number</code> |  | Passed to enforce.int |

<a name="method.keyValue"></a>

### method.keyValue([options]) ⇒ <code>function</code>
Builds a chainable method that accepts either:- two args, a key and a value- one arg, an object with multiple key/value pairs

**Kind**: static method of [<code>method</code>](#method)  
**Returns**: <code>function</code> - accepts a new value and returns the methods constructor (allows chaining), or if no args are passed returns the output of options.get  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> |  |
| [options.set] | <code>function</code> | Called for each key/value pair applied. Provides two args, the key and value, and sets the context to the methods constructor. |
| [options.get] | <code>function</code> | Called if the method is called with a single, non-object, arg. Provides the same arg, sets the context to the methods constructor. |

<a name="method.number"></a>

### method.number([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting a number

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.number</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |
| [options.min] | <code>Number</code> |  | Passed to enforce.number |
| [options.max] | <code>Number</code> |  | Passed to enforce.number |

<a name="method.object"></a>

### method.object([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting a plain object

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.object</code> |  |
| [options.compare] | <code>function</code> | <code>deepCompare</code> | Performs a deep comparison between values |
| [options.deep] | <code>Boolean</code> | <code>true</code> | If false then only use strict equality |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

<a name="method.point"></a>

### method.point([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting a [Point](docs/Point.md)

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.init] | <code>\*</code> | <code>Point</code> |  |
| [options.enforce] | <code>function</code> | <code>enforce.point</code> |  |
| [options.compare] | <code>function</code> | <code>Point.isSame</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>true</code> | If false then don't coerce the value |

<a name="method.queue"></a>

### method.queue([options]) ⇒ <code>function</code>
Builds a chainable method that implements a [Queue](docs/Queue.md)

**Kind**: static method of [<code>method</code>](#method)  
**Returns**: <code>function</code> - accepts a new value and returns the methods constructor (allows chaining), or if no args are passed returns the instance of Queue  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> |  |
| [options.set] | <code>function</code> | Called after a new callback is added to the queue. Provides a reference to the queue, the new ID for the callback, the callback, and sets the context to the methods constructor. |

<a name="method.regExp"></a>

### method.regExp([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting a RegExp

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.init] | <code>\*</code> | <code>&#x27;&#x27;</code> |  |
| [options.enforce] | <code>function</code> | <code>enforce.string</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

<a name="method.string"></a>

### method.string([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting a string

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.init] | <code>\*</code> | <code>&#x27;&#x27;</code> |  |
| [options.enforce] | <code>function</code> | <code>enforce.string</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

<a name="method.thickness"></a>

### method.thickness([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting a [Thickness](docs/Thickness.md)

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.thickness</code> |  |
| [options.compare] | <code>function</code> | <code>Thickness.isSame</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>true</code> | If false then don't coerce the value |

<a name="method.vector"></a>

### method.vector([options]) ⇒ <code>function</code>
Builds a chainable method for getting/setting a [Vector](docs/Vector.md)

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.init] | <code>\*</code> | <code>Vector</code> |  |
| [options.enforce] | <code>function</code> | <code>enforce.vector</code> |  |
| [options.compare] | <code>function</code> | <code>Vector.isSame</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>true</code> | If false then don't coerce the value |


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
