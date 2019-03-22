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


<br><a name="Queue"></a>

### Queue


* [Queue](#Queue)
    * [new Queue()](#new_Queue_new)
    * [.length](#Queue+length) ⇒ <code>number</code>
    * [.isBusy](#Queue+isBusy) ⇒ <code>boolean</code>
    * [.add(callback, data)](#Queue+add) ⇒ <code>Number</code>
    * [.discard(ID)](#Queue+discard) ⇒ <code>Object</code>
    * [.discardAll()](#Queue+discardAll)
    * [.trigger([ID], [extraArguments], [context])](#Queue+trigger) ⇒ <code>this</code>
    * [.triggerFirst([extraArguments], [context])](#Queue+triggerFirst) ⇒ <code>this</code>


<br><a name="new_Queue_new"></a>

#### new Queue()
> A simple queue for callbacks that allows for adding, removing, and triggering all or specific callbacks

``` javascript
import { Queue } from 'type-enforcer';
```
>


<br><a name="Queue+length"></a>

#### queue.length ⇒ <code>number</code>
> The total number of current callbacks in this queue.
>


<br><a name="Queue+isBusy"></a>

#### queue.isBusy ⇒ <code>boolean</code>
> See if this queue is currently executing callbacks.
>


<br><a name="Queue+add"></a>

#### queue.add(callback, data) ⇒ <code>Number</code>
> Add a callback to the queue.
>
> **Returns**: <code>Number</code> - A unique ID for this callback.<br>


| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Callback function. |
| data | <code>Object</code> | Any arbitrary data. Returned when the callback is discarded. |


<br><a name="Queue+discard"></a>

#### queue.discard(ID) ⇒ <code>Object</code>
> Remove a specific callback from the queue.
>
> **Returns**: <code>Object</code> - The data object added with this callback<br>


| Param | Type | Description |
| --- | --- | --- |
| ID | <code>Number</code> | The ID returned by Queue.add(). |


<br><a name="Queue+discardAll"></a>

#### queue.discardAll()
> Remove ALL callbacks from the queue.
>


<br><a name="Queue+trigger"></a>

#### queue.trigger([ID], [extraArguments], [context]) ⇒ <code>this</code>
> Triggers one or all callbacks.
>


| Param | Type | Description |
| --- | --- | --- |
| [ID] | <code>Number</code> | To trigger only a specific callback, provide the ID returned by Queue.add().    Otherwise all callbacks are called. |
| [extraArguments] | <code>Array</code> | Array of arguments to apply to each callback. |
| [context] | <code>Array</code> |  |


<br><a name="Queue+triggerFirst"></a>

#### queue.triggerFirst([extraArguments], [context]) ⇒ <code>this</code>
> Triggers the first callback and removes it from the queue.
>


| Param | Type | Description |
| --- | --- | --- |
| [extraArguments] | <code>Array</code> | Array of arguments to apply to each callback. |
| [context] | <code>Array</code> | "this" applied to the callback |


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
