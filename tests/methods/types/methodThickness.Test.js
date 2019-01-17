import { assert } from 'chai';
import { assign } from 'lodash';
import { method, Thickness } from '../../../src';
import { thicknessData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.thickness (stringify)', () => {
		testMethodType({
			name: 'thickness',
			true: ['12px', '20px'],
			extraProps: {
				stringify: true
			},
			coerce: [{
				value: '12px 4rem',
				coerced: '12px 64px'
			}, {
				value: 13,
				coerced: '13px'
			}]
		});
	});

	describe('.thickness', () => {
		testMethodType(assign({}, data, {
			coerce: [{
				value: '12px 4rem',
				coerced: new Thickness('12px 64px')
			}, {
				value: 13,
				coerced: new Thickness('13px')
			}]
		}));

		it('should NOT save a coercable value if coerce is false', () => {
			const TestConstructor = function() {
				this.testMethod = method.thickness({
					coerce: false
				});
			};
			const testConstructor = new TestConstructor();

			testConstructor.testMethod('12px 3em');

			assert.equal(testConstructor.testMethod(), undefined);
		});
	});
});

