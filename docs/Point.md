# type-enforcer
[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile=package.json)

Type enforcement library for javascript

<a name="Point"></a>

## Point
**Kind**: global class  

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
        * [.isInstance(is)](#Point.isInstance) ⇒ <code>boolean</code>

<a name="new_Point_new"></a>

### new Point([x], [y])
Point model with helper types


| Param | Type | Default |
| --- | --- | --- |
| [x] | <code>Number</code> \| <code>Array</code> \| <code>Object</code> | <code>0</code> | 
| [y] | <code>Number</code> | <code>0</code> | 

<a name="Point+set"></a>

### point.set(x, y) ⇒ <code>this</code>
Set x and y

**Kind**: instance method of [<code>Point</code>](#Point)  

| Param | Type |
| --- | --- |
| x | <code>Number</code> | 
| y | <code>Number</code> | 

<a name="Point+toString"></a>

### point.toString([suffix]) ⇒ <code>String</code>
Get the point as a string with an optional suffix

**Kind**: instance method of [<code>Point</code>](#Point)  

| Param | Type |
| --- | --- |
| [suffix] | <code>String</code> | 

<a name="Point+isSame"></a>

### point.isSame(point2) ⇒ <code>Boolean</code>
Determine if another point is the same as this one

**Kind**: instance method of [<code>Point</code>](#Point)  

| Param | Type |
| --- | --- |
| point2 | [<code>Point</code>](#Point) | 

<a name="Point+add"></a>

### point.add(point2) ⇒ <code>Boolean</code>
Adds the coordinates of another point to this one and returns a new point

**Kind**: instance method of [<code>Point</code>](#Point)  

| Param | Type |
| --- | --- |
| point2 | [<code>Point</code>](#Point) | 

<a name="Point+subtract"></a>

### point.subtract(point2) ⇒ <code>Boolean</code>
Subtracts the coordinates of another point from this one and returns a new point

**Kind**: instance method of [<code>Point</code>](#Point)  

| Param | Type |
| --- | --- |
| point2 | [<code>Point</code>](#Point) | 

<a name="Point+distance"></a>

### point.distance() ⇒ <code>Number</code>
Finds the distance from point to origin

**Kind**: instance method of [<code>Point</code>](#Point)  
<a name="Point+angle"></a>

### point.angle() ⇒ <code>Boolean</code>
Finds the angle to this point from origin

**Kind**: instance method of [<code>Point</code>](#Point)  
<a name="Point+pointAtDistance"></a>

### point.pointAtDistance(angle, distance) ⇒ <code>Boolean</code>
Returns a new point at a specific angle and distance from this point

**Kind**: instance method of [<code>Point</code>](#Point)  

| Param | Type |
| --- | --- |
| angle | <code>Number</code> | 
| distance | <code>Number</code> | 

<a name="Point+clone"></a>

### point.clone() ⇒ <code>Boolean</code>
Get a clone of this point

**Kind**: instance method of [<code>Point</code>](#Point)  
<a name="Point.isValid"></a>

### Point.isValid(value) ⇒ <code>boolean</code>
Determine if something is a valid point

**Kind**: static method of [<code>Point</code>](#Point)  

| Param | Type |
| --- | --- |
| value | <code>String</code> \| <code>Array</code> \| [<code>Point</code>](#Point) | 

<a name="Point.isInstance"></a>

### Point.isInstance(is) ⇒ <code>boolean</code>
Determine if something is an instance of Point

**Kind**: static method of [<code>Point</code>](#Point)  

| Param | Type |
| --- | --- |
| is | [<code>Point</code>](#Point) | 


## License

[MIT](https://github.com/darrenpaulwright/type-enforcer/blob/master/LICENSE.md)

[npm]: https://img.shields.io/npm/v/type-enforcer.svg
[npm-url]: https://npmjs.com/package/type-enforcer
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer
[size]: https://packagephobia.now.sh/badge?p=type-enforcer
[size-url]: https://packagephobia.now.sh/result?p=type-enforcer