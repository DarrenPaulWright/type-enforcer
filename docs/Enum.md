# type-enforcer
[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/type-enforcer?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile=package.json)

Type enforcement library for javascript

<a name="Enum"></a>

## Enum
**Kind**: global class  

* [Enum](#Enum)
    * [new Enum(object)](#new_Enum_new)
    * [.has(value)](#Enum+has) ⇒ <code>boolean</code>
    * [.key(value)](#Enum+key) ⇒ <code>String</code>
    * [.each(callback)](#Enum+each)

<a name="new_Enum_new"></a>

### new Enum(object)
Freezes an enumerable object and adds a "has" method

## Usage
``` javascript
import { Enum } from 'type-enforcer';
```


| Param | Type |
| --- | --- |
| object | <code>Object</code> | 

<a name="Enum+has"></a>

### enum.has(value) ⇒ <code>boolean</code>
Check if a provided value is in this enum

**Kind**: instance method of [<code>Enum</code>](#Enum)  

| Param | Type |
| --- | --- |
| value | <code>String</code> | 

<a name="Enum+key"></a>

### enum.key(value) ⇒ <code>String</code>
Get the key of a provided value

**Kind**: instance method of [<code>Enum</code>](#Enum)  

| Param | Type |
| --- | --- |
| value | <code>String</code> | 

<a name="Enum+each"></a>

### enum.each(callback)
Calls a callback with each of the enum values
``` javascript
const items = new Enum({
    THING: 'thing'
});

items.each((value) => {
    console.log(value);
});
// => 'thing'
```

**Kind**: instance method of [<code>Enum</code>](#Enum)  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 


## License

[MIT](https://github.com/darrenpaulwright/type-enforcer/blob/master/LICENSE.md)

[npm]: https://img.shields.io/npm/v/type-enforcer.svg
[npm-url]: https://npmjs.com/package/type-enforcer
[build]: https://travis-ci.org/DarrenPaulWright/type-enforcer.svg?branch=master
[build-url]: https://travis-ci.org/DarrenPaulWright/type-enforcer
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer
[size]: https://packagephobia.now.sh/badge?p=type-enforcer
[size-url]: https://packagephobia.now.sh/result?p=type-enforcer
