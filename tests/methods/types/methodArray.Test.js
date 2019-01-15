import { assert } from 'chai';
import { assign, find } from 'lodash';
import { method } from '../../../src';
import { testTypes } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

const data = find(testTypes, {
	name: 'array'
});

describe('method', () => {
	describe('.array', () => {
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
