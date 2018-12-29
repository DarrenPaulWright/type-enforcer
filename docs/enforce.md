# type-enforcer
[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]

Type enforcement library for javascript

<a name="enforce"></a>

## enforce : <code>object</code>
Utility functions for enforcing data types.## Usage``` javascriptimport { enforce } from 'type-enforcer';```

**Kind**: global typedef  

* [enforce](#enforce) : <code>object</code>
    * [.array(value, alt)](#enforce.array) ⇒ <code>Array</code>
    * [.bool(value, alt)](#enforce.bool) ⇒ <code>Boolean</code>
    * [.cssSize(value, alt)](#enforce.cssSize) ⇒ <code>CssSize</code>
    * [.date(value, alt)](#enforce.date) ⇒ <code>Date</code>
    * [.dockPoint(value, alt)](#enforce.dockPoint) ⇒ <code>DockPoint</code>
    * [.element(value, alt)](#enforce.element) ⇒ <code>Element</code>
    * [.enum(value, enumerable, alt)](#enforce.enum) ⇒ <code>String</code>
    * [.func(value, alt)](#enforce.func) ⇒ <code>function</code>
    * [.int(value, alt, [minValue], [maxValue])](#enforce.int) ⇒ <code>int</code>
    * [.number(value, alt, [minValue], [maxValue])](#enforce.number) ⇒ <code>Number</code>
    * [.object(value, alt)](#enforce.object) ⇒ <code>Object</code>
    * [.point(value, alt)](#enforce.point) ⇒ <code>Point</code>
    * [.string(value, alt)](#enforce.string) ⇒ <code>String</code>
    * [.thickness(value, alt)](#enforce.thickness) ⇒ <code>Thickness</code>
    * [.vector(value, alt)](#enforce.vector) ⇒ <code>Vector</code>

<a name="enforce.array"></a>

### enforce.array(value, alt) ⇒ <code>Array</code>
If the first value is an array, then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>Array</code> | 
| alt | <code>Array</code> | 

<a name="enforce.bool"></a>

### enforce.bool(value, alt) ⇒ <code>Boolean</code>
If the first value is a boolean, then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>Boolean</code> | 
| alt | <code>Boolean</code> | 

<a name="enforce.cssSize"></a>

### enforce.cssSize(value, alt) ⇒ <code>CssSize</code>
If the first value is a valid css size then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>CssSize</code> \| <code>String</code> | 
| alt | <code>CssSize</code> | 

<a name="enforce.date"></a>

### enforce.date(value, alt) ⇒ <code>Date</code>
If the first value is a valid js date or a momentjs instance of a valid date then return that, otherwise returnthe alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>Date</code> | 
| alt | <code>Date</code> | 

<a name="enforce.dockPoint"></a>

### enforce.dockPoint(value, alt) ⇒ <code>DockPoint</code>
If the first value is a valid dockPoint then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>String</code> | 
| alt | <code>String</code> | 

<a name="enforce.element"></a>

### enforce.element(value, alt) ⇒ <code>Element</code>
If the first value is a DOM element then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>Element</code> | 
| alt | <code>Element</code> | 

<a name="enforce.enum"></a>

### enforce.enum(value, enumerable, alt) ⇒ <code>String</code>
If the first value exists in the provided enum then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>String</code> | 
| enumerable | <code>Enum</code> | 
| alt | <code>String</code> | 

<a name="enforce.func"></a>

### enforce.func(value, alt) ⇒ <code>function</code>
If the first value is a function then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>function</code> | 
| alt | <code>function</code> | 

<a name="enforce.int"></a>

### enforce.int(value, alt, [minValue], [maxValue]) ⇒ <code>int</code>
If the first value is an integer then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>int</code> | 
| alt | <code>int</code> | 
| [minValue] | <code>int</code> | 
| [maxValue] | <code>int</code> | 

<a name="enforce.number"></a>

### enforce.number(value, alt, [minValue], [maxValue]) ⇒ <code>Number</code>
If the first value is a number then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>Number</code> | 
| alt | <code>Number</code> | 
| [minValue] | <code>Number</code> | 
| [maxValue] | <code>Number</code> | 

<a name="enforce.object"></a>

### enforce.object(value, alt) ⇒ <code>Object</code>
If the first value is a plain object then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>Object</code> | 
| alt | <code>Object</code> | 

<a name="enforce.point"></a>

### enforce.point(value, alt) ⇒ <code>Point</code>
If the first value is a point then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>String</code> \| <code>Point</code> | 
| alt | <code>Point</code> | 

<a name="enforce.string"></a>

### enforce.string(value, alt) ⇒ <code>String</code>
If the first value is a string then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>String</code> | 
| alt | <code>String</code> | 

<a name="enforce.thickness"></a>

### enforce.thickness(value, alt) ⇒ <code>Thickness</code>
If the first value is a thickness then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>String</code> \| <code>Thickness</code> | 
| alt | <code>Thickness</code> | 

<a name="enforce.vector"></a>

### enforce.vector(value, alt) ⇒ <code>Vector</code>
If the first value is a vector then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>Vector</code> | 
| alt | <code>Vector</code> | 


## License

[MIT](https://github.com/darrenpaulwright/type-enforcer/blob/master/LICENSE.md)

[npm]: https://img.shields.io/npm/v/type-enforcer.svg
[npm-url]: https://npmjs.com/package/type-enforcer
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer
[size]: https://packagephobia.now.sh/badge?p=type-enforcer
[size-url]: https://packagephobia.now.sh/result?p=type-enforcer
