import { assert } from 'chai';
import { method } from '../../../src';
import { validCssSizes } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.cssSize (stringify)', () => {
		testMethodType({
			methodType: 'cssSize',
			testItem: '14px',
			testItem2: '20px',
			extraProps: {
				stringify: true
			}
		});
	});

	describe('.cssSize', () => {
		testMethodType({
			methodType: 'cssSize',
			testItem: validCssSizes[0],
			testItem2: validCssSizes[1]
		});

		it('should NOT save a coercable value if coerce is false', () => {
			const TestConstructor = function() {
				this.testMethod = method.cssSize({
					coerce: false
				});
			};
			const testConstructor = new TestConstructor();

			testConstructor.testMethod('12px');

			assert.equal(testConstructor.testMethod(), undefined);
		});
	});
});

