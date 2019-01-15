import { assert } from 'chai';
import { assign, find } from 'lodash';
import { CssSize, method } from '../../../src';
import { testTypes } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

const data = find(testTypes, {
	name: 'cssSize'
});

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

