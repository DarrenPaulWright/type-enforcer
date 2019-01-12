# type-enforcer
[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/type-enforcer?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile=package.json)

Type enforcement library for javascript

<a name="Queue"></a>

## Queue
**Kind**: global class  

* [Queue](#Queue)
    * [new Queue()](#new_Queue_new)
    * [.length](#Queue+length) ⇒ <code>number</code>
    * [.isBusy](#Queue+isBusy) ⇒ <code>boolean</code>
    * [.add(callback, data)](#Queue+add) ⇒ <code>Number</code>
    * [.discard(ID)](#Queue+discard) ⇒ <code>Object</code>
    * [.discardAll()](#Queue+discardAll)
    * [.trigger([ID], [extraArguments], [context])](#Queue+trigger) ⇒ <code>this</code>
    * [.triggerFirst([extraArguments], [context])](#Queue+triggerFirst) ⇒ <code>this</code>

<a name="new_Queue_new"></a>

### new Queue()
A simple queue for callbacks that allows for adding, removing, and triggering all or specific callbacks## Usage``` javascriptimport { Queue } from 'type-enforcer';```

<a name="Queue+length"></a>

### queue.length ⇒ <code>number</code>
The total number of current callbacks in this queue.

**Kind**: instance property of [<code>Queue</code>](#Queue)  
<a name="Queue+isBusy"></a>

### queue.isBusy ⇒ <code>boolean</code>
See if this queue is currently executing callbacks.

**Kind**: instance property of [<code>Queue</code>](#Queue)  
<a name="Queue+add"></a>

### queue.add(callback, data) ⇒ <code>Number</code>
Add a callback to the queue.

**Kind**: instance method of [<code>Queue</code>](#Queue)  
**Returns**: <code>Number</code> - A unique ID for this callback.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Callback function. |
| data | <code>Object</code> | Any arbitrary data. Returned when the callback is discarded. |

<a name="Queue+discard"></a>

### queue.discard(ID) ⇒ <code>Object</code>
Remove a specific callback from the queue.

**Kind**: instance method of [<code>Queue</code>](#Queue)  
**Returns**: <code>Object</code> - The data object added with this callback  

| Param | Type | Description |
| --- | --- | --- |
| ID | <code>Number</code> | The ID returned by Queue.add(). |

<a name="Queue+discardAll"></a>

### queue.discardAll()
Remove ALL callbacks from the queue.

**Kind**: instance method of [<code>Queue</code>](#Queue)  
<a name="Queue+trigger"></a>

### queue.trigger([ID], [extraArguments], [context]) ⇒ <code>this</code>
Triggers one or all callbacks.

**Kind**: instance method of [<code>Queue</code>](#Queue)  

| Param | Type | Description |
| --- | --- | --- |
| [ID] | <code>Number</code> | To trigger only a specific callback, provide the ID returned by Queue.add().    Otherwise all callbacks are called. |
| [extraArguments] | <code>Array</code> | Array of arguments to apply to each callback. |
| [context] | <code>Array</code> |  |

<a name="Queue+triggerFirst"></a>

### queue.triggerFirst([extraArguments], [context]) ⇒ <code>this</code>
Triggers the first callback and removes it from the queue.

**Kind**: instance method of [<code>Queue</code>](#Queue)  

| Param | Type | Description |
| --- | --- | --- |
| [extraArguments] | <code>Array</code> | Array of arguments to apply to each callback. |
| [context] | <code>Array</code> | "this" applied to the callback |


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
