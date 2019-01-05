import { assert } from 'chai';
import { DockPoint, enforce } from '../../../src';
import { runNegativeTests } from '../enforceTestUtility';

const dockPoint1 = new DockPoint(DockPoint.POINTS.TOP_LEFT);
const dockPoint2 = new DockPoint(DockPoint.POINTS.BOTTOM_RIGHT);

describe('enforce', () => {
	describe('.dockPoint', () => {
		it('should return the setter value when a valid DockPoint is provided', () => {
			assert.isTrue(enforce.dockPoint(dockPoint1, dockPoint2) instanceof DockPoint);
			assert.equal(enforce.dockPoint(dockPoint1, dockPoint2).toString(), dockPoint1);
		});

		runNegativeTests('dockPoint', dockPoint2);
	});
});
