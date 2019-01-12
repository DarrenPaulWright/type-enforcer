import { DockPoint } from '../../../src';
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
			testItem: new DockPoint(DockPoint.POINTS.TOP_CENTER),
			testItem2: new DockPoint(DockPoint.POINTS.BOTTOM_LEFT),
			coerce: [{
				value: DockPoint.POINTS.TOP_RIGHT,
				coerced: new DockPoint(DockPoint.POINTS.TOP_RIGHT)
			}]
		});
	});
});

