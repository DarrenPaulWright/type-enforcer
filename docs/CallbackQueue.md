# type-enforcer
[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]

Type enforcement library for javascript

<a name="CallbackQueue"></a>

## CallbackQueue
**Kind**: global class  

* [CallbackQueue](#CallbackQueue)
    * [new CallbackQueue()](#new_CallbackQueue_new)
    * [.add(callback, data)](#CallbackQueue+add) ⇒ <code>Number</code>
    * [.discard(ID)](#CallbackQueue+discard) ⇒ <code>Object</code>
    * [.discardAll()](#CallbackQueue+discardAll)
    * [.trigger([ID], [extraArguments], [context])](#CallbackQueue+trigger) ⇒ <code>this</code>
    * [.triggerFirst([extraArguments], [context])](#CallbackQueue+triggerFirst) ⇒ <code>this</code>
    * [.getTotalCallbacks()](#CallbackQueue+getTotalCallbacks) ⇒ <code>number</code>
    * [.getCallbacks()](#CallbackQueue+getCallbacks) ⇒ <code>object</code>
    * [.isBusy()](#CallbackQueue+isBusy) ⇒ <code>boolean</code>

<a name="new_CallbackQueue_new"></a>

### new CallbackQueue()
A simple queue for callbacks that allows for adding, removing, and triggering all or specific callbacks## Usage``` javascriptimport { CallbackQueue } from 'type-enforcer';```

<a name="CallbackQueue+add"></a>

### callbackQueue.add(callback, data) ⇒ <code>Number</code>
Add a callback to the queue.

**Kind**: instance method of [<code>CallbackQueue</code>](#CallbackQueue)  
**Returns**: <code>Number</code> - A unique ID for this callback.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Callback function. |
| data | <code>Object</code> | Any arbitrary data. Returned when the callback is discarded. |

<a name="CallbackQueue+discard"></a>

### callbackQueue.discard(ID) ⇒ <code>Object</code>
Remove a specific callback from the queue.

**Kind**: instance method of [<code>CallbackQueue</code>](#CallbackQueue)  
**Returns**: <code>Object</code> - The data object added with this callback  

| Param | Type | Description |
| --- | --- | --- |
| ID | <code>Number</code> | The ID returned by CallbackQueue.add(). |

<a name="CallbackQueue+discardAll"></a>

### callbackQueue.discardAll()
Remove ALL callbacks from the queue.

**Kind**: instance method of [<code>CallbackQueue</code>](#CallbackQueue)  
<a name="CallbackQueue+trigger"></a>

### callbackQueue.trigger([ID], [extraArguments], [context]) ⇒ <code>this</code>
Triggers one or all callbacks.

**Kind**: instance method of [<code>CallbackQueue</code>](#CallbackQueue)  

| Param | Type | Description |
| --- | --- | --- |
| [ID] | <code>Number</code> | To trigger only a specific callback, provide the ID returned by CallbackQueue.add().    Otherwise all callbacks are called. |
| [extraArguments] | <code>Array</code> | Array of arguments to apply to each callback. |
| [context] | <code>Array</code> |  |

<a name="CallbackQueue+triggerFirst"></a>

### callbackQueue.triggerFirst([extraArguments], [context]) ⇒ <code>this</code>
Triggers the first callback and removes it from the queue.

**Kind**: instance method of [<code>CallbackQueue</code>](#CallbackQueue)  

| Param | Type | Description |
| --- | --- | --- |
| [extraArguments] | <code>Array</code> | Array of arguments to apply to each callback. |
| [context] | <code>Array</code> | "this" applied to the callback |

<a name="CallbackQueue+getTotalCallbacks"></a>

### callbackQueue.getTotalCallbacks() ⇒ <code>number</code>
The total number of current callbacks in this queue.

**Kind**: instance method of [<code>CallbackQueue</code>](#CallbackQueue)  
<a name="CallbackQueue+getCallbacks"></a>

### callbackQueue.getCallbacks() ⇒ <code>object</code>
Gets the callback object

**Kind**: instance method of [<code>CallbackQueue</code>](#CallbackQueue)  
<a name="CallbackQueue+isBusy"></a>

### callbackQueue.isBusy() ⇒ <code>boolean</code>
See if this queue is currently executing callbacks.

**Kind**: instance method of [<code>CallbackQueue</code>](#CallbackQueue)  

## License

[MIT](./LICENSE.md)

[npm]: https://img.shields.io/npm/v/type-enforcer.svg
[npm-url]: https://npmjs.com/package/type-enforcer
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer
[size]: https://packagephobia.now.sh/badge?p=type-enforcer
[size-url]: https://packagephobia.now.sh/result?p=type-enforcer
