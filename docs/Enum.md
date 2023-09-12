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


<br><a name="Enum"></a>

## Enum
> Freezes an enumerable object and adds a few helper methods


* [Enum](#Enum)
    * [new Enum(object)](#new_Enum_new)
    * [.has(value)](#Enum+has) ⇒ <code>boolean</code>
    * [.key(value)](#Enum+key) ⇒ <code>string</code> \| <code>undefined</code>
    * [.each(callback)](#Enum+each)


<br><a name="new_Enum_new"></a>

### new Enum(object)
> ``` javascript
> import { Enum } from 'type-enforcer';
> ```


| Param | Type |
| --- | --- |
| object | <code>Object.&lt;string, unknown&gt;</code> | 


<br><a name="Enum+has"></a>

### enum.has(value) ⇒ <code>boolean</code>
> Check if a provided value is in this enum.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | A value to check against the values in this Enum. |


<br><a name="Enum+key"></a>

### enum.key(value) ⇒ <code>string</code> \| <code>undefined</code>
> Get the key of a provided value.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | A value in this enum. |


<br><a name="Enum+each"></a>

### enum.each(callback)
> Calls a callback with each of the enum values.
> ``` javascript
> const items = new Enum({
>     THING: 'thing'
> });
> 
> items.each((value) => {
>     console.log(value);
> });
> // => 'thing'
> ```


| Param | Type | Description |
| --- | --- | --- |
| callback | <code>eachCallback</code> | Callback is provided one arg, the value. |


[npm]: https://img.shields.io/npm/v/type-enforcer.svg
[npm-url]: https://npmjs.com/package/type-enforcer
[build]: https://travis-ci.org/DarrenPaulWright/type-enforcer.svg?branch&#x3D;master
[build-url]: https://travis-ci.org/DarrenPaulWright/type-enforcer
[coverage]: https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer/badge.svg?branch&#x3D;master
[coverage-url]: https://coveralls.io/github/DarrenPaulWright/type-enforcer?branch&#x3D;master
[deps]: https://david-dm.org/DarrenPaulWright/type-enforcer.svg
[deps-url]: https://david-dm.org/DarrenPaulWright/type-enforcer
[size]: https://packagephobia.now.sh/badge?p&#x3D;type-enforcer
[size-url]: https://packagephobia.now.sh/result?p&#x3D;type-enforcer
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/type-enforcer.svg
[license-url]: https://npmjs.com/package/type-enforcer/LICENSE.md
