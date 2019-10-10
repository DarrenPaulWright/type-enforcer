import { assert } from 'chai';
import { method, methodFunction } from '../../../src';
import { functionData as data } from '../../testValues';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.function', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodFunction, method.function);
		});

		testMethodType({
			coerce: false,
			extraProps: {
				bind: false
			},
			...data
		});

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
});

