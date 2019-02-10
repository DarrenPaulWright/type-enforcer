# type-enforcer
[![npm][npm]][npm-url]
[![build][build]][build-url]
[![Coverage Status](https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer/badge.svg?branch=master)](https://coveralls.io/github/DarrenPaulWright/type-enforcer?branch=master)
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![Known Vulnerabilities](https://snyk.io/test/github/DarrenPaulWright/type-enforcer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/DarrenPaulWright/type-enforcer?targetFile=package.json)

A type enforcement library for javascript

<a name="Installation"></a>

## Installation
With npm```npm install type-enforcer```## CompatibilityRequires:- Babel >= 7.2## Docs### Data Types- [CssSize](docs/CssSize.md)- [DockPoint](docs/DockPoint.md)- [Enum](docs/Enum.md)- [Point](docs/Point.md)- [Queue](docs/Queue.md)- [Thickness](docs/Thickness.md)- [Vector](docs/Vector.md)### Checks- [checks](docs/checks.md)### Enforcement- [enforce](docs/enforce.md)### Methods- [method](docs/method.md)### Mixins- [Removable](docs/Removable.md)### Other- [castArray](docs/castArray.md)## ContributingIf you add a new type be sure to add an enforce function and a method. When done, add any new types to package.json scripts (docs-newType), and add that to the docs script, then run```npm run docs```to generate new docs. If a new file is generated, add a link to it in the description in index.js and run the docs command again


## License

[MIT](LICENSE.md)

[npm]: https://img.shields.io/npm/v/type-enforcer.svg
[npm-url]: https://npmjs.com/package/type-enforcer
[build]: https://travis-ci.org/DarrenPaulWright/type-enforcer.svg?branch=master
[build-url]: https://travis-ci.org/DarrenPaulWright/type-enforcer
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer
[size]: https://packagephobia.now.sh/badge?p=type-enforcer
[size-url]: https://packagephobia.now.sh/result?p=type-enforcer
