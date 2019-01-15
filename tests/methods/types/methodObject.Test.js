import { assert } from 'chai';
import { assign, find } from 'lodash';
import { method } from '../../../src';
import { testTypes } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

const data = find(testTypes, {
	name: 'object'
});

describe('method', () => {
	describe('.object', () => {
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

