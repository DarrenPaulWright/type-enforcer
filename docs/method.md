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


<br><a name="method"></a>

## method : <code>object</code>
> Enforce data types and remove common boilerplate code on class methods.

**Example**  
``` javascript
import { method } from 'type-enforcer';

// Or import individual functions
import { methodBoolean, methodString } from 'type-enforcer';


// Use it as a prototype:
const Thing = function() {};

Thing.prototype.myMethod = method.string([options]);


// or in a class:
class Thing() {}

Thing.prototype.myMethod = method.string([options]);


// or as a non-prototype method:
const Thing = function() {
    this.myMethod = method.string([options]);
};
```

##### Extending methods
methodAny and all methods that extend it have a static method ".extend" that creates a new method. It accepts two args:
- The first arg should be an object with default options. These options override any options in the method being extended.
- The second arg (optional) should be a function that gets called when a method is initialized. This function is passed one arg, the options for this method.

These methods also have a static method ".defaults" that mutates the default options for that method. For instance, if you would prefer that methodBoolean didn't have a default value of false, then you could use the following:
``` javascript
methodBoolean.defaults({init: undefined});
```

<br>

* [method](#method) : <code>object</code>
    * [.any([options])](#method.any) ⇒ <code>function</code>
    * [.array([options])](#method.array) ⇒ <code>function</code>
    * [.boolean([options])](#method.boolean) ⇒ <code>function</code>
    * [.date([options])](#method.date) ⇒ <code>function</code>
    * [.enum([options])](#method.enum) ⇒ <code>function</code>
    * [.float([options])](#method.float) ⇒ <code>function</code>
    * [.function([options])](#method.function) ⇒ <code>function</code>
    * [.instanceOf([options])](#method.instanceOf) ⇒ <code>function</code>
    * [.int([options])](#method.int) ⇒ <code>function</code>
    * [.keyValue([options])](#method.keyValue) ⇒ <code>function</code>
    * [.map([options])](#method.map) ⇒ <code>function</code>
    * [.number([options])](#method.number) ⇒ <code>function</code>
    * [.object([options])](#method.object) ⇒ <code>function</code>
    * [.queue([options])](#method.queue) ⇒ <code>function</code>
    * [.regExp([options])](#method.regExp) ⇒ <code>function</code>
    * [.set([options])](#method.set) ⇒ <code>function</code>
    * [.string([options])](#method.string) ⇒ <code>function</code>
    * [.symbol([options])](#method.symbol) ⇒ <code>function</code>
    * [.weakMap([options])](#method.weakMap) ⇒ <code>function</code>
    * [.weakSet([options])](#method.weakSet) ⇒ <code>function</code>


<br><a name="method.any"></a>

### method.any([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting any data type

**Alias:** `methodAny`

**Returns**: <code>function</code> - if a "before" or "set" option is set, then this function accepts two args: a new value and forceSave override. If no args are provided then the current value is returned. If neither "before" nor "set" is set, then only one arg is accepted, the new value. Also returns the current value if no args are provided.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  |  |
| [options.init] | <code>\*</code> |  | The initial value |
| [options.enforce] | <code>function</code>, <code>String</code>, <code>Symbol</code> |  | Enforce this data type.<br>- Sets the context to the same context as the resulting method.<br>- If a String or Symbol then maps to another method by that name. |
| [options.compare] | <code>function</code>, <code>String</code>, <code>Symbol</code> |  | Compares a new value to the current value. Return true if the two values are different.<br>- Sets the context to the same context as the resulting method.<br>- If a String or Symbol then maps to another method by that name. |
| [options.before] | <code>function</code>, <code>String</code>, <code>Symbol</code> |  | Called before a new valid value is set. Provides the prior value.<br>- Sets the context to the same context as the resulting method.<br>- If a String or Symbol then maps to another method by that name. |
| [options.set] | <code>function</code>, <code>String</code>, <code>Symbol</code> |  | Called after a new valid value is set. Provides the new value.<br>- Sets the context to the same context as the resulting method.<br>- If a String or Symbol then maps to another method by that name. |
| [options.get] | <code>function</code>, <code>String</code>, <code>Symbol</code> |  | Called to get the value.<br>- Sets the context to the same context as the resulting method.<br>- If a String or Symbol then maps to another method by that name. |
| [options.other] | <code>Array</code>, <code>\*</code> |  | Another value/type or array of other values/types that can be set |
| [options.stringify] | <code>Boolean</code> | <code>false</code> | If true, then call toString() on the value before returning it (if the value has a toString method) |

**Example**  
``` javascript
import { method } from 'type-enforcer';

const Widget = function() {
    someMethod = method.any({
        set(newValue) {
            console.log(this);
            console.log(newValue);
        }
    });
    anotherMethod = method.any();
    thirdMethod = method.any({
        get(newValue) {
            return 'item 2';
        }
    });
};

const widget = new Widget();

widget.someMethod('a').anotherMethod(42).thirdMethod('item 1');
// => console.log widget and 'a'

widget.someMethod();
// => 'a'

widget.anotherMethod();
// => 42

widget.thirdMethod();
// => 'item 2'
```

<br><a name="method.array"></a>

### method.array([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting an array

**Alias:** `methodArray`

**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.init] | <code>\*</code> | <code>[]</code> |  |
| [options.enforce] | <code>function</code> | <code>enforce.array</code> |  |
| [options.compare] | <code>function</code> | <code>deepCompare</code> | Performs a deep comparison between values |
| [options.deep] | <code>Boolean</code> | <code>true</code> | If false then only use strict equality |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |


<br><a name="method.boolean"></a>

### method.boolean([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a boolean

**Alias:** `methodBoolean`

**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.init] | <code>\*</code> | <code>false</code> |  |
| [options.enforce] | <code>function</code> | <code>enforce.boolean</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |


<br><a name="method.date"></a>

### method.date([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a date

**Alias:** `methodDate`

**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.date</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |


<br><a name="method.enum"></a>

### method.enum([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting an enumerable value in an [Enum](docs/Enum.md)

**Alias:** `methodEnum`

**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.enum</code> |  |
| options.enum | <code>Enum</code> |  | An enum to restrict the values to. |


<br><a name="method.float"></a>

### method.float([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a float

**Alias:** `methodFloat`

**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.float</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |
| [options.min] | <code>Number</code> |  | Passed to enforce.float |
| [options.max] | <code>Number</code> |  | Passed to enforce.float |


<br><a name="method.function"></a>

### method.function([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a function

**Alias:** `methodFunction`

**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.function</code> |  |
| [options.bind] | <code>boolean</code> | <code>true</code> | Binds the set function to the same context as the method. |


<br><a name="method.instanceOf"></a>

### method.instanceOf([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting an instance of a specific constructor

**Alias:** `methodInstanceOf`

**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.instanceOf</code> |  |
| [options.instanceOf] | <code>Constructor</code> |  | The item to run enforce.instanceOf against |


<br><a name="method.int"></a>

### method.int([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting an integer

**Alias:** `methodInteger`

**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.int</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |
| [options.min] | <code>Number</code> |  | Passed to enforce.int |
| [options.max] | <code>Number</code> |  | Passed to enforce.int |


<br><a name="method.keyValue"></a>

### method.keyValue([options]) ⇒ <code>function</code>
> Builds a chainable method that accepts either a key and a value or an object with multiple key/value pairs.

**Alias:** `methodKeyValue`

**Returns**: <code>function</code> - Accepts a new value and returns the methods constructor (allows chaining), or if no args are passed returns the output of options.get  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> |  |
| [options.set] | <code>function</code> | Called for each key/value pair applied. Provides two args, the key and value, and sets the context to the methods constructor. |
| [options.get] | <code>function</code> | Called if the method is called with a single, non-object, arg. Provides the same arg, sets the context to the methods constructor. |


<br><a name="method.map"></a>

### method.map([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a Map

**Alias:** `methodMap`

**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.map</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |


<br><a name="method.number"></a>

### method.number([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a number

**Alias:** `methodNumber`

**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.number</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |
| [options.min] | <code>Number</code> |  | Passed to enforce.number |
| [options.max] | <code>Number</code> |  | Passed to enforce.number |


<br><a name="method.object"></a>

### method.object([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a plain object

**Alias:** `methodObject`

**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.object</code> |  |
| [options.compare] | <code>function</code> | <code>deepCompare</code> | Performs a deep comparison between values |
| [options.deep] | <code>Boolean</code> | <code>true</code> | If false then only use strict equality |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |


<br><a name="method.queue"></a>

### method.queue([options]) ⇒ <code>function</code>
> Builds a chainable method that implements a [Queue](docs/Queue.md)

**Alias:** `methodQueue`

**Returns**: <code>function</code> - accepts a new value and returns the methods constructor (allows chaining), or if no args are passed returns the instance of Queue  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> |  |
| [options.set] | <code>function</code> | Called after a new callback is added to the queue. Provides a reference to the queue, the new id for the callback, the callback, and sets the context to the methods constructor. |


<br><a name="method.regExp"></a>

### method.regExp([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a RegExp

**Alias:** `methodRegExp`

**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.init] | <code>\*</code> | <code>&#x27;&#x27;</code> |  |
| [options.enforce] | <code>function</code> | <code>enforce.string</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |


<br><a name="method.set"></a>

### method.set([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a Set

**Alias:** `methodSet`

**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.set</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |


<br><a name="method.string"></a>

### method.string([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a string

**Alias:** `methodString`

**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.init] | <code>\*</code> | <code>&#x27;&#x27;</code> |  |
| [options.enforce] | <code>function</code> | <code>enforce.string</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |


<br><a name="method.symbol"></a>

### method.symbol([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a Symbol

**Alias:** `methodSymbol`

**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.symbol</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |


<br><a name="method.weakMap"></a>

### method.weakMap([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a WeakMap

**Alias:** `methodWeakMap`

**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.weakMap</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |


<br><a name="method.weakSet"></a>

### method.weakSet([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/weakSetting a WeakSet

**Alias:** `methodWeakSet`

**Extends**: [<code>any</code>](#method.any)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Same as [any](#method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.weakSet</code> |  |
| [options.coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |


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
