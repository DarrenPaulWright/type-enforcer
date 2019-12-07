# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

## [1.0.2] - 2019-12-06
### Security
- Updated dependencies

## [1.0.0] - 2019-12-04
### Added
- isSymbol, enforceSymbol, methodSymbol
- isMap, enforceMap, methodMap
- isWeakMap, enforceWeakMap, methodWeakMap
- isSet, enforceSet, methodSet
- isWeakSet, enforceWeakSet, methodWeakSet

### Changed
- enforceInstance is now enforceInstanceOf and methodInstance is methodInstanceOf
- Various performance improvements

### Removed
- privateProp
- Moved CssSize, DockPoint, Thickness, and Element classes and functions to new type-enforcer-ui
- Moved Point and Vector classes and functions to new type-enforcer-math
- Queue no longer stores extra data with a callback

## [0.6.4] - 2019-10-22
### Security
- Updated dependencies

## [0.6.3] - 2019-10-21
### Security
- Updated dependencies

## [0.6.2] - 2019-10-09
### Changed
- Don't use .apply in Queue.trigger if no context is provided

## [0.6.1] - 2019-10-09
### Fixed
- methodFunction won't throw if attempting to set to something other than a function

## [0.6.0] - 2019-10-08
### Changed
- preferring .bind over .call and .apply. Methods should be much faster now.
- Added bindTo method to Queue for setting a context to bind all callbacks to
- methodFunction and methodQueue now bind callbacks to "this"
  - option "bind" can turn this off, defaults to true

## [0.5.8] - 2019-10-01
### Changed
- methods now store values in a WeakMap

## [0.5.7] - 2019-08-28
### Security
- Updated dependencies

## [0.5.6] - 2019-08-15
### Fixed
- enforceArray and enforceObject now coerce values properly

## [0.5.5] - 2019-07-29
### Security
- Updated dependencies

## [0.5.4] - 2019-07-27
### Added
- [applySettings](docs/applySettings.md)

## [0.5.3] - 2019-07-19
### Fixed
- methodQueue shouldn't throw an error if called after .remove() is called

## [0.5.2] - 2019-07-16
- Fixing build config

## [0.5.1] - 2019-07-13
### Added
- [privateProp](docs/privateProp.md)

###Changed
- methods use privateProp to store values

## [0.5.0] - 2019-07-04
### Added
- [abstractEquality, strictEquality, sameValue, sameValueZero](docs/equality.md)

## [0.4.4] - 2019-06-06
### Security
- Updated dependencies

## [0.4.3] - 2019-03-27
### Added
- [DockPoint](docs/DockPoint.md) added read-only property 'opposite'

## [0.4.2] - 2019-03-27
### Changed
- [castArray](docs/castArray.md) returns an empty array when given undefined, and converts array-like objects into arrays.
- isNumber returns false for NaN

## [0.4.1] - 2019-03-11
### Changed
- Fixed bug in methods where the init value could get modified.

## [0.4.0] - 2019-03-11
### Added
- Float type (check, enforcer, and method)

### Changed
- Integer coercion is now more strict
- Switching dependencies back to object-agent

## [0.3.3] - 2019-02-15
### Changed
- Switching dependencies to deep-equal instead of object-agent

## [0.3.2] - 2019-02-14
### Changed
- Replaced dependencies on clone and deepEqual with object-agent
- Added id and callback args to the methodQueue set option

## [0.3.1] - 2019-02-10
### Added
- [castArray](docs/castArray.md)

## [0.3.0] - 2019-02-03
### Changed
- Removed Dependency on Lodash

## [0.2.4] - 2019-01-31
### Added
- [Removable](docs/Removable.md)

## [0.2.3] - 2019-01-30
### Changed
- Exporting the check functions as an object
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

[1.0.2]: https://github.com/DarrenPaulWright/type-enforcer/compare/v1.0.1...v1.0.2
[1.0.0]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.6.4...v1.0.0
[0.6.4]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.6.3...v0.6.4
[0.6.3]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.6.2...v0.6.3
[0.6.2]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.6.1...v0.6.2
[0.6.1]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.5.8...v0.6.0
[0.5.8]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.5.7...v0.5.8
[0.5.7]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.5.6...v0.5.7
[0.5.6]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.5.5...v0.5.6
[0.5.5]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.5.4...v0.5.5
[0.5.4]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.5.3...v0.5.4
[0.5.3]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.5.2...v0.5.3
[0.5.2]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.5.1...v0.5.2
[0.5.1]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.4.4...v0.5.0
[0.4.4]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.4.3...v0.4.4
[0.4.3]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.4.2...v0.4.3
[0.4.2]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.3.3...v0.4.0
[0.3.3]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.3.2...v0.3.3
[0.3.2]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.3.1...v0.3.2
[0.3.1]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.2.4...v0.3.0
[0.2.4]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.2.3...v0.2.4
[0.2.3]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.2.2...v0.2.3
[0.2.2]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.1.6...v0.2.0
[0.1.6]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.1.5...v0.1.6
[0.1.5]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.1.4...v0.1.5
[0.1.4]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/DarrenPaulWright/type-enforcer/compare/v0.1.0...v0.1.1
