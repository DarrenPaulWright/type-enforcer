import { assert } from 'chai';
import { assign } from 'lodash';
import { DockPoint, method } from '../../../src';
import { dockPointData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.dockPoint (stringify)', () => {
		testMethodType({
			name: 'dockPoint',
			true: [DockPoint.POINTS.TOP_CENTER, DockPoint.POINTS.BOTTOM_LEFT],
			extraProps: {
				stringify: true
			}
		});
	});

	describe('.dockPoint', () => {
		testMethodType(assign({}, data, {
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

