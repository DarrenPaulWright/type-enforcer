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


<br><a name="DockPoint"></a>

### DockPoint


* [DockPoint](#DockPoint)
    * [new DockPoint([value])](#new_DockPoint_new)
    * _instance_
        * [.oppositePrimary](#DockPoint+oppositePrimary) ⇒ <code>String</code>
        * [.oppositeSecondary](#DockPoint+oppositeSecondary) ⇒ <code>String</code>
        * [.has(value)](#DockPoint+has) ⇒ <code>boolean</code>
        * [.swapHorizontal()](#DockPoint+swapHorizontal)
        * [.swapVertical()](#DockPoint+swapVertical)
        * [.isSame(dockPoint)](#DockPoint+isSame) ⇒ <code>boolean</code>
        * [.toString()](#DockPoint+toString) ⇒ <code>String</code>
        * [.primary([value])](#DockPoint+primary) ⇒ <code>this</code> \| <code>String</code>
        * [.secondary([value])](#DockPoint+secondary) ⇒ <code>this</code> \| <code>String</code>
        * [.value([value])](#DockPoint+value) ⇒ <code>this</code> \| <code>String</code>
    * _static_
        * [.BASIC_POINTS](#DockPoint.BASIC_POINTS) : <code>Enum</code>
        * [.POINTS](#DockPoint.POINTS) : <code>Enum</code>
        * [.isValid(value)](#DockPoint.isValid) ⇒ <code>boolean</code>


<br><a name="new_DockPoint_new"></a>

#### new DockPoint([value])
> Allows the designation of a specific point relative to an object.

``` javascript
import { DockPoint } from 'type-enforcer';
```
>


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [value] | <code>String</code> | <code>DockPoint.POINTS.TOP_CENTER</code> | Anything from DockPoint.POINTS |


<br><a name="DockPoint+oppositePrimary"></a>

#### dockPoint.oppositePrimary ⇒ <code>String</code>
> Get the opposite of the current primary
>
> **Returns**: <code>String</code> - DockPoint.BASIC_POINTS<br>


<br><a name="DockPoint+oppositeSecondary"></a>

#### dockPoint.oppositeSecondary ⇒ <code>String</code>
> Get the opposite of the current secondary
>
> **Returns**: <code>String</code> - DockPoint.BASIC_POINTS<br>


<br><a name="DockPoint+has"></a>

#### dockPoint.has(value) ⇒ <code>boolean</code>
> Determine either the primary or secondary is equivalent to a value
>


| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | DockPoint.BASIC_POINTS |


<br><a name="DockPoint+swapHorizontal"></a>

#### dockPoint.swapHorizontal()
> Set the left or right value to the opposite, whether it's the primary or secondary
>


<br><a name="DockPoint+swapVertical"></a>

#### dockPoint.swapVertical()
> Set the top or bottom value to the opposite, whether it's the primary or secondary
>


<br><a name="DockPoint+isSame"></a>

#### dockPoint.isSame(dockPoint) ⇒ <code>boolean</code>
> Determine if another DockPoint is equivalent to this one
>


| Param | Type |
| --- | --- |
| dockPoint | <code>\*</code> | 


<br><a name="DockPoint+toString"></a>

#### dockPoint.toString() ⇒ <code>String</code>
> Get the current value as a string
>


<br><a name="DockPoint+primary"></a>

#### dockPoint.primary([value]) ⇒ <code>this</code> \| <code>String</code>
> The primary value
>
> **Returns**: <code>this</code> \| <code>String</code> - DockPoint.BASIC_POINTS<br>


| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>String</code> | DockPoint.BASIC_POINTS |


<br><a name="DockPoint+secondary"></a>

#### dockPoint.secondary([value]) ⇒ <code>this</code> \| <code>String</code>
> The secondary value
>
> **Returns**: <code>this</code> \| <code>String</code> - DockPoint.BASIC_POINTS<br>


| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>String</code> | DockPoint.BASIC_POINTS |


<br><a name="DockPoint+value"></a>

#### dockPoint.value([value]) ⇒ <code>this</code> \| <code>String</code>
> The full value
>
> **Returns**: <code>this</code> \| <code>String</code> - DockPoint.POINTS<br>


| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>String</code> | DockPoint.POINTS |


<br><a name="DockPoint.BASIC_POINTS"></a>

#### DockPoint.BASIC\_POINTS : <code>Enum</code>


<br><a name="DockPoint.POINTS"></a>

#### DockPoint.POINTS : <code>Enum</code>


<br><a name="DockPoint.isValid"></a>

#### DockPoint.isValid(value) ⇒ <code>boolean</code>
> Determine if something is a valid dock point
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
