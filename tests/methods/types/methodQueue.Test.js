import { assert } from 'chai';
import { method, methodQueue, Queue, Removable } from '../../../src';

describe('method', () => {
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

			TestConstructor.prototype.testMethod = method.queue({
				set() {
				}
			});

			runTests(TestConstructor);
		});

		describe('(property, without onRemove)', () => {
			const TestConstructor = function() {
				this.testMethod = method.queue({
					set() {
					}
				});
			};

			runTests(TestConstructor);
		});
	});
});

