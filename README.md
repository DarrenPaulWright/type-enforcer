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


<br><a name="Installation"></a>

### Installation
```
npm install type-enforcer
```
_Requires Babel 7.2+_

<br><a name="Docs"></a>

### Docs
#### Type Checks
- [checks](docs/checks.md)

#### Type Enforcement
- [enforce](docs/enforce.md)
- [castArray](docs/castArray.md)

#### Type Enforcing Methods
- [method](docs/method.md)

#### Other
- [Enum](docs/Enum.md)
- [Queue](docs/Queue.md)
- [applySettings](docs/applySettings.md)
- [PrivateVars](docs/PrivateVars.md)
- [Removable](docs/Removable.md)
- [equality checks](docs/equality.md)

<br>

### Type Enforcer Addon Libraries:
- [type-enforcer-math](https://github.com/DarrenPaulWright/type-enforcer-math) (Point and Vector moved here at v1.0.0)
- [type-enforcer-ui](https://github.com/DarrenPaulWright/type-enforcer-ui) (CssSize, DockPoint, Thickness, and Element moved here at v1.0.0)

<br>

### Extending & Modifying Type Enforcer

#### Enforcers
All enforcers with a "coerce" option also have a static method ".extend" that creates a new enforcer. It accepts two args:
- The first arg should be a valid check function that accepts a second "coerce" arg.
- The second arg should be a function that coerces a coercible value (as determined by the check function).

<br>

#### Methods
methodAny and all methods that extend it have a static method ".extend" that creates a new method. It accepts two args:
- The first arg should be an object with default options. These options override any options in the method being extended.
- The second arg (optional) should be a function that gets called when a method is initialized. This function is passed one arg, the options for this method.

These methods also have a static method ".defaults" that mutates the default options for that method. For instance, if you would prefer that methodBoolean didn't have a default value of false, then you could use the following:
``` javascript
methodBoolean.defaults({init: undefined});
```

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
