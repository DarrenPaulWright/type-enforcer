import { assert } from 'chai';
import { DockPoint, method, methodDockPoint } from '../../../src';
import { dockPointData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.dockPoint (stringify)', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodDockPoint, method.dockPoint);
		});

		testMethodType({
			name: 'dockPoint',
			true: [DockPoint.POINTS.TOP_CENTER, DockPoint.POINTS.BOTTOM_LEFT],
			false: [],
			coerceTrue: [],
			extraProps: {
				stringify: true
			}
		});
	});

	describe('.dockPoint', () => {
		testMethodType(Object.assign({}, data, {
			coerce: [{
				value: DockPoint.POINTS.TOP_RIGHT,
				coerced: new DockPoint(DockPoint.POINTS.TOP_RIGHT)
			}]
		}));

		it('should NOT save a coercible value if coerce is false', () => {
			const TestConstructor = function() {
				this.testMethod = method.dockPoint({
					coerce: false
				});
			};
			const testConstructor = new TestConstructor();

			testConstructor.testMethod('top.left');

			assert.equal(testConstructor.testMethod(), undefined);
		});
	});
});

