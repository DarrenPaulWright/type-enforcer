# type-enforcer
[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile=package.json)

Type enforcement library for javascript

<a name="DockPoint"></a>

## DockPoint
**Kind**: global class  

* [DockPoint](#DockPoint)
    * [new DockPoint([value])](#new_DockPoint_new)
    * _instance_
        * [.oppositePrimary](#DockPoint+oppositePrimary) ⇒ <code>String</code>
        * [.oppositeSecondary](#DockPoint+oppositeSecondary) ⇒ <code>String</code>
        * [.has(value)](#DockPoint+has) ⇒ <code>boolean</code>
        * [.swapHorizontal()](#DockPoint+swapHorizontal)
        * [.swapVertical()](#DockPoint+swapVertical)
        * [.primary([value])](#DockPoint+primary) ⇒ <code>this</code> \| <code>String</code>
        * [.secondary([value])](#DockPoint+secondary) ⇒ <code>this</code> \| <code>String</code>
        * [.value([value])](#DockPoint+value) ⇒ <code>this</code> \| <code>String</code>
    * _static_
        * [.BASIC_POINTS](#DockPoint.BASIC_POINTS) : <code>Enum</code>
        * [.POINTS](#DockPoint.POINTS) : <code>Enum</code>
        * [.isValid(value)](#DockPoint.isValid) ⇒ <code>boolean</code>
        * [.isInstance(is)](#DockPoint.isInstance) ⇒ <code>boolean</code>

<a name="new_DockPoint_new"></a>

### new DockPoint([value])
Allows the designation of a specific point relative to an object.

## Usage
``` javascript
import { DockPoint } from 'type-enforcer';
```


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [value] | <code>String</code> | <code>DockPoint.POINTS.TOP_CENTER</code> | Anything from DockPoint.POINTS |

<a name="DockPoint+oppositePrimary"></a>

### dockPoint.oppositePrimary ⇒ <code>String</code>
Get the opposite of the current primary

**Kind**: instance property of [<code>DockPoint</code>](#DockPoint)  
**Returns**: <code>String</code> - DockPoint.BASIC_POINTS  
<a name="DockPoint+oppositeSecondary"></a>

### dockPoint.oppositeSecondary ⇒ <code>String</code>
Get the opposite of the current secondary

**Kind**: instance property of [<code>DockPoint</code>](#DockPoint)  
**Returns**: <code>String</code> - DockPoint.BASIC_POINTS  
<a name="DockPoint+has"></a>

### dockPoint.has(value) ⇒ <code>boolean</code>
Determine either the primary or secondary is equivalent to a value

**Kind**: instance method of [<code>DockPoint</code>](#DockPoint)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | DockPoint.BASIC_POINTS |

<a name="DockPoint+swapHorizontal"></a>

### dockPoint.swapHorizontal()
Set the left or right value to the opposite, whether it's the primary or secondary

**Kind**: instance method of [<code>DockPoint</code>](#DockPoint)  
<a name="DockPoint+swapVertical"></a>

### dockPoint.swapVertical()
Set the top or bottom value to the opposite, whether it's the primary or secondary

**Kind**: instance method of [<code>DockPoint</code>](#DockPoint)  
<a name="DockPoint+primary"></a>

### dockPoint.primary([value]) ⇒ <code>this</code> \| <code>String</code>
The primary value

**Kind**: instance method of [<code>DockPoint</code>](#DockPoint)  
**Returns**: <code>this</code> \| <code>String</code> - DockPoint.BASIC_POINTS  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>String</code> | DockPoint.BASIC_POINTS |

<a name="DockPoint+secondary"></a>

### dockPoint.secondary([value]) ⇒ <code>this</code> \| <code>String</code>
The secondary value

**Kind**: instance method of [<code>DockPoint</code>](#DockPoint)  
**Returns**: <code>this</code> \| <code>String</code> - DockPoint.BASIC_POINTS  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>String</code> | DockPoint.BASIC_POINTS |

<a name="DockPoint+value"></a>

### dockPoint.value([value]) ⇒ <code>this</code> \| <code>String</code>
The full value

**Kind**: instance method of [<code>DockPoint</code>](#DockPoint)  
**Returns**: <code>this</code> \| <code>String</code> - DockPoint.POINTS  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>String</code> | DockPoint.POINTS |

<a name="DockPoint.BASIC_POINTS"></a>

### DockPoint.BASIC\_POINTS : <code>Enum</code>
**Kind**: static constant of [<code>DockPoint</code>](#DockPoint)  
<a name="DockPoint.POINTS"></a>

### DockPoint.POINTS : <code>Enum</code>
**Kind**: static constant of [<code>DockPoint</code>](#DockPoint)  
<a name="DockPoint.isValid"></a>

### DockPoint.isValid(value) ⇒ <code>boolean</code>
Determine if something is a valid dock point

**Kind**: static method of [<code>DockPoint</code>](#DockPoint)  

| Param | Type |
| --- | --- |
| value | <code>String</code> \| [<code>DockPoint</code>](#DockPoint) | 

<a name="DockPoint.isInstance"></a>

### DockPoint.isInstance(is) ⇒ <code>boolean</code>
Determine if something is an instance of DockPoint

**Kind**: static method of [<code>DockPoint</code>](#DockPoint)  

| Param | Type |
| --- | --- |
| is | [<code>DockPoint</code>](#DockPoint) | 


## License

[MIT](https://github.com/darrenpaulwright/type-enforcer/blob/master/LICENSE.md)

[npm]: https://img.shields.io/npm/v/type-enforcer.svg
[npm-url]: https://npmjs.com/package/type-enforcer
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer
[size]: https://packagephobia.now.sh/badge?p=type-enforcer
[size-url]: https://packagephobia.now.sh/result?p=type-enforcer
