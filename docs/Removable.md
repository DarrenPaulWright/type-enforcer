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


<br><a name="Removable"></a>

### Removable

* [Removable](#Removable)
    * [new Removable()](#new_Removable_new)
    * [.isRemoved](#Removable+isRemoved) ⇒ <code>Boolean</code>


<br><a name="new_Removable_new"></a>

#### new Removable()
> A mixin that adds methods to a class to facilitate clean-up
> 
> ``` javascript
> import { Removable } from 'type-enforcer';
> 
> class MyClass extends Removable {}
> ```


<br><a name="Removable+isRemoved"></a>

#### removable.isRemoved ⇒ <code>Boolean</code>
> If the returned value is true then remove has been called.


<br><a name="remove"></a>

### .remove()
> Calls all the onRemove callbacks and sets isRemoved to true


<br><a name="onRemove"></a>

### .onRemove(callback) ⇒ <code>Queue</code>
> Adds a callback to a [Queue](docs/Queue.md) that gets triggered when the "remove" method is called


| Param | Type |
| --- | --- |
| callback | <code>function</code> | 


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
