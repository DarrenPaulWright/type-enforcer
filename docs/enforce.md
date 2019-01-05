# type-enforcer
[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile=package.json)

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
    * [.instance(value, constructor, alt)](#enforce.instance) ⇒ <code>Object</code>
    * [.int(value, alt, [minValue], [maxValue])](#enforce.int) ⇒ <code>int</code>
    * [.number(value, alt, [minValue], [maxValue])](#enforce.number) ⇒ <code>Number</code>
    * [.object(value, alt)](#enforce.object) ⇒ <code>Object</code>
    * [.point(value, alt)](#enforce.point) ⇒ <code>Point</code>
    * [.string(value, alt)](#enforce.string) ⇒ <code>String</code>
    * [.thickness(value, alt)](#enforce.thickness) ⇒ <code>Thickness</code>
    * [.vector(value, alt)](#enforce.vector) ⇒ <code>Vector</code>

<a name="enforce.array"></a>

### enforce.array(value, alt) ⇒ <code>Array</code>
If the first value is an [array](https://lodash.com/docs/#isArray), then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 
| alt | <code>Array</code> | 

<a name="enforce.bool"></a>

### enforce.bool(value, alt) ⇒ <code>Boolean</code>
If the first value is a [boolean](https://lodash.com/docs/#isBoolean), then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 
| alt | <code>Boolean</code> | 

<a name="enforce.cssSize"></a>

### enforce.cssSize(value, alt) ⇒ <code>CssSize</code>
If the first value is a valid CssSize then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 
| alt | <code>CssSize</code> | 

<a name="enforce.date"></a>

### enforce.date(value, alt) ⇒ <code>Date</code>
If the first value is a [date](https://lodash.com/docs/#isDate) then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 
| alt | <code>Date</code> | 

<a name="enforce.dockPoint"></a>

### enforce.dockPoint(value, alt) ⇒ <code>DockPoint</code>
If the first value is a valid dockPoint then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 
| alt | <code>String</code> | 

<a name="enforce.element"></a>

### enforce.element(value, alt) ⇒ <code>Element</code>
If the first value is a [DOM element](https://lodash.com/docs/#isElement) then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 
| alt | <code>Element</code> | 

<a name="enforce.enum"></a>

### enforce.enum(value, enumerable, alt) ⇒ <code>String</code>
If the first value exists in the provided enum then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 
| enumerable | <code>Enum</code> | 
| alt | <code>String</code> | 

<a name="enforce.func"></a>

### enforce.func(value, alt) ⇒ <code>function</code>
If the first value is a [function](https://lodash.com/docs/#isFunction) then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 
| alt | <code>function</code> | 

<a name="enforce.instance"></a>

### enforce.instance(value, constructor, alt) ⇒ <code>Object</code>
If the first value is an instance of constructor then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 
| constructor | <code>function</code> | 
| alt | <code>Object</code> | 

<a name="enforce.int"></a>

### enforce.int(value, alt, [minValue], [maxValue]) ⇒ <code>int</code>
If the first value is an [integer](https://lodash.com/docs/#isInteger) then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 
| alt | <code>int</code> | 
| [minValue] | <code>int</code> | 
| [maxValue] | <code>int</code> | 

<a name="enforce.number"></a>

### enforce.number(value, alt, [minValue], [maxValue]) ⇒ <code>Number</code>
If the first value is a [number](https://lodash.com/docs/#isNumber) (excluding NaN) then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type | Default |
| --- | --- | --- |
| value | <code>\*</code> |  | 
| alt | <code>Number</code> |  | 
| [minValue] | <code>Number</code> | <code>-Infinity</code> | 
| [maxValue] | <code>Number</code> | <code>Infinity</code> | 

<a name="enforce.object"></a>

### enforce.object(value, alt) ⇒ <code>Object</code>
If the first value is a [plain object](https://lodash.com/docs/#isPlainObject) then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 
| alt | <code>Object</code> | 

<a name="enforce.point"></a>

### enforce.point(value, alt) ⇒ <code>Point</code>
If the first value is a point then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 
| alt | <code>Point</code> | 

<a name="enforce.string"></a>

### enforce.string(value, alt) ⇒ <code>String</code>
If the first value is a [string](https://lodash.com/docs/#isString) then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 
| alt | <code>String</code> | 

<a name="enforce.thickness"></a>

### enforce.thickness(value, alt) ⇒ <code>Thickness</code>
If the first value is a thickness then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 
| alt | <code>Thickness</code> | 

<a name="enforce.vector"></a>

### enforce.vector(value, alt) ⇒ <code>Vector</code>
If the first value is a vector then return that, otherwise return the alt value.

**Kind**: static method of [<code>enforce</code>](#enforce)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 
| alt | <code>Vector</code> | 


## License

[MIT](https://github.com/darrenpaulwright/type-enforcer/blob/master/LICENSE.md)

[npm]: https://img.shields.io/npm/v/type-enforcer.svg
[npm-url]: https://npmjs.com/package/type-enforcer
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer
[size]: https://packagephobia.now.sh/badge?p=type-enforcer
[size-url]: https://packagephobia.now.sh/result?p=type-enforcer
