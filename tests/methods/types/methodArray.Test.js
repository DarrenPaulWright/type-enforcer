import { assert } from 'chai';
import { assign } from 'lodash';
import { method, methodArray } from '../../../src';
import { arrayData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.array', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodArray, method.array);
		});

		testMethodType(assign({}, data, {
			init: []
		}));

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
					set: function(newValue) {
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
});
