# type-enforcer
[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/type-enforcer?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile=package.json)

Type enforcement library for javascript

<a name="Vector"></a>

## Vector
**Kind**: global class  

* [Vector](#Vector)
    * [new Vector([start], [end])](#new_Vector_new)
    * _instance_
        * [.isSame(vector2)](#Vector+isSame) ⇒ <code>Boolean</code>
        * [.invert()](#Vector+invert)
        * [.toString()](#Vector+toString)
        * [.start([point])](#Vector+start) ⇒ <code>this</code> \| <code>Point</code>
        * [.end([point])](#Vector+end) ⇒ <code>this</code> \| <code>Point</code>
        * [.length([length])](#Vector+length) ⇒ <code>this</code> \| <code>Number</code>
        * [.angle([angle])](#Vector+angle) ⇒ <code>this</code> \| <code>Number</code>
        * [.offset([point])](#Vector+offset) ⇒ <code>this</code> \| <code>Point</code>
    * _static_
        * [.isValid(value)](#Vector.isValid) ⇒ <code>boolean</code>
        * [.isInstance(is)](#Vector.isInstance) ⇒ <code>boolean</code>

<a name="new_Vector_new"></a>

### new Vector([start], [end])
Vector model with helper types## Usage``` javascriptimport { Vector } from 'type-enforcer';```


| Param | Type |
| --- | --- |
| [start] | <code>Point</code> | 
| [end] | <code>Point</code> | 

<a name="Vector+isSame"></a>

### vector.isSame(vector2) ⇒ <code>Boolean</code>
Determine if another vector is the same as this one

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type |
| --- | --- |
| vector2 | [<code>Vector</code>](#Vector) | 

<a name="Vector+invert"></a>

### vector.invert()
Switch the start and end points

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+toString"></a>

### vector.toString()
Get a string representation of the vector

**Kind**: instance method of [<code>Vector</code>](#Vector)  
<a name="Vector+start"></a>

### vector.start([point]) ⇒ <code>this</code> \| <code>Point</code>
The start point

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type |
| --- | --- |
| [point] | <code>Point</code> | 

<a name="Vector+end"></a>

### vector.end([point]) ⇒ <code>this</code> \| <code>Point</code>
The end point

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type |
| --- | --- |
| [point] | <code>Point</code> | 

<a name="Vector+length"></a>

### vector.length([length]) ⇒ <code>this</code> \| <code>Number</code>
The length of the vector. Resets the end point.

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type |
| --- | --- |
| [length] | <code>Number</code> | 

<a name="Vector+angle"></a>

### vector.angle([angle]) ⇒ <code>this</code> \| <code>Number</code>
The angle from the start point to the end point. Resets the end point

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type |
| --- | --- |
| [angle] | <code>Number</code> | 

<a name="Vector+offset"></a>

### vector.offset([point]) ⇒ <code>this</code> \| <code>Point</code>
The x and y difference represented as a point

**Kind**: instance method of [<code>Vector</code>](#Vector)  

| Param | Type |
| --- | --- |
| [point] | <code>Point</code> | 

<a name="Vector.isValid"></a>

### Vector.isValid(value) ⇒ <code>boolean</code>
Determine if something is a valid Vector

**Kind**: static method of [<code>Vector</code>](#Vector)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

<a name="Vector.isInstance"></a>

### Vector.isInstance(is) ⇒ <code>boolean</code>
Determine if something is an instance of Vector

**Kind**: static method of [<code>Vector</code>](#Vector)  

| Param | Type |
| --- | --- |
| is | [<code>Vector</code>](#Vector) | 


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
