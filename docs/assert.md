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


<br><a name="assert"></a>

## assert : <code>object</code>
> An assertion library for testing. Assertions do nothing if the test passes, and throw an AssertionError if they fail.


* [assert](#assert) : <code>object</code>
    * [.is(actual, expected)](#assert.is)
    * [.notIs(actual, expected)](#assert.notIs)
    * [.equal(actual, expected)](#assert.equal)
    * [.notEqual(actual, expected)](#assert.notEqual)
    * [.moreThan(leftOperand, rightOperand)](#assert.moreThan)
    * [.atLeast(leftOperand, rightOperand)](#assert.atLeast)
    * [.lessThan(leftOperand, rightOperand)](#assert.lessThan)
    * [.atMost(leftOperand, rightOperand)](#assert.atMost)
    * [.throws(function)](#assert.throws)
    * [.notThrows(function)](#assert.notThrows)
    * [.array(actual)](#assert.array)
    * [.boolean(actual)](#assert.boolean)
    * [.date(actual)](#assert.date)
    * [.float(actual)](#assert.float)
    * [.function(actual)](#assert.function)
    * [.instanceOf(actual, constructor)](#assert.instanceOf)
    * [.integer(actual)](#assert.integer)
    * [.json(actual)](#assert.json)
    * [.map(actual)](#assert.map)
    * [.number(actual)](#assert.number)
    * [.object(actual)](#assert.object)
    * [.promise(actual)](#assert.promise)
    * [.regExp(actual)](#assert.regExp)
    * [.set(actual)](#assert.set)
    * [.string(actual)](#assert.string)
    * [.symbol(actual)](#assert.symbol)
    * [.weakMap(actual)](#assert.weakMap)
    * [.weakSet(actual)](#assert.weakSet)


<br><a name="assert.is"></a>

### assert.is(actual, expected)
> Check if two values are the same. Uses [sameValue](sameValue.md). Supports diffs in tools that use it.


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 
| expected | <code>unknown</code> | 

**Example**  
``` javascript
import { assert } from 'type-enforcer';

assert.is(12, 12);

assert.is([], []);
// => AssertionError

const array = [];
assert.is(array, array);
```

<br><a name="assert.notIs"></a>

### assert.notIs(actual, expected)
> Check if two values are NOT the same. Uses [sameValue](sameValue.md).


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 
| expected | <code>unknown</code> | 

**Example**  
``` javascript
import { assert } from 'type-enforcer';

assert.notIs(12, 12);
// => AssertionError

assert.notIs([], []);

const array = [];
assert.notIs(array, array);
// => AssertionError
```

<br><a name="assert.equal"></a>

### assert.equal(actual, expected)
> Check if two values are deeply equal. Supports diffs in tools that use it.


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 
| expected | <code>unknown</code> | 

**Example**  
``` javascript
import { assert } from 'type-enforcer';

assert.equal(12, 12);

assert.equal([], []);

assert.equal([1, 2, 3], [1, 2, 4]);
// => AssertionError
```

<br><a name="assert.notEqual"></a>

### assert.notEqual(actual, expected)
> Check if two values are NOT deeply equal.


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 
| expected | <code>unknown</code> | 

**Example**  
``` javascript
import { assert } from 'type-enforcer';

assert.notEqual(12, 12);
// => AssertionError

assert.notEqual([], []);
// => AssertionError

assert.notEqual([1, 2, 3], [1, 2, 4]);
```

<br><a name="assert.moreThan"></a>

### assert.moreThan(leftOperand, rightOperand)
> Check if one value is more than another.


| Param | Type |
| --- | --- |
| leftOperand | <code>unknown</code> | 
| rightOperand | <code>unknown</code> | 

**Example**  
``` javascript
import { assert } from 'type-enforcer';

assert.moreThan(12, 10);

assert.moreThan(10, 12);
// => AssertionError
```

<br><a name="assert.atLeast"></a>

### assert.atLeast(leftOperand, rightOperand)
> Check if one value is at least as much as another.


| Param | Type |
| --- | --- |
| leftOperand | <code>unknown</code> | 
| rightOperand | <code>unknown</code> | 

**Example**  
``` javascript
import { assert } from 'type-enforcer';

assert.atLeast(10, 10);

assert.atLeast(10, 12);
// => AssertionError
```

<br><a name="assert.lessThan"></a>

### assert.lessThan(leftOperand, rightOperand)
> Check if one value is less than another.


| Param | Type |
| --- | --- |
| leftOperand | <code>unknown</code> | 
| rightOperand | <code>unknown</code> | 

**Example**  
``` javascript
import { assert } from 'type-enforcer';

assert.lessThan(10, 12);

assert.lessThan(12, 10);
// => AssertionError
```

<br><a name="assert.atMost"></a>

### assert.atMost(leftOperand, rightOperand)
> Check if one value is at most as much as another.


| Param | Type |
| --- | --- |
| leftOperand | <code>unknown</code> | 
| rightOperand | <code>unknown</code> | 

**Example**  
``` javascript
import { assert } from 'type-enforcer';

assert.atMost(10, 10);

assert.atMost(10, 12);
// => AssertionError
```

<br><a name="assert.throws"></a>

### assert.throws(function)
> Check if the provided function throws an error.


| Param | Type |
| --- | --- |
| function | <code>function</code> | 


<br><a name="assert.notThrows"></a>

### assert.notThrows(function)
> Check if the provided function doesn't throw an error.


| Param | Type |
| --- | --- |
| function | <code>function</code> | 


<br><a name="assert.array"></a>

### assert.array(actual)
> Check if a value is an [array](is.md#array).


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 


<br><a name="assert.boolean"></a>

### assert.boolean(actual)
> Check if a value is a [boolean](is.md#boolean).


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 


<br><a name="assert.date"></a>

### assert.date(actual)
> Check if a value is a [date](is.md#date).


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 


<br><a name="assert.float"></a>

### assert.float(actual)
> Check if a value is a [float](is.md#float).


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 


<br><a name="assert.function"></a>

### assert.function(actual)
> Check if a value is a [function](is.md#function).


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 


<br><a name="assert.instanceOf"></a>

### assert.instanceOf(actual, constructor)
> Check if a value is an [instanceOf](is.md#instanceOf) a constructor.


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 
| constructor | <code>function</code> | 


<br><a name="assert.integer"></a>

### assert.integer(actual)
> Check if a value is an [integer](is.md#integer).


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 


<br><a name="assert.json"></a>

### assert.json(actual)
> Check if a value is [json](is.md#json).


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 


<br><a name="assert.map"></a>

### assert.map(actual)
> Check if a value is a [Map](is.md#map).


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 


<br><a name="assert.number"></a>

### assert.number(actual)
> Check if a value is a [number](is.md#number).


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 


<br><a name="assert.object"></a>

### assert.object(actual)
> Check if a value is an [object](is.md#object).


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 


<br><a name="assert.promise"></a>

### assert.promise(actual)
> Check if a value is a [Promise](is.md#promise).


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 


<br><a name="assert.regExp"></a>

### assert.regExp(actual)
> Check if a value is a [RegExp](is.md#regExp).


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 


<br><a name="assert.set"></a>

### assert.set(actual)
> Check if a value is a [Set](is.md#set).


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 


<br><a name="assert.string"></a>

### assert.string(actual)
> Check if a value is a [string](is.md#string).


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 


<br><a name="assert.symbol"></a>

### assert.symbol(actual)
> Check if a value is a [Symbol](is.md#symbol).


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 


<br><a name="assert.weakMap"></a>

### assert.weakMap(actual)
> Check if a value is a [WeakMap](is.md#weakMap).


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 


<br><a name="assert.weakSet"></a>

### assert.weakSet(actual)
> Check if a value is a [WeakSet](is.md#weakSet).


| Param | Type |
| --- | --- |
| actual | <code>unknown</code> | 


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
