# type-enforcer
[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/type-enforcer?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile=package.json)

A type enforcement library for javascript

## Classes

<dl>
<dt><a href="#Removable">Removable</a></dt>
<dd></dd>
</dl>

<a name="Removable"></a>

## Removable
**Kind**: global class  

* [Removable](#Removable)
    * [new Removable()](#new_Removable_new)
    * [.isRemoved](#Removable+isRemoved) ⇒ <code>Boolean</code>

<a name="new_Removable_new"></a>

### new Removable()
A mixin that adds methods to a class to facilitate clean-up## Usage``` javascriptimport { Removable } from 'type-enforcer';class MyClass extends Removable {}```

<a name="Removable+isRemoved"></a>

### removable.isRemoved ⇒ <code>Boolean</code>
If the returned value is true then remove has been called.

**Kind**: instance property of [<code>Removable</code>](#Removable)  
<a name="remove"></a>

## .remove()
Calls all the onRemove callbacks and sets isRemoved to true

**Kind**: instance function  
<a name="onRemove"></a>

## .onRemove(callback) ⇒ <code>Queue</code>
Adds a callback to a [Queue](docs/Queue.md) that gets triggered when the "remove" method is called

**Kind**: instance function  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 


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
