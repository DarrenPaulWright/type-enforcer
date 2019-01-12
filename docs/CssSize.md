# type-enforcer
[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/type-enforcer?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile=package.json)

Type enforcement library for javascript

<a name="CssSize"></a>

## CssSize
**Kind**: global class  

* [CssSize](#CssSize)
    * [new CssSize([size])](#new_CssSize_new)
    * _instance_
        * [.units](#CssSize+units) ⇒ <code>String</code>
        * [.value](#CssSize+value) ⇒ <code>Number</code>
        * [.isAuto](#CssSize+isAuto) ⇒ <code>boolean</code>
        * [.isFixed](#CssSize+isFixed) ⇒ <code>boolean</code>
        * [.isPercent](#CssSize+isPercent) ⇒ <code>boolean</code>
        * [.set(size)](#CssSize+set) ⇒ <code>this</code>
        * [.toPixels([isNumber])](#CssSize+toPixels) ⇒ <code>Number</code> \| <code>String</code>
        * [.isSame(size)](#CssSize+isSame) ⇒ <code>boolean</code>
        * [.toString()](#CssSize+toString) ⇒ <code>String</code>
        * [.element([element])](#CssSize+element) ⇒ <code>this</code> \| <code>Element</code>
    * _static_
        * [.isValid(value)](#CssSize.isValid) ⇒ <code>boolean</code>
        * [.isInstance(size)](#CssSize.isInstance) ⇒ <code>boolean</code>

<a name="new_CssSize_new"></a>

### new CssSize([size])
A class for css sizes## Usage``` javascriptimport { CssSize } from 'type-enforcer';```


| Param | Type | Default |
| --- | --- | --- |
| [size] | <code>String</code> | <code>0</code> | 

<a name="CssSize+units"></a>

### cssSize.units ⇒ <code>String</code>
Get the units portion of the current value

**Kind**: instance property of [<code>CssSize</code>](#CssSize)  
<a name="CssSize+value"></a>

### cssSize.value ⇒ <code>Number</code>
Get the numeric portion of the current value

**Kind**: instance property of [<code>CssSize</code>](#CssSize)  
<a name="CssSize+isAuto"></a>

### cssSize.isAuto ⇒ <code>boolean</code>
Determine if the current value is 'auto'

**Kind**: instance property of [<code>CssSize</code>](#CssSize)  
<a name="CssSize+isFixed"></a>

### cssSize.isFixed ⇒ <code>boolean</code>
Determine if the current value is a fixed size

**Kind**: instance property of [<code>CssSize</code>](#CssSize)  
<a name="CssSize+isPercent"></a>

### cssSize.isPercent ⇒ <code>boolean</code>
Determine if the current value is a percent size

**Kind**: instance property of [<code>CssSize</code>](#CssSize)  
<a name="CssSize+set"></a>

### cssSize.set(size) ⇒ <code>this</code>
Set the value

**Kind**: instance method of [<code>CssSize</code>](#CssSize)  

| Param | Type | Description |
| --- | --- | --- |
| size | <code>String</code> | A valid css size, ie '32px', '1rem', 'auto', etc. |

<a name="CssSize+toPixels"></a>

### cssSize.toPixels([isNumber]) ⇒ <code>Number</code> \| <code>String</code>
Get the pixel equivalent of the current value

**Kind**: instance method of [<code>CssSize</code>](#CssSize)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isNumber] | <code>boolean</code> | <code>false</code> | If true then return a number, else a string with 'px' on the end. |

<a name="CssSize+isSame"></a>

### cssSize.isSame(size) ⇒ <code>boolean</code>
Determine if another size is equivalent to this one

**Kind**: instance method of [<code>CssSize</code>](#CssSize)  

| Param | Type |
| --- | --- |
| size | [<code>CssSize</code>](#CssSize) \| <code>String</code> | 

<a name="CssSize+toString"></a>

### cssSize.toString() ⇒ <code>String</code>
Get the current value as a string

**Kind**: instance method of [<code>CssSize</code>](#CssSize)  
<a name="CssSize+element"></a>

### cssSize.element([element]) ⇒ <code>this</code> \| <code>Element</code>
Set the element to measure font based units against

**Kind**: instance method of [<code>CssSize</code>](#CssSize)  

| Param | Type | Description |
| --- | --- | --- |
| [element] | <code>Element</code> | A DOM element |

<a name="CssSize.isValid"></a>

### CssSize.isValid(value) ⇒ <code>boolean</code>
Determine if something is a valid css size

**Kind**: static method of [<code>CssSize</code>](#CssSize)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="CssSize.isInstance"></a>

### CssSize.isInstance(size) ⇒ <code>boolean</code>
Determine if something is an instance of CssSize

**Kind**: static method of [<code>CssSize</code>](#CssSize)  

| Param | Type |
| --- | --- |
| size | [<code>CssSize</code>](#CssSize) | 


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
