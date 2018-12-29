# type-enforcer
[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]

Type enforcement library for javascript

<a name="Installation"></a>

## Installation
With npm```npm install type-enforcer```## CompatibilityRequires:- Babel >= 7.2- [@babel/plugin-proposal-class-properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties)- [@babel/plugin-proposal-private-methods](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-private-methods)## ContributingIf you would like to help out, type-enforcer still needs full test coverage and more data types. If you add a new type be sure to add an enforce function and a method. When done, add any new types to package.json scripts, docs-newType, and add that to the docs script, then run```npm run docs```to generate new docs. If a new file is generated, add a link to it in the description in index.js## Docs### Data Types- [CssSize](https://github.com/darrenpaulwright/type-enforcer/blob/master/docs/CssSize.md)- [DockPoint](https://github.com/darrenpaulwright/type-enforcer/blob/master/docs/DockPoint.md)- [Enum](https://github.com/darrenpaulwright/type-enforcer/blob/master/docs/Enum.md)- [Point](https://github.com/darrenpaulwright/type-enforcer/blob/master/docs/Point.md)- [Thickness](https://github.com/darrenpaulwright/type-enforcer/blob/master/docs/Thickness.md)- [Vector](https://github.com/darrenpaulwright/type-enforcer/blob/master/docs/Vector.md)### CallbackQueue- [CallbackQueue](https://github.com/darrenpaulwright/type-enforcer/blob/master/docs/CallbackQueue.md)### Enforcement- [enforce](https://github.com/darrenpaulwright/type-enforcer/blob/master/docs/enforce.md)### Methods- [method](https://github.com/darrenpaulwright/type-enforcer/blob/master/docs/method.md)

**Kind**: global variable  

## License

[MIT](./LICENSE.md)

[npm]: https://img.shields.io/npm/v/type-enforcer.svg
[npm-url]: https://npmjs.com/package/type-enforcer
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer
[size]: https://packagephobia.now.sh/badge?p=type-enforcer
[size-url]: https://packagephobia.now.sh/result?p=type-enforcer
