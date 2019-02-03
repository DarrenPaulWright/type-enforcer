import { assert } from 'chai';
import { method, methodPoint, Point } from '../../../src';
import { pointData as data } from '../../testValues';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.point (stringify)', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodPoint, method.point);
		});

		testMethodType({
			name: 'point',
			init: '0,0',
			true: ['1,2', '3,4'],
			false: [],
			coerceTrue: [],
			extraProps: {
				stringify: true
			}
		});
	});

	describe('.point', () => {
		testMethodType(Object.assign({}, data, {
			init: new Point(),
			coerce: [{
				value: '5,6',
				coerced: new Point([5, 6])
			}]
		}));

		it('should NOT save a coercible value if coerce is false', () => {
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
