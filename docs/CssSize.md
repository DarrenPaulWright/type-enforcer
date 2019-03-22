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


<br><a name="CssSize"></a>

### CssSize


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


<br><a name="new_CssSize_new"></a>

#### new CssSize([size])
> A class for css sizes

``` javascript
import { CssSize } from 'type-enforcer';
```
>


| Param | Type | Default |
| --- | --- | --- |
| [size] | <code>String</code> | <code>0</code> | 


<br><a name="CssSize+units"></a>

#### cssSize.units ⇒ <code>String</code>
> Get the units portion of the current value
>


<br><a name="CssSize+value"></a>

#### cssSize.value ⇒ <code>Number</code>
> Get the numeric portion of the current value
>


<br><a name="CssSize+isAuto"></a>

#### cssSize.isAuto ⇒ <code>boolean</code>
> Determine if the current value is 'auto'
>


<br><a name="CssSize+isFixed"></a>

#### cssSize.isFixed ⇒ <code>boolean</code>
> Determine if the current value is a fixed size
>


<br><a name="CssSize+isPercent"></a>

#### cssSize.isPercent ⇒ <code>boolean</code>
> Determine if the current value is a percent size
>


<br><a name="CssSize+set"></a>

#### cssSize.set(size) ⇒ <code>this</code>
> Set the value
>


| Param | Type | Description |
| --- | --- | --- |
| size | <code>String</code> | A valid css size, ie '32px', '1rem', 'auto', etc. |


<br><a name="CssSize+toPixels"></a>

#### cssSize.toPixels([isNumber]) ⇒ <code>Number</code> \| <code>String</code>
> Get the pixel equivalent of the current value
>


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isNumber] | <code>boolean</code> | <code>false</code> | If true then return a number, else a string with 'px' on the end. |


<br><a name="CssSize+isSame"></a>

#### cssSize.isSame(size) ⇒ <code>boolean</code>
> Determine if another size is equivalent to this one
>


| Param | Type |
| --- | --- |
| size | [<code>CssSize</code>](#CssSize), <code>String</code> | 


<br><a name="CssSize+toString"></a>

#### cssSize.toString() ⇒ <code>String</code>
> Get the current value as a string
>


<br><a name="CssSize+element"></a>

#### cssSize.element([element]) ⇒ <code>this</code> \| <code>Element</code>
> Set the element to measure font based units against
>


| Param | Type | Description |
| --- | --- | --- |
| [element] | <code>Element</code> | A DOM element |


<br><a name="CssSize.isValid"></a>

#### CssSize.isValid(value) ⇒ <code>boolean</code>
> Determine if something is a valid css size
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
