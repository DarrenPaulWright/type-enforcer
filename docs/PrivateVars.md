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


<br><a name="PrivateVars"></a>

### PrivateVars

<br><a name="new_PrivateVars_new"></a>

#### new PrivateVars()
> A thin wrapper over WeakMap for storing private variables

**Returns**: <code>function</code> - Gets a value from a WeakMap if a key is provided  
**Example**  
``` javascript
import { PrivateVars } from 'type-enforcer';

const _ = new PrivateVars();

class Widget {
    constructor() {
        _.set(this);
    }

    foo(bar) {
        if (bar) {
            _(this).bar = bar;

            return this;
        }

        return _(this).bar;
    }
}

const widget = new Widget();

widget.foo('something');

widget.foo();
// => 'something'
```

<br><a name="set"></a>

### set(key, [value]) ⇒ <code>\*</code>
> Sets a value in the WeakMap

**Returns**: <code>\*</code> - The value provided  

| Param | Type | Default |
| --- | --- | --- |
| key | <code>\*</code> |  | 
| [value] | <code>\*</code> | <code>{}</code> | 


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
