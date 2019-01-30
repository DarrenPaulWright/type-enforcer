import { assert } from 'chai';
import { assign } from 'lodash';
import { CssSize, method } from '../../../src';
import { cssSizeData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.cssSize (stringify)', () => {
		testMethodType({
			name: 'cssSize',
			true: ['14px', '20px'],
			extraProps: {
				stringify: true
			}
		});
	});

	describe('.cssSize', () => {
		testMethodType(assign({}, data, {
			coerce: [{
				value: '16px',
				coerced: new CssSize('16px')
			}]
		}));

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

