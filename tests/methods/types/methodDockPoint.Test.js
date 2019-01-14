import { assert } from 'chai';
import { DockPoint, method } from '../../../src';
import { validDockPoints } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.dockPoint (stringify)', () => {
		testMethodType({
			methodType: 'dockPoint',
			testItem: DockPoint.POINTS.TOP_CENTER,
			testItem2: DockPoint.POINTS.BOTTOM_LEFT,
			extraProps: {
				stringify: true
			}
		});
	});

	describe('.dockPoint', () => {
		testMethodType({
			methodType: 'dockPoint',
			testItem: validDockPoints[0],
			testItem2: validDockPoints[1],
			coerce: [{
				value: DockPoint.POINTS.TOP_RIGHT,
				coerced: new DockPoint(DockPoint.POINTS.TOP_RIGHT)
			}]
		});

		it('should NOT save a coercable value if coerce is false', () => {
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

