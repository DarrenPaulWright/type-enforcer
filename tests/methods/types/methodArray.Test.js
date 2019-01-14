import { assert } from 'chai';
import { method } from '../../../src';
import { validArrays } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.array', () => {
		testMethodType({
			methodType: 'array',
			init: [],
			testItem: validArrays[0],
			testItem2: validArrays[1]
		});

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
