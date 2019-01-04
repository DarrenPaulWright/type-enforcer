# type-enforcer
[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile=package.json)

Type enforcement library for javascript

<a name="Thickness"></a>

## Thickness
**Kind**: global class  

* [Thickness](#Thickness)
    * [new Thickness([top], [right], [bottom], [left])](#new_Thickness_new)
    * _instance_
        * [.top](#Thickness+top) : <code>CssSize</code>
        * [.right](#Thickness+right) : <code>CssSize</code>
        * [.bottom](#Thickness+bottom) : <code>CssSize</code>
        * [.left](#Thickness+left) : <code>CssSize</code>
        * [.horizontal](#Thickness+horizontal) : <code>Number</code>
        * [.vertical](#Thickness+vertical) : <code>Number</code>
        * [.set([top], [right], [bottom], [left])](#Thickness+set) ⇒ <code>boolean</code>
        * [.isSame(thickness)](#Thickness+isSame) ⇒ <code>Boolean</code>
        * [.toString()](#Thickness+toString) ⇒ <code>String</code>
        * [.element([element])](#Thickness+element) ⇒ <code>this</code> \| <code>Element</code>
    * _static_
        * [.isValid(value)](#Thickness.isValid) ⇒ <code>boolean</code>
        * [.isInstance(is)](#Thickness.isInstance) ⇒ <code>boolean</code>

<a name="new_Thickness_new"></a>

### new Thickness([top], [right], [bottom], [left])
Replicates the functionality of css border-width, margin, and padding, or anything that requires top, right, bottom, and left css sizes.


| Param | Type |
| --- | --- |
| [top] | <code>String</code> \| <code>Number</code> \| <code>Array</code> | 
| [right] | <code>String</code> \| <code>Number</code> | 
| [bottom] | <code>String</code> \| <code>Number</code> | 
| [left] | <code>String</code> \| <code>Number</code> | 

<a name="Thickness+top"></a>

### thickness.top : <code>CssSize</code>
The top size

**Kind**: instance property of [<code>Thickness</code>](#Thickness)  
<a name="Thickness+right"></a>

### thickness.right : <code>CssSize</code>
The right size

**Kind**: instance property of [<code>Thickness</code>](#Thickness)  
<a name="Thickness+bottom"></a>

### thickness.bottom : <code>CssSize</code>
The bottom size

**Kind**: instance property of [<code>Thickness</code>](#Thickness)  
<a name="Thickness+left"></a>

### thickness.left : <code>CssSize</code>
The left size

**Kind**: instance property of [<code>Thickness</code>](#Thickness)  
<a name="Thickness+horizontal"></a>

### thickness.horizontal : <code>Number</code>
Get the sum of the right and left

**Kind**: instance property of [<code>Thickness</code>](#Thickness)  
**Read only**: true  
<a name="Thickness+vertical"></a>

### thickness.vertical : <code>Number</code>
Get the sum of the top and bottom

**Kind**: instance property of [<code>Thickness</code>](#Thickness)  
**Read only**: true  
<a name="Thickness+set"></a>

### thickness.set([top], [right], [bottom], [left]) ⇒ <code>boolean</code>
Set the sizes of all sides

**Kind**: instance method of [<code>Thickness</code>](#Thickness)  

| Param | Type |
| --- | --- |
| [top] | <code>String</code> \| <code>Number</code> \| <code>Array</code> | 
| [right] | <code>String</code> \| <code>Number</code> | 
| [bottom] | <code>String</code> \| <code>Number</code> | 
| [left] | <code>String</code> \| <code>Number</code> | 

<a name="Thickness+isSame"></a>

### thickness.isSame(thickness) ⇒ <code>Boolean</code>
Determine if another thickness is the same as this one

**Kind**: instance method of [<code>Thickness</code>](#Thickness)  

| Param | Type |
| --- | --- |
| thickness | [<code>Thickness</code>](#Thickness) | 

<a name="Thickness+toString"></a>

### thickness.toString() ⇒ <code>String</code>
Get this thickness as a space separated string

**Kind**: instance method of [<code>Thickness</code>](#Thickness)  
<a name="Thickness+element"></a>

### thickness.element([element]) ⇒ <code>this</code> \| <code>Element</code>
Set the element to measure font based units against

**Kind**: instance method of [<code>Thickness</code>](#Thickness)  

| Param | Type | Description |
| --- | --- | --- |
| [element] | <code>Element</code> | A DOM element |

<a name="Thickness.isValid"></a>

### Thickness.isValid(value) ⇒ <code>boolean</code>
Determine if something is a valid Thickness

**Kind**: static method of [<code>Thickness</code>](#Thickness)  

| Param | Type |
| --- | --- |
| value | <code>String</code> \| [<code>Thickness</code>](#Thickness) | 

<a name="Thickness.isInstance"></a>

### Thickness.isInstance(is) ⇒ <code>boolean</code>
Determine if something is an instance of Thickness

**Kind**: static method of [<code>Thickness</code>](#Thickness)  

| Param | Type |
| --- | --- |
| is | [<code>Thickness</code>](#Thickness) | 


## License

[MIT](https://github.com/darrenpaulwright/type-enforcer/blob/master/LICENSE.md)

[npm]: https://img.shields.io/npm/v/type-enforcer.svg
[npm-url]: https://npmjs.com/package/type-enforcer
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer
[size]: https://packagephobia.now.sh/badge?p=type-enforcer
[size-url]: https://packagephobia.now.sh/result?p=type-enforcer