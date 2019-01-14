import { assert } from 'chai';
import { method, Point } from '../../../src';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.point (stringify)', () => {
		testMethodType({
			methodType: 'point',
			init: '0,0',
			testItem: '1,2',
			testItem2: '3,4',
			extraProps: {
				stringify: true
			}
		});
	});

	describe('.point', () => {
		testMethodType({
			methodType: 'point',
			init: new Point(),
			testItem: new Point([1, 2]),
			testItem2: new Point([3, 4]),
			coerce: [{
				value: '5,6',
				coerced: new Point([5, 6])
			}]
		});

		it('should NOT save a coercable value if coerce is false', () => {
			const TestConstructor = function() {
				this.testMethod = method.point({
					init: undefined,
					coerce: false
				});
			};
			const testConstructor = new TestConstructor();

			testConstructor.testMethod('1,2');

			assert.equal(testConstructor.testMethod(), undefined);
		});
	});
});
