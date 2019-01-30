import { assert } from 'chai';
import { method, methodKeyValue } from '../../../src';

describe('method', () => {
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
});

