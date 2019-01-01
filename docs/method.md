# type-enforcer
[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile=package.json)

Type enforcement library for javascript

<a name="method"></a>

## method : <code>object</code>
Enforce data types and remove common boilerplate code on class methods.## Usage``` javascriptimport { method } from 'type-enforcer';```Use it as a prototype:``` javascriptconst Thing = function() {};Thing.prototype.myMethod = method.string([options]);```or in a class:``` javascriptclass Thing() {}Thing.prototype.myMethod = method.string([options]);```or as a non-prototype method:``` javascriptconst Thing = function() {    this.myMethod = method.string([options]);};```

**Kind**: global typedef  

* [method](#method) : <code>object</code>
    * [.any([options])](#method.any) ⇒ <code>function</code>
    * [.array([options])](#method.array) ⇒ <code>function</code>
    * [.bool([options])](#method.bool) ⇒ <code>function</code>
    * [.cssSize([options])](#method.cssSize) ⇒ <code>function</code>
    * [.date([options])](#method.date) ⇒ <code>function</code>
    * [.dockPoint([options])](#method.dockPoint) ⇒ <code>function</code>
    * [.element([options])](#method.element) ⇒ <code>function</code>
    * [.enum([options])](#method.enum) ⇒ <code>function</code>
    * [.func([options])](#method.func) ⇒ <code>function</code>
    * [.instance([options])](#method.instance) ⇒ <code>function</code>
    * [.int([options])](#method.int) ⇒ <code>function</code>
    * [.keyValue([options])](#method.keyValue) ⇒ <code>function</code>
    * [.number([options])](#method.number) ⇒ <code>function</code>
    * [.object([options])](#method.object) ⇒ <code>function</code>
    * [.point([options])](#method.point) ⇒ <code>function</code>
    * [.queue([options])](#method.queue) ⇒ <code>function</code>
    * [.string([options])](#method.string) ⇒ <code>function</code>
    * [.thickness([options])](#method.thickness) ⇒ <code>function</code>
    * [.vector([options])](#method.vector) ⇒ <code>function</code>

<a name="method.any"></a>

### method.any([options]) ⇒ <code>function</code>
Builds a method for getting/setting any data type

**Kind**: static method of [<code>method</code>](#method)  
**Returns**: <code>function</code> - accepts two args: a new value and forceSave override. If no args are provided then the current value is returned.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  |  |
| [options.init] | <code>\*</code> |  | The initial value |
| [options.enforce] | <code>function</code> |  | Enforce this data type |
| [options.compare=] | <code>function</code> |  | Compares a new value to the current value. Return true if the two values are different. |
| [options.before] | <code>function</code> |  | Called before a new valid value is set. Provides the prior value, sets the context to the methods constructor. |
| [options.set] | <code>function</code> |  | Called after a new valid value is set. Provides the new value, sets the context to the methods constructor. |
| [options.get] | <code>function</code> |  | Called to get the value, sets the context to the methods constructor. |
| [options.other] | <code>Array</code> |  | An array of other values that can be set |
| [options.stringify] | <code>Boolean</code> | <code>false</code> | If true, then call toString() on the value before returning it (if the value has a toString method) |

<a name="method.array"></a>

### method.array([options]) ⇒ <code>function</code>
Builds a method for getting/setting an array

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Default |
| --- | --- |
| [options] | <code>Same as method.any except:</code> | 
| [options.init] | <code>[]</code> | 
| [options.enforce] | <code>enforce.array</code> | 
| [options.compare] | <code>!lodash.isEqual</code> | 

<a name="method.bool"></a>

### method.bool([options]) ⇒ <code>function</code>
Builds a method for getting/setting a boolean

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Default |
| --- | --- |
| [options] | <code>Same as method.any except:</code> | 
| [options.init] | <code>false</code> | 
| [options.enforce] | <code>enforce.bool</code> | 

<a name="method.cssSize"></a>

### method.cssSize([options]) ⇒ <code>function</code>
Builds a method for getting/setting a CssSize instance

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Default |
| --- | --- |
| [options] | <code>Same as method.any except:</code> | 
| [options.enforce] | <code>enforce.cssSize</code> | 
| [options.compare] | <code>CssSize.isSame</code> | 

<a name="method.date"></a>

### method.date([options]) ⇒ <code>function</code>
Builds a method for getting/setting a date or momentjs instance

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Default |
| --- | --- |
| [options] | <code>Same as method.any except:</code> | 
| [options.enforce] | <code>enforce.date</code> | 

<a name="method.dockPoint"></a>

### method.dockPoint([options]) ⇒ <code>function</code>
Builds a method for getting/setting a DockPoint instance

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Default |
| --- | --- |
| [options] | <code>Same as method.any except:</code> | 
| [options.enforce] | <code>enforce.dockPoint</code> | 
| [options.compare] | <code>DockPoint.isSame</code> | 

<a name="method.element"></a>

### method.element([options]) ⇒ <code>function</code>
Builds a method for getting/setting a DOM element

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Default |
| --- | --- |
| [options] | <code>Same as method.any except:</code> | 
| [options.enforce] | <code>enforce.element</code> | 

<a name="method.enum"></a>

### method.enum([options]) ⇒ <code>function</code>
Builds a method for getting/setting an enumerable value

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] |  | <code>Same as method.any except:</code> |  |
| [options.enforce] |  | <code>enforce.enum</code> |  |
| options.enum | <code>Enum</code> |  | An enum to restrict the values to. |

<a name="method.func"></a>

### method.func([options]) ⇒ <code>function</code>
Builds a method for getting/setting a function

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Default |
| --- | --- |
| [options] | <code>Same as method.any except:</code> | 
| [options.enforce] | <code>enforce.func</code> | 

<a name="method.instance"></a>

### method.instance([options]) ⇒ <code>function</code>
Builds a method for getting/setting an instance of a specific constructor

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] |  | <code>Same as method.any except:</code> |  |
| [options.enforce] |  | <code>instanceOf</code> |  |
| [options.instance] | <code>Constructor</code> |  | The item to run instanceOf against |

<a name="method.int"></a>

### method.int([options]) ⇒ <code>function</code>
Builds a method for getting/setting an integer

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] |  | <code>Same as method.any except:</code> |  |
| [options.enforce] |  | <code>enforce.int</code> |  |
| [options.min] | <code>Number</code> |  | Passed to enforce.int |
| [options.max] | <code>Number</code> |  | Passed to enforce.int |

<a name="method.keyValue"></a>

### method.keyValue([options]) ⇒ <code>function</code>
Builds a method that accepts either:- two args, a key and a value- one arg, an object with multiple key/value pairs

**Kind**: static method of [<code>method</code>](#method)  
**Returns**: <code>function</code> - accepts a new value and returns the methods constructor (allows chaining), or if no args are passed returns the output of options.get  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> |  |
| [options.set] | <code>function</code> | Called for each key/value pair applied. Provides two args, the key and value, and sets the context to the methods constructor. |
| [options.get] | <code>function</code> | Called if the method is called with a single, non-object, arg. Provides the same arg, sets the context to the methods constructor. |

<a name="method.number"></a>

### method.number([options]) ⇒ <code>function</code>
Builds a method for getting/setting a number

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] |  | <code>Same as method.any except:</code> |  |
| [options.enforce] |  | <code>enforce.number</code> |  |
| [options.min] | <code>Number</code> |  | Passed to enforce.number |
| [options.max] | <code>Number</code> |  | Passed to enforce.number |

<a name="method.object"></a>

### method.object([options]) ⇒ <code>function</code>
Builds a method for getting/setting a plain object

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Default |
| --- | --- |
| [options] | <code>Same as method.any except:</code> | 
| [options.enforce] | <code>enforce.object</code> | 

<a name="method.point"></a>

### method.point([options]) ⇒ <code>function</code>
Builds a method for getting/setting a Point instance

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Default |
| --- | --- |
| [options] | <code>Same as method.any except:</code> | 
| [options.init] | <code>Point</code> | 
| [options.enforce] | <code>enforce.point</code> | 
| [options.compare] | <code>Point.isSame</code> | 

<a name="method.queue"></a>

### method.queue([options]) ⇒ <code>function</code>
Builds a method that implements a Queue

**Kind**: static method of [<code>method</code>](#method)  
**Returns**: <code>function</code> - accepts a new value and returns the methods constructor (allows chaining), or if no args are passed returns the instance of Queue  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> |  |
| [options.set] | <code>function</code> | Called after a new callback is added to the queue. Provides a reference to the queue, sets the context to the methods constructor. |

<a name="method.string"></a>

### method.string([options]) ⇒ <code>function</code>
Builds a method for getting/setting a string

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Default |
| --- | --- |
| [options] | <code>Same as method.any except:</code> | 
| [options.init] | <code>&#x27;&#x27;</code> | 
| [options.enforce] | <code>enforce.string</code> | 

<a name="method.thickness"></a>

### method.thickness([options]) ⇒ <code>function</code>
Builds a method for getting/setting a thickness instance

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Default |
| --- | --- |
| [options] | <code>Same as method.any except:</code> | 
| [options.enforce] | <code>enforce.thickness</code> | 
| [options.compare] | <code>Thickness.isSame</code> | 

<a name="method.vector"></a>

### method.vector([options]) ⇒ <code>function</code>
Builds a method for getting/setting a Vector instance

**Kind**: static method of [<code>method</code>](#method)  
**Extends**: [<code>any</code>](#method.any)  

| Param | Default |
| --- | --- |
| [options] | <code>Same as method.any except:</code> | 
| [options.init] | <code>Vector</code> | 
| [options.enforce] | <code>enforce.vector</code> | 
| [options.compare] | <code>Vector.isSame</code> | 


## License

[MIT](https://github.com/darrenpaulwright/type-enforcer/blob/master/LICENSE.md)

[npm]: https://img.shields.io/npm/v/type-enforcer.svg
[npm-url]: https://npmjs.com/package/type-enforcer
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer
[size]: https://packagephobia.now.sh/badge?p=type-enforcer
[size-url]: https://packagephobia.now.sh/result?p=type-enforcer
