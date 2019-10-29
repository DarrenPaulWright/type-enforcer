import { assert } from 'chai';
import {
	method,
	methodAny,
	methodArray,
	methodBoolean,
	methodDate,
	methodEnum,
	methodFloat,
	methodFunction,
	methodInstanceOf,
	methodInteger,
	methodKeyValue,
	methodMap,
	methodNumber,
	methodObject,
	methodQueue,
	methodRegExp,
	methodString,
	methodSymbol,
	methodWeakMap,
	Queue,
	Removable
} from '../src';
import { testMethodType } from './methodTestUtility';
import {
	arrayData,
	booleanData,
	dateData,
	enumData,
	floatData,
	functionData,
	instanceData,
	integerData,
	mapData,
	numberData,
	objectData,
	regExpData,
	stringData,
	symbolData,
	TestClass,
	validEnumObject,
	weakMapData
} from './testValues';

describe('method', () => {
	describe('.any', () => {
		testMethodType({
			name: 'any',
			true: ['string', 123],
			false: [],
			coerceTrue: []
		}, methodAny);
	});

	describe('.array', () => {
		testMethodType({...arrayData, init: []}, methodArray);

		it('should NOT call the set callback if the same array is provided and deep=false', () => {
			let testSet = '';
			const testArray1 = [{
				test: 'test'
			}];
			const testArray2 = testArray1;
			testArray2[0].test = 'test 2';
			const TestConstructor = function() {
				this.testMethod = method.array({
					init: testArray1,
					set(newValue) {
						testSet = newValue;
					},
					deep: false
				});
			};
			const testConstructor = new TestConstructor();

			testConstructor.testMethod(testArray2);

			assert.deepEqual(testSet, '');
		});
	});

	describe('.boolean', () => {
		testMethodType({...booleanData, init: false}, methodBoolean);
	});

	describe('.date', () => {
		testMethodType({...dateData}, methodDate);
	});

	describe('.enum', () => {
		testMethodType({
			...enumData,
			coerce: false,
			extraProps: {
				enum: validEnumObject
			}
		}, methodEnum);
	});

	describe('.float', () => {
		testMethodType({
			...floatData,
			extraProps: {
				min: 1.2,
				max: 10.5
			},
			coerce: [{
				value: 30.874,
				coerced: 10.5
			}, {
				value: -3,
				coerced: 1.2
			}]
		}, methodFloat);
	});

	describe('.function', () => {
		testMethodType({
			coerce: false,
			extraProps: {
				bind: false
			},
			...functionData
		}, methodFunction);

		it('should bind the function to "this" by default', () => {
			let testVar = '';
			const TestClass = function() {
				this.testMethod = methodFunction();
			};
			const testClass = new TestClass();

			const testFunction = function() {
				testVar = this;
			};

			testClass.testMethod(testFunction);
			testClass.testMethod()();

			assert.equal(testVar, testClass);
		});

		it('should NOT bind the function to "this" if the option "bind" is set to false', () => {
			let testVar = '';
			const TestClass = function() {
				this.testMethod = methodFunction({
					bind: false
				});
			};
			const testClass = new TestClass();

			testClass.testMethod(function() {
				testVar = this;
			});
			testClass.testMethod()();

			assert.notEqual(testVar, testClass);
		});

		it('should NOT throw if set to something other than a function', () => {
			const TestClass = function() {
				this.testMethod = methodFunction();
			};
			const testClass = new TestClass();

			assert.doesNotThrow(() => {
				testClass.testMethod('test');
			});
		});
	});

	describe('.instanceOf', () => {
		testMethodType({
			...instanceData,
			coerce: false,
			extraProps: {
				instanceOf: TestClass
			}
		}, methodInstanceOf);
	});

	describe('.integer', () => {
		testMethodType({
			...integerData,
			extraProps: {
				min: 0,
				max: 10
			},
			coerce: [{
				value: 13,
				coerced: 10
			}, {
				value: -3,
				coerced: 0
			}]
		}, methodInteger);
	});

	describe('.keyValue', () => {
		let testKey = '';
		let testValue = '';
		let count = 0;

		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodKeyValue, method.keyValue);
		});

		const runTests = (TestConstructor) => {
			it('should return whatever the get callback returns', () => {
				const testConstructor = new TestConstructor();

				assert.equal(testConstructor.testMethod(), 1);
			});

			it('should pass two values to the "set" callback', () => {
				const testConstructor = new TestConstructor();
				count = 0;

				testConstructor.testMethod('test5', 'test7');

				assert.equal(testKey, 'test5');
				assert.equal(testValue, 'test7');
				assert.equal(count, 1);
			});

			it('should pass the key/value pairs from an object to the "set" callback', () => {
				const testConstructor = new TestConstructor();
				count = 0;

				testConstructor.testMethod({
					test1: 'test2',
					test3: 'test4'
				});

				assert.equal(testKey, 'test3');
				assert.equal(testValue, 'test4');
				assert.equal(count, 2);
			});

			it('should return "this" after a value is set', () => {
				const testConstructor = new TestConstructor();

				const that = testConstructor.testMethod('test5', 'test7');

				assert.equal(that, testConstructor);
			});
		};

		describe('(prototype)', () => {
			class TestConstructor {
			}

			TestConstructor.prototype.testMethod = method.keyValue({
				set(key, value) {
					testKey = key;
					testValue = value;
					count++;
				},
				get() {
					return 1;
				}
			});

			runTests(TestConstructor);
		});

		describe('(property)', () => {
			const TestConstructor = function() {
				this.testMethod = method.keyValue({
					set(key, value) {
						testKey = key;
						testValue = value;
						count++;
					},
					get() {
						return 1;
					}
				});
			};

			runTests(TestConstructor);
		});
	});

	describe('.map', () => {
		testMethodType({...mapData}, methodMap);
	});

	describe('.number', () => {
		testMethodType({
			...numberData,
			extraProps: {
				min: 1.2,
				max: 10.5
			},
			coerce: [{
				value: 30.874,
				coerced: 10.5
			}, {
				value: -3,
				coerced: 1.2
			}]
		}, methodNumber);
	});

	describe('.object', () => {
		testMethodType({...objectData}, methodObject);

		it('should NOT call the set callback if the same object is provided and deep=false', () => {
			let testSet = '';
			const testObject1 = {
				test: 'test'
			};
			const testObject2 = testObject1;
			testObject2.test = 'test 2';
			const TestConstructor = function() {
				this.testMethod = method.object({
					init: testObject1,
					set(newValue) {
						testSet = newValue;
					},
					deep: false
				});
			};
			const testConstructor = new TestConstructor();

			testConstructor.testMethod(testObject2);

			assert.deepEqual(testSet, '');
		});
	});

	describe('.queue', () => {
		let didExecute = 0;
		const testFunc = () => {
			didExecute++;
		};

		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodQueue, method.queue);
		});

		const runTests = (TestConstructor, isRemovable) => {
			it('should build a method', () => {
				const testConstructor = new TestConstructor();

				assert.isTrue(testConstructor.testMethod() instanceof Queue);
				if (testConstructor.onRemove) {
					testConstructor.onRemove();
				}
			});

			it('should not call the callback when set', () => {
				const testConstructor = new TestConstructor();

				didExecute = 0;
				testConstructor.testMethod(testFunc);

				assert.equal(didExecute, 0);
				if (testConstructor.onRemove) {
					testConstructor.onRemove();
				}
			});

			it('should call the callback when triggered', () => {
				const testConstructor = new TestConstructor();

				didExecute = 0;
				testConstructor.testMethod(testFunc);
				testConstructor.testMethod().trigger();

				assert.equal(didExecute, 1);
				if (testConstructor.onRemove) {
					testConstructor.onRemove();
				}
			});

			it('should set the context of the callback when triggered', () => {
				const testConstructor = new TestConstructor();

				didExecute = 0;
				testConstructor.testMethod(function() {
					if (this === testConstructor) {
						didExecute++;
					}
				});
				testConstructor.testMethod().trigger();

				assert.equal(didExecute, 1);
				if (testConstructor.onRemove) {
					testConstructor.onRemove();
				}
			});

			it('should return an instance of Queue if no value is provided', () => {
				const testConstructor = new TestConstructor();

				testConstructor.testMethod(testFunc);

				assert.isTrue(testConstructor.testMethod() instanceof Queue);
				if (testConstructor.onRemove) {
					testConstructor.onRemove();
				}
			});

			if (isRemovable) {
				it('should NOT call the callback when triggered after onRemove is called', () => {
					const testConstructor = new TestConstructor();

					didExecute = 0;
					testConstructor.testMethod(testFunc);
					testConstructor.onRemove()();
					testConstructor.testMethod().trigger();

					assert.equal(didExecute, 0);
					if (testConstructor.onRemove) {
						testConstructor.onRemove();
					}
				});

				it('should not throw an error if attempting to set after remove is called', () => {
					const testConstructor = new TestConstructor();

					testConstructor.remove();
					const result = testConstructor.testMethod(testFunc);

					assert.equal(result, testConstructor);
				});

			}
		};

		describe('(prototype, with onRemove)', () => {
			class TestConstructor extends Removable {}

			TestConstructor.prototype.onRemove = method.function();
			TestConstructor.prototype.testMethod = method.queue({
				set() {
				}
			});

			runTests(TestConstructor, true);
		});

		describe('(property, with onRemove)', () => {
			const TestConstructor = function() {
				const self = this;

				self.onRemove = method.function();

				self.isRemoved = false;

				self.testMethod = method.queue({
					set() {
					}
				});

				self.remove = () => {
					self.isRemoved = true;
				};
			};

			runTests(TestConstructor, true);
		});

		describe('(prototype, without onRemove)', () => {
			class TestConstructor {
			}

			TestConstructor.prototype.testMethod = method.queue();

			runTests(TestConstructor);
		});

		describe('(property, without onRemove)', () => {
			const TestConstructor = function() {
				this.testMethod = method.queue();
			};

			runTests(TestConstructor);
		});

		it('should set the context of the callback when triggered', () => {
			class TestConstructor extends Removable {}

			TestConstructor.prototype.onRemove = method.function();
			TestConstructor.prototype.testMethod = method.queue({
				bind: false
			});

			const testConstructor = new TestConstructor();

			didExecute = 0;
			testConstructor.testMethod(function() {
				if (this !== testConstructor) {
					didExecute++;
				}
			});
			testConstructor.testMethod().trigger();

			assert.equal(didExecute, 1);
			if (testConstructor.onRemove) {
				testConstructor.onRemove();
			}
		});

	});

	describe('.regExp', () => {
		testMethodType({...regExpData}, methodRegExp);
	});

	describe('.string', () => {
		testMethodType({...stringData, init: ''}, methodString);
	});

	describe('.symbol', () => {
		testMethodType({...symbolData}, methodSymbol);
	});

	describe('.weakMap', () => {
		testMethodType({...weakMapData}, methodWeakMap);
	});
});

