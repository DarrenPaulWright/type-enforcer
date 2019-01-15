# type-enforcer
[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/type-enforcer?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile=package.json)

Type enforcement library for javascript

## Functions

<dl>
<dt><a href="#isArray">isArray(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is an <a href="https://lodash.com/docs/#isArray">array</a></p>
</dd>
<dt><a href="#isBoolean">isBoolean(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="https://lodash.com/docs/#isBoolean">boolean</a></p>
</dd>
<dt><a href="#isDate">isDate(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="https://lodash.com/docs/#isDate">date</a></p>
</dd>
<dt><a href="#isElement">isElement(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="https://lodash.com/docs/#isElement">DOM element</a></p>
</dd>
<dt><a href="#isFunction">isFunction(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="https://lodash.com/docs/#isFunction">function</a></p>
</dd>
<dt><a href="#isInstanceOf">isInstanceOf(object, constructor)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is an instance of a constructor.</p>
</dd>
<dt><a href="#isInt">isInt(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is an <a href="https://lodash.com/docs/#isInteger">integer</a></p>
</dd>
<dt><a href="#isJson">isJson(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value can be parsed as JSON</p>
</dd>
<dt><a href="#isNumber">isNumber(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="https://lodash.com/docs/#isNumber">number</a></p>
</dd>
<dt><a href="#isObject">isObject(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="https://lodash.com/docs/#isPlainObject">plain object</a></p>
</dd>
<dt><a href="#isRegExp">isRegExp(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="https://lodash.com/docs/#isRegExp">RegExp</a></p>
</dd>
<dt><a href="#isString">isString(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Check if a value is a <a href="https://lodash.com/docs/#isString">string</a></p>
</dd>
</dl>

<a name="isArray"></a>

## isArray(value) ⇒ <code>Boolean</code>
Check if a value is an [array](https://lodash.com/docs/#isArray)

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
``` javascriptimport { isArray } from 'type-enforcer';isArray([]);// => true```
<a name="isBoolean"></a>

## isBoolean(value) ⇒ <code>Boolean</code>
Check if a value is a [boolean](https://lodash.com/docs/#isBoolean)

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
``` javascriptimport { isBoolean } from 'type-enforcer';isBool(false);// => true```
<a name="isDate"></a>

## isDate(value) ⇒ <code>Boolean</code>
Check if a value is a [date](https://lodash.com/docs/#isDate)

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
``` javascriptimport { isDate } from 'type-enforcer';isDate(new Date());// => true```
<a name="isElement"></a>

## isElement(value) ⇒ <code>Boolean</code>
Check if a value is a [DOM element](https://lodash.com/docs/#isElement)

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
``` javascriptimport { isElement } from 'type-enforcer';isElement(document.createElement('div'));// => true```
<a name="isFunction"></a>

## isFunction(value) ⇒ <code>Boolean</code>
Check if a value is a [function](https://lodash.com/docs/#isFunction)

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
``` javascriptimport { isFunction } from 'type-enforcer';isFunc(() => {});// => true```
<a name="isInstanceOf"></a>

## isInstanceOf(object, constructor) ⇒ <code>Boolean</code>
Check if a value is an instance of a constructor.

**Kind**: global function  

| Param | Type |
| --- | --- |
| object | <code>\*</code> | 
| constructor | <code>function</code> | 

**Example**  
``` javascript
import { isInstanceOf } from 'type-enforcer';
```

Fixes issues with primitives and instanceOf
``` javascript
isInstanceOf(false, Boolean);
 => true

isInstanceOf(42, Number);
 => true

isInstanceOf('test', String);
 => true
```
<a name="isInt"></a>

## isInt(value) ⇒ <code>Boolean</code>
Check if a value is an [integer](https://lodash.com/docs/#isInteger)

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
``` javascriptimport { isInteger } from 'type-enforcer';isInt(42);// => true```
<a name="isJson"></a>

## isJson(value) ⇒ <code>Boolean</code>
Check if a value can be parsed as JSON

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
``` javascript
import { isJson } from 'type-enforcer';
```
<a name="isNumber"></a>

## isNumber(value) ⇒ <code>Boolean</code>
Check if a value is a [number](https://lodash.com/docs/#isNumber)

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
``` javascriptimport { isNumber } from 'type-enforcer';isNumber(3.14159);// => true```
<a name="isObject"></a>

## isObject(value) ⇒ <code>Boolean</code>
Check if a value is a [plain object](https://lodash.com/docs/#isPlainObject)

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
``` javascriptimport { isObject } from 'type-enforcer';isObject({});// => true```
<a name="isRegExp"></a>

## isRegExp(value) ⇒ <code>Boolean</code>
Check if a value is a [RegExp](https://lodash.com/docs/#isRegExp)

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
``` javascriptimport { isRegExp } from 'type-enforcer';isRegExp(/*+/g);// => true```
<a name="isString"></a>

## isString(value) ⇒ <code>Boolean</code>
Check if a value is a [string](https://lodash.com/docs/#isString)

**Kind**: global function  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
``` javascriptimport { isString } from 'type-enforcer';isString('type');// => true```

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
