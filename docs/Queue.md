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

## Queue
> A simple queue for callbacks that allows for adding, removing, and triggering all or specific callbacks


* [Queue](#Queue)
    * [new Queue()](#new_Queue_new)
    * [.length](#Queue+length) ⇒ <code>number</code>
    * [.isBusy](#Queue+isBusy) ⇒ <code>boolean</code>
    * [.bindTo(context)](#Queue+bindTo) ⇒ <code>object</code> \| <code>this</code>
    * [.add(callback)](#Queue+add) ⇒ <code>number</code> \| <code>void</code>
    * [.discard(id)](#Queue+discard) ⇒ <code>this</code>
    * [.discardAll()](#Queue+discardAll)
    * [.trigger([id], [extraArguments], [context])](#Queue+trigger) ⇒ <code>this</code>
    * [.triggerFirst([extraArguments], [context])](#Queue+triggerFirst) ⇒ <code>this</code>


<br><a name="new_Queue_new"></a>

### new Queue()
> ``` javascript
> import { Queue } from 'type-enforcer';
> ```


<br><a name="Queue+length"></a>

### queue.length ⇒ <code>number</code>
> The total number of current callbacks in this queue.


<br><a name="Queue+isBusy"></a>

### queue.isBusy ⇒ <code>boolean</code>
> See if this queue is currently executing callbacks.


<br><a name="Queue+bindTo"></a>

### queue.bindTo(context) ⇒ <code>object</code> \| <code>this</code>
> Binds all current and future callbacks to a specified context.

**Returns**: <code>object</code> \| <code>this</code> - If setting a value then this is returned, otherwise the current context.  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>object</code> | Callback function. |


<br><a name="Queue+add"></a>

### queue.add(callback) ⇒ <code>number</code> \| <code>void</code>
> Add a callback to the queue.

**Returns**: <code>number</code> \| <code>void</code> - A unique id for this callback.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Callback function. |


<br><a name="Queue+discard"></a>

### queue.discard(id) ⇒ <code>this</code>
> Remove a specific callback from the queue.


| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | The id returned by Queue.add(), or the same callback passed in to Queue.add(). |


<br><a name="Queue+discardAll"></a>

### queue.discardAll()
> Remove ALL callbacks from the queue.


<br><a name="Queue+trigger"></a>

### queue.trigger([id], [extraArguments], [context]) ⇒ <code>this</code>
> Triggers one or all callbacks. If one of the callbacks returns true then no further callbacks will be called.


| Param | Type | Description |
| --- | --- | --- |
| [id] | <code>number</code> | To trigger only a specific callback, provide the id returned by Queue.add(). Otherwise all callbacks are called. |
| [extraArguments] | <code>Array</code> | Array of arguments to apply to each callback. |
| [context] | <code>Array</code> | Ignored if bindTo is set. |


<br><a name="Queue+triggerFirst"></a>

### queue.triggerFirst([extraArguments], [context]) ⇒ <code>this</code>
> Triggers the first callback and removes it from the queue.


| Param | Type | Description |
| --- | --- | --- |
| [extraArguments] | <code>Array</code> | Array of arguments to apply to each callback. |
| [context] | <code>Array</code> | The context, or "this", applied to the callback. |


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
