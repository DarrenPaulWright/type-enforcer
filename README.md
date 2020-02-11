# Type Enforcer

[![Greenkeeper badge](https://badges.greenkeeper.io/DarrenPaulWright/type-enforcer.svg)](https://greenkeeper.io/)


> A type enforcement library for javascript
>
> [![npm][npm]][npm-url]
[![build][build]][build-url]
[![coverage][coverage]][coverage-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![license][license]][license-url]

<br><a name="Installation"></a>

## Installation
```
npm install type-enforcer
```
_Requires Babel 7.2+_


<br>

## Objects

<dl>
<dt><a href="docs/is.md">is</a> : <code>object</code></dt>
<dd><p>Utility functions for checking if a value is a particular data type.</p>
</dd>
<dt><a href="docs/enforce.md">enforce</a> : <code>object</code></dt>
<dd><p>Utility functions for enforcing data types.</p>
</dd>
<dt><a href="docs/method.md">method</a> : <code>object</code></dt>
<dd><p>Enforce data types and remove common boilerplate code on class methods.</p>
</dd>
</dl>

<br>

## Classes

<dl>
<dt><a href="docs/Enum.md">Enum</a></dt>
<dd><p>Freezes an enumerable object and adds a few helper methods</p>
</dd>
<dt><a href="docs/Queue.md">Queue</a></dt>
<dd><p>A simple queue for callbacks that allows for adding, removing, and triggering all or specific callbacks</p>
</dd>
<dt><a href="docs/Removable.md">Removable</a></dt>
<dd><p>A mixin that adds methods to a class to facilitate clean-up</p>
</dd>
<dt><a href="docs/PrivateVars.md">PrivateVars</a></dt>
<dd><p>A thin wrapper over WeakMap for storing private variables</p>
</dd>
</dl>

<br>

## Functions

<dl>
<dt><a href="docs/abstractEquality.md">abstractEquality(a, b)</a> ⇒ <code>boolean</code></dt>
<dd><p>Performs an abstract equality check (==) between two values.</p>
</dd>
<dt><a href="docs/sameValue.md">sameValue(a, b)</a> ⇒ <code>boolean</code></dt>
<dd><p>Performs a SameValue equality check (Object.is) between two values.</p>
</dd>
<dt><a href="docs/sameValueZero.md">sameValueZero(a, b)</a> ⇒ <code>boolean</code></dt>
<dd><p>Performs a SameValueZero equality check between two values.</p>
</dd>
<dt><a href="docs/strictEquality.md">strictEquality(a, b)</a> ⇒ <code>boolean</code></dt>
<dd><p>Performs a strict equality check (===) between two values.</p>
</dd>
<dt><a href="docs/applySettings.md">applySettings(target, settings, [priority], [deferred])</a></dt>
<dd><p>Iterates over the provided settings and calls any methods of the same name, passing the value in as the argument.</p>
</dd>
<dt><a href="docs/castArray.md">castArray(value)</a> ⇒ <code>Array</code></dt>
<dd><p>Casts a value to an array.</p>
</dd>
</dl>

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
