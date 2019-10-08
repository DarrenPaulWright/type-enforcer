import { assert } from 'chai';
import { CssSize, method, methodCssSize } from '../../../src';
import { cssSizeData as data } from '../../testValues';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.cssSize (stringify)', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodCssSize, method.cssSize);
		});

		testMethodType({
			name: 'cssSize',
			true: ['14px', '20px'],
			false: [],
			coerceTrue: [],
			extraProps: {
				stringify: true
			}
		});
	});

	describe('.cssSize', () => {
		testMethodType({
			...data,
			coerce: [{
				value: '16px',
				coerced: new CssSize('16px')
			}]
		});

		it('should NOT save a coercible value if coerce is false', () => {
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

