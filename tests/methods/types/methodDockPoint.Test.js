import { assert } from 'chai';
import { assign, find } from 'lodash';
import { DockPoint, method } from '../../../src';
import { testTypes } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

const data = find(testTypes, {
	name: 'dockPoint'
});

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

