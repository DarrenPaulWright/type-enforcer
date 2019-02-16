# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

## [0.3.3] - 2019-2-15
### Changed
- Switching dependencies to deep-equal instead of object-agent

## [0.3.2] - 2019-2-14
### Changed
- Replaced dependencies on clone and deepEqual with object-agent
- Added ID and callback args to the methodQueue set option

## [0.3.1] - 2019-2-10
### Added
- [castArray](docs/castArray.md)

## [0.3.0] - 2019-2-3
### Changed
- Removed Dependency on Lodash

## [0.2.4] - 2019-01-31
### Added
- [Removable](docs/Removable.md)

## [0.2.3] - 2019-01-30
### Changed
- Exporting the check functions as a object
- Exporting individual enforcers and methods

## [0.2.2] - 2019-01-24
### Changed
- Removed dependencies on babel plugin proposals.
- Improved docs.

## [0.2.1] - 2019-01-24
### Changed
- Changed isBool to isBoolean, enforce.bool to enforce.boolean, and method.bool to method.boolean
- Changed isFunc to isFunction, enforce.func to enforce.function, and method.func to method.function
- Changed isInt to isInteger, enforce.int to enforce.integer, and method.int to method.integer

## [0.2.0] - 2019-01-18
### Added
- 99.9% test-coverage
  - testing in chrome and firefox
- This CHANGELOG
- [checks](docs/checks.md)
  - moved all type checks into new functions (isArray, isBool, etc.)
  - most checks can also check if a value can be coerced
  - isInstanceOf fixes issues with primitives and instanceof
  - isJson function to check if a value can be parsed as JSON
- [enforce](docs/enforce.md)
  - most enforce functions can now coerce values
  - added enforce.regExp
- [method](docs/method.md)
  - added method.regExp
  - added "deep" option to method.object and method.array
  - added "coerce" option to methods of types that can be coerced

###Changed
- Date functions only accept native Dates now. Removes dependency on Moment.js. 
- [DockPoint](docs/DockPoint.md)
  - default value is now DockPoint.POINTS.NONE
  - added methods "isSame" and "toString"
  - bug fix: setting primary or secondary now updates the value
- [Enum](docs/Enum.md)
  - added method "key"
- [Queue](docs/Queue.md)
  - method "getTotalCallbacks" is now read only property "length"
  - method "isBusy" is now read only property "isBusy"
- [enforce](docs/enforce.md)
  - Custom type functions no longer coerce values by default
  
###Removed
- Removed static method "isInstance" from custom data types in favor of new checks function.
- [Queue](docs/Queue.md)
  - removed method "getCallbacks"

## [0.1.6] - 2019-01-02
### Added
- Snyk.io badge for security checks 
- enforce.instance
- Enum.each

### Changed
- Changed CallbackQueue to Queue.

## [0.1.5] - 2018-12-30
### Changed
- .babelrc became babel.config.js so the babel plugins are handled properly when using this library as an npm package

## [0.1.4] - 2018-12-30
### Changed
- Moved necessary Babel plugins to dependencies in package.json

## [0.1.3] - 2018-12-29
### Changed
- Documentation

## [0.1.2] - 2018-12-29
### Changed
- Documentation

## [0.1.1] - 2018-12-29
### Changed
- Documentation

## 0.1.0 - 2018-12-29
### Added
- Initial enforcers, methods, and documentation

[0.3.2]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.3.2...c0.3.3
[0.3.2]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.3.1...c0.3.2
[0.3.1]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.3.0...c0.3.1
[0.3.0]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.2.4...c0.3.0
[0.2.4]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.2.3...c0.2.4
[0.2.3]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.2.2...c0.2.3
[0.2.2]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.2.1...c0.2.2
[0.2.1]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.1.6...v0.2.0
[0.1.6]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.1.5...v0.1.6
[0.1.5]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.1.4...v0.1.5
[0.1.4]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.1.0...v0.1.1
