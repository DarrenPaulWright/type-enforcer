# type-enforcer
[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile=package.json)

Type enforcement library for javascript

<a name="Enum"></a>

## Enum
**Kind**: global class  

* [Enum](#Enum)
    * [new Enum(value)](#new_Enum_new)
    * [.has(value)](#Enum+has) ⇒ <code>boolean</code>

<a name="new_Enum_new"></a>

### new Enum(value)
Freezes an enumerable object and adds a "has" method

## Usage
``` javascript
import { Enum } from 'type-enforcer';
```


| Param | Type |
| --- | --- |
| value | <code>Object</code> | 

<a name="Enum+has"></a>

### enum.has(value) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Enum</code>](#Enum)  

| Param | Type |
| --- | --- |
| value | <code>String</code> | 


## License

[MIT](https://github.com/darrenpaulwright/type-enforcer/blob/master/LICENSE.md)

[npm]: https://img.shields.io/npm/v/type-enforcer.svg
[npm-url]: https://npmjs.com/package/type-enforcer
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer
[size]: https://packagephobia.now.sh/badge?p=type-enforcer
[size-url]: https://packagephobia.now.sh/result?p=type-enforcer
