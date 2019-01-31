import { assert } from 'chai';
import { assign } from 'lodash';
import { method, methodObject } from '../../../src';
import { objectData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.object', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodObject, method.object);
		});

		testMethodType(assign({}, data));

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
					set: function(newValue) {
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
});

