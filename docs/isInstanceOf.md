# type-enforcer
[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile=package.json)

Type enforcement library for javascript

<a name="isInstanceOf"></a>

## isInstanceOf(object, constructor) ⇒ <code>Boolean</code>
Check if a value is an instance of a constructor.## Usage``` javascriptimport { isInstanceOf } from 'type-enforcer';```Fixes issues with primitives and instanceOf, example:``` javascriptisInstanceOf(false, Boolean); => trueisInstanceOf(42, Number); => trueisInstanceOf('test', String); => true```

**Kind**: global function  

| Param | Type |
| --- | --- |
| object | <code>\*</code> | 
| constructor | <code>function</code> | 


## License

[MIT](https://github.com/darrenpaulwright/type-enforcer/blob/master/LICENSE.md)

[npm]: https://img.shields.io/npm/v/type-enforcer.svg
[npm-url]: https://npmjs.com/package/type-enforcer
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer
[size]: https://packagephobia.now.sh/badge?p=type-enforcer
[size-url]: https://packagephobia.now.sh/result?p=type-enforcer
