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


<br><a name="Vector"></a>

### Vector

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


<br><a name="new_Vector_new"></a>

#### new Vector([start], [end])
> Vector model with helper types> > ``` javascript> import { Vector } from 'type-enforcer';> ```


| Param | Type |
| --- | --- |
| [start] | <code>Point</code> | 
| [end] | <code>Point</code> | 


<br><a name="Vector+isSame"></a>

#### vector.isSame(vector2) ⇒ <code>Boolean</code>
> Determine if another vector is the same as this one


| Param | Type |
| --- | --- |
| vector2 | [<code>Vector</code>](#Vector) | 


<br><a name="Vector+invert"></a>

#### vector.invert()
> Switch the start and end points


<br><a name="Vector+toString"></a>

#### vector.toString()
> Get a string representation of the vector


<br><a name="Vector+start"></a>

#### vector.start([point]) ⇒ <code>this</code> \| <code>Point</code>
> The start point


| Param | Type |
| --- | --- |
| [point] | <code>Point</code> | 


<br><a name="Vector+end"></a>

#### vector.end([point]) ⇒ <code>this</code> \| <code>Point</code>
> The end point


| Param | Type |
| --- | --- |
| [point] | <code>Point</code> | 


<br><a name="Vector+length"></a>

#### vector.length([length]) ⇒ <code>this</code> \| <code>Number</code>
> The length of the vector. Resets the end point.


| Param | Type |
| --- | --- |
| [length] | <code>Number</code> | 


<br><a name="Vector+angle"></a>

#### vector.angle([angle]) ⇒ <code>this</code> \| <code>Number</code>
> The angle from the start point to the end point. Resets the end point


| Param | Type |
| --- | --- |
| [angle] | <code>Number</code> | 


<br><a name="Vector+offset"></a>

#### vector.offset([point]) ⇒ <code>this</code> \| <code>Point</code>
> The x and y difference represented as a point


| Param | Type |
| --- | --- |
| [point] | <code>Point</code> | 


<br><a name="Vector.isValid"></a>

#### Vector.isValid(value) ⇒ <code>boolean</code>
> Determine if something is a valid Vector


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 


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
