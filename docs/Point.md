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


<br><a name="Point"></a>

### Point


* [Point](#Point)
    * [new Point([x], [y])](#new_Point_new)
    * _instance_
        * [.set(x, y)](#Point+set) ⇒ <code>this</code>
        * [.toString([suffix])](#Point+toString) ⇒ <code>String</code>
        * [.isSame(point2)](#Point+isSame) ⇒ <code>Boolean</code>
        * [.add(point2)](#Point+add) ⇒ <code>Boolean</code>
        * [.subtract(point2)](#Point+subtract) ⇒ <code>Boolean</code>
        * [.distance()](#Point+distance) ⇒ <code>Number</code>
        * [.angle()](#Point+angle) ⇒ <code>Boolean</code>
        * [.pointAtDistance(angle, distance)](#Point+pointAtDistance) ⇒ <code>Boolean</code>
        * [.clone()](#Point+clone) ⇒ <code>Boolean</code>
    * _static_
        * [.isValid(value)](#Point.isValid) ⇒ <code>boolean</code>


<br><a name="new_Point_new"></a>

#### new Point([x], [y])
> Point model with helper methods
>


| Param | Type | Default |
| --- | --- | --- |
| [x] | <code>Number</code>, <code>Array</code>, <code>Object</code> | <code>0</code> | 
| [y] | <code>Number</code> | <code>0</code> | 

**Example**  
``` javascript
import { Point } from 'type-enforcer';

const point1 = new Point();
console.log(point1.toString());
// => '0,0'

const point2 = new Point({x:1, y:2});
console.log(point2.toString());
// => '1,2'

const point3 = new Point([3, 4]);
console.log(point3.toString());
// => '3,4'

const point4 = new Point(5, 6);
console.log(point4.toString());
// => '5,6'
console.log(point4.x);
// => 5
console.log(point4.y);
// => 6
```

<br><a name="Point+set"></a>

#### point.set(x, y) ⇒ <code>this</code>
> Set x and y
>


| Param | Type |
| --- | --- |
| x | <code>Number</code> | 
| y | <code>Number</code> | 


<br><a name="Point+toString"></a>

#### point.toString([suffix]) ⇒ <code>String</code>
> Get the point as a string with an optional suffix
>


| Param | Type |
| --- | --- |
| [suffix] | <code>String</code> | 


<br><a name="Point+isSame"></a>

#### point.isSame(point2) ⇒ <code>Boolean</code>
> Determine if another point is the same as this one
>


| Param | Type |
| --- | --- |
| point2 | [<code>Point</code>](#Point) | 


<br><a name="Point+add"></a>

#### point.add(point2) ⇒ <code>Boolean</code>
> Adds the coordinates of another point to this one and returns a new point
>


| Param | Type |
| --- | --- |
| point2 | [<code>Point</code>](#Point) | 


<br><a name="Point+subtract"></a>

#### point.subtract(point2) ⇒ <code>Boolean</code>
> Subtracts the coordinates of another point from this one and returns a new point
>


| Param | Type |
| --- | --- |
| point2 | [<code>Point</code>](#Point) | 


<br><a name="Point+distance"></a>

#### point.distance() ⇒ <code>Number</code>
> Finds the distance from point to origin
>


<br><a name="Point+angle"></a>

#### point.angle() ⇒ <code>Boolean</code>
> Finds the angle to this point from origin
>


<br><a name="Point+pointAtDistance"></a>

#### point.pointAtDistance(angle, distance) ⇒ <code>Boolean</code>
> Returns a new point at a specific angle and distance from this point
>


| Param | Type |
| --- | --- |
| angle | <code>Number</code> | 
| distance | <code>Number</code> | 


<br><a name="Point+clone"></a>

#### point.clone() ⇒ <code>Boolean</code>
> Get a clone of this point
>


<br><a name="Point.isValid"></a>

#### Point.isValid(value) ⇒ <code>boolean</code>
> Determine if something is a valid point
>


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
