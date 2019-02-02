import { assert } from 'chai';
import { assign } from 'lodash';
import { method, methodThickness, Thickness } from '../../../src';
import { thicknessData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.thickness (stringify)', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodThickness, method.thickness);
		});

		testMethodType({
			name: 'thickness',
			true: ['12px', '20px'],
			false: [],
			coerceTrue: [],
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

		it('should NOT save a coercible value if coerce is false', () => {
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

