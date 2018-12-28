import { assert } from 'chai';
import { assign } from 'lodash';
import moment from 'moment';
import { method, Enum, CallbackQueue } from '../src/index';

const testNormal = (settings) => {
	let testFunctionCall = '';
	const stringify = settings.extraProps && settings.extraProps.stringify;
	const testSetCallback = function(newValue) {
		testFunctionCall = (stringify && newValue && newValue.toString) ? newValue.toString() : newValue;
	};

	const runTests = (TestConstructor, init, testItem, coerce) => {
		it('should build a method', () => {
			const testConstructor = new TestConstructor();

			assert.deepEqual(testConstructor.testMethod(), init);
		});

		it('should return "this" after a value is set', () => {
			const testConstructor = new TestConstructor();

			const that = testConstructor.testMethod(testItem);

			assert.equal(that, testConstructor);
		});

		it('should be able to set a new value', () => {
			const testConstructor = new TestConstructor();
			testFunctionCall = '';

			testConstructor.testMethod(testItem);

			assert.deepEqual(testFunctionCall, testItem);
			assert.deepEqual(testConstructor.testMethod(), testItem);
		});

		it('should not execute a callback when the value is set to the current value', () => {
			const testConstructor = new TestConstructor();
			testFunctionCall = '';

			testConstructor.testMethod(testItem);
			testFunctionCall = '';
			testConstructor.testMethod(testItem);

			assert.deepEqual(testFunctionCall, '');
		});

		it('should execute a callback when the value is set to the current value and a second parameter of "true" is provided', () => {
			const testConstructor = new TestConstructor();
			testFunctionCall = '';

			testConstructor.testMethod(testItem);
			testFunctionCall = '';
			testConstructor.testMethod(testItem, true);

			assert.deepEqual(testFunctionCall, testItem);
		});

		it('should be able to be set to other with a "set" option', () => {
			const testConstructor = new TestConstructor();

			testConstructor.testMethod(undefined);

			assert.deepEqual(testConstructor.testMethod(), undefined);
		});

		it('should work without a "set" option', () => {
			const testConstructor = new TestConstructor();

			testConstructor.testMethodNoCallback(testItem);

			assert.deepEqual(testConstructor.testMethodNoCallback(), testItem);
		});

		it('should be able to be set to other without a "set" option', () => {
			const testConstructor = new TestConstructor();

			testConstructor.testMethodNoCallback(undefined);

			assert.deepEqual(testConstructor.testMethodNoCallback(), undefined);
		});

		if (coerce) {
			it('should coerce ' + coerce.testItem + ' to ' + coerce.testItemCoerced, () => {
				testFunctionCall = '';
				const testConstructor = new TestConstructor();

				testConstructor.testMethod(coerce.testItem);

				assert.equal(testFunctionCall, coerce.testItemCoerced);
				assert.equal(testConstructor.testMethod(), coerce.testItemCoerced);
			});

			it('should coerce ' + coerce.testItem2 + ' to ' + coerce.testItem2Coerced, () => {
				testFunctionCall = '';
				const testConstructor = new TestConstructor();

				testConstructor.testMethod(coerce.testItem2);

				assert.equal(testFunctionCall, coerce.testItem2Coerced);
				assert.equal(testConstructor.testMethod(), coerce.testItem2Coerced);
			});
		}
	};

	describe('(prototype, default init)', () => {
		class TestConstructor1 {
		}

		TestConstructor1.prototype.testMethod = method[settings.methodType](assign({}, settings.extraProps, {
			set: testSetCallback,
			other: undefined
		}));

		TestConstructor1.prototype.testMethodNoCallback = method[settings.methodType](assign({}, settings.extraProps, {
			other: undefined
		}));

		runTests(TestConstructor1, settings.init, settings.testItem, settings.coerce);
	});

	describe('(prototype, with init)', () => {
		class TestConstructor2 {
		}

		TestConstructor2.prototype.testMethod = method[settings.methodType](assign({}, settings.extraProps, {
			init: settings.testItem,
			set: testSetCallback,
			other: undefined
		}));

		TestConstructor2.prototype.testMethodNoCallback = method[settings.methodType](assign({}, settings.extraProps, {
			init: settings.testItem,
			other: undefined
		}));

		runTests(TestConstructor2, settings.testItem, settings.testItem2, settings.coerce);
	});

	describe('(property, default init)', () => {
		const TestConstructor3 = function() {
			this.testMethod = method[settings.methodType](assign({}, settings.extraProps, {
				set: testSetCallback,
				other: undefined
			}));
			this.testMethodNoCallback = method[settings.methodType](assign({}, settings.extraProps, {
				other: undefined
			}));
		};

		runTests(TestConstructor3, settings.init, settings.testItem, settings.coerce);
	});

	describe('(property, with init)', () => {
		const TestConstructor4 = function() {
			this.testMethod = method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				set: testSetCallback,
				other: undefined
			}));
			this.testMethodNoCallback = method[settings.methodType](assign({}, settings.extraProps, {
				init: settings.testItem,
				other: undefined
			}));
		};

		runTests(TestConstructor4, settings.testItem, settings.testItem2, settings.coerce);
	});
};

describe('method', () => {
	describe('.array', () => {
		testNormal({
			methodType: 'array',
			init: [],
			testItem: [{
				id: 1
			}],
			testItem2: [{
				id: 2
			}]
		});
	});

	describe('.bool', () => {
		testNormal({
			methodType: 'bool',
			init: false,
			testItem: true,
			testItem2: false
		});
	});

	describe('.callbackQueue', () => {
		let testFunctionCall = '';
		let didExecute = 0;
		const testFunc = () => {
			didExecute++;
		};

		const runTests = (TestConstructor) => {
			it('should build a method', () => {
				const testConstructor = new TestConstructor();

				assert.isTrue(testConstructor.testMethod() instanceof CallbackQueue);
			});

			it('should not call the callback when set', () => {
				const testConstructor = new TestConstructor();

				didExecute = 0;
				testConstructor.testMethod(testFunc);

				assert.equal(didExecute, 0);
			});

			it('should call the callback when triggered', () => {
				const testConstructor = new TestConstructor();

				didExecute = 0;
				testConstructor.testMethod(testFunc);
				testConstructor.testMethod().trigger();

				assert.equal(didExecute, 1);
			});

			it('should return an instance of CallbackQueue if no value is provided', () => {
				const testConstructor = new TestConstructor();

				testConstructor.testMethod(testFunc);

				assert.isTrue(testConstructor.testMethod() instanceof CallbackQueue);
			});
		};

		describe('(prototype)', () => {
			class TestConstructor {
				onRemove(func) {

				}

				isRemoved() {
					return false;
				}
			}

			TestConstructor.prototype.testMethod = method.callbackQueue({
				set: function(newValue) {
					testFunctionCall = newValue;
				}
			});

			runTests(TestConstructor);
		});

		describe('(property)', () => {
			const TestConstructor = function() {
				this.onRemove = (func) => {

				};

				this.isRemoved = () => {
					return false;
				};

				this.testMethod = method.callbackQueue({
					set: function(newValue) {
						testFunctionCall = newValue;
					}
				});
			};

			runTests(TestConstructor);
		});
	});

	describe('.cssSize', () => {
		testNormal({
			methodType: 'cssSize',
			testItem: '14px',
			testItem2: '20px',
			extraProps: {
				stringify: true
			}
		});
	});

	describe('.date', () => {
		testNormal({
			methodType: 'date',
			testItem: new Date(),
			testItem2: moment('2015-07-07')
		});
	});

	describe('.element', () => {
		testNormal({
			methodType: 'element',
			testItem: document.createElement('div'),
			testItem2: document.createElement('span')
		});
	});

	describe('.enum', () => {
		testNormal({
			methodType: 'enum',
			testItem: 'test2',
			testItem2: 'test3',
			extraProps: {
				enum: new Enum({
					test1: 'test1',
					test2: 'test2',
					test3: 'test3'
				})
			}
		});
	});

	describe('.func', () => {
		testNormal({
			methodType: 'func',
			testItem: () => {
				const test = 'test1';
			},
			testItem2: () => {
				const test2 = 'test2';
			}
		});
	});

	describe('.int', () => {
		testNormal({
			methodType: 'int',
			testItem: 1,
			testItem2: 5,
			extraProps: {
				min: 0,
				max: 10
			},
			coerce: {
				testItem: 13,
				testItemCoerced: 10,
				testItem2: -3,
				testItem2Coerced: 0
			}
		});
	});

	describe('.keyValue', () => {
		let testKey = '';
		let testValue = '';
		let count = 0;

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
				set: function(key, value) {
					testKey = key;
					testValue = value;
					count++;
				},
				get: () => {
					return 1;
				}
			});

			runTests(TestConstructor);
		});

		describe('(property)', () => {
			const TestConstructor = function() {
				this.testMethod = method.keyValue({
					set: function(key, value) {
						testKey = key;
						testValue = value;
						count++;
					},
					get: () => {
						return 1;
					}
				});
			};

			runTests(TestConstructor);
		});
	});

	describe('.number', () => {
		testNormal({
			methodType: 'number',
			testItem: 1.3,
			testItem2: 2.5,
			extraProps: {
				min: 1.2,
				max: 10.5
			},
			coerce: {
				testItem: 30.874,
				testItemCoerced: 10.5,
				testItem2: -3,
				testItem2Coerced: 1.2
			}
		});
	});

	describe('.object', () => {
		testNormal({
			methodType: 'object',
			testItem: {
				test: 'test1'
			},
			testItem2: {
				test: 'test2'
			}
		});
	});

	describe('.string', () => {
		testNormal({
			methodType: 'string',
			init: '',
			testItem: 'test1',
			testItem2: 'test2'
		});
	});

	describe('.thickness', () => {
		testNormal({
			methodType: 'thickness',
			testItem: '12px',
			testItem2: '20px',
			extraProps: {
				stringify: true
			},
			coerce: {
				testItem: '12px 4rem',
				testItemCoerced: '12px 64px',
				testItem2: 13,
				testItem2Coerced: '13px'
			}
		});
	});
});
