import { assert } from 'chai';
import { assign } from 'lodash';
import { method, Point } from '../../../src';
import { pointData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.point (stringify)', () => {
		testMethodType({
			name: 'point',
			init: '0,0',
			true: ['1,2', '3,4'],
			extraProps: {
				stringify: true
			}
		});
	});

	describe('.point', () => {
		testMethodType(assign({}, data, {
			init: new Point(),
			coerce: [{
				value: '5,6',
				coerced: new Point([5, 6])
			}]
		}));

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
