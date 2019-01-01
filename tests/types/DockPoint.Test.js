import { assert } from 'chai';
import { DockPoint } from '../../src/index';
import TestUtil from '../TestUtil';

const testUtil = new TestUtil(DockPoint);

describe('DockPoint', () => {
	describe('.primary', () => {
		testUtil.testMethod({
			methodName: 'primary',
			defaultValue: DockPoint.POINTS.TOP,
			testValue: DockPoint.POINTS.LEFT,
			secondTestValue: DockPoint.POINTS.RIGHT
		});
	});

	describe('.secondary', () => {
		testUtil.testMethod({
			methodName: 'secondary',
			defaultValue: DockPoint.POINTS.CENTER,
			testValue: DockPoint.POINTS.LEFT,
			secondTestValue: DockPoint.POINTS.RIGHT
		});
	});

	describe('.has', () => {
		const dockPoint = new DockPoint();

		it('should return true for RIGHT if value is TOP_RIGHT', () => {
			dockPoint.value(DockPoint.POINTS.TOP_RIGHT);
			assert.isTrue(dockPoint.has(DockPoint.POINTS.RIGHT));
		});

		it('should return true for TOP if value is TOP_RIGHT', () => {
			dockPoint.value(DockPoint.POINTS.TOP_RIGHT);
			assert.isTrue(dockPoint.has(DockPoint.POINTS.TOP));
		});

		it('should return true for LEFT if value is TOP_LEFT', () => {
			dockPoint.value(DockPoint.POINTS.TOP_LEFT);
			assert.isTrue(dockPoint.has(DockPoint.POINTS.LEFT));
		});

		it('should return true for TOP if value is TOP_LEFT', () => {
			dockPoint.value(DockPoint.POINTS.TOP_LEFT);
			assert.isTrue(dockPoint.has(DockPoint.POINTS.TOP));
		});
	});

	describe('.swapHorizontal', () => {
		const dockPoint = new DockPoint();

		it('should change a primary if the primary is LEFT', () => {
			dockPoint.value(DockPoint.POINTS.LEFT_TOP)
				.swapHorizontal();
			assert.equal(dockPoint.primary(), DockPoint.POINTS.RIGHT);
		});
		it('should change a primary if the primary is RIGHT', () => {
			dockPoint.value(DockPoint.POINTS.RIGHT_TOP)
				.swapHorizontal();
			assert.equal(dockPoint.primary(), DockPoint.POINTS.LEFT);
		});
		it('should change a secondary if the secondary is LEFT', () => {
			dockPoint.value(DockPoint.POINTS.TOP_LEFT)
				.swapHorizontal();
			assert.equal(dockPoint.secondary(), DockPoint.POINTS.RIGHT);
		});
		it('should change a secondary if the secondary is RIGHT', () => {
			dockPoint.value(DockPoint.POINTS.TOP_RIGHT)
				.swapHorizontal();
			assert.equal(dockPoint.secondary(), DockPoint.POINTS.LEFT);
		});
	});

	describe('.swapVertical', () => {
		const dockPoint = new DockPoint();

		it('should change a primary if the primary is TOP', () => {
			dockPoint.value(DockPoint.POINTS.TOP_LEFT)
				.swapVertical();
			assert.equal(dockPoint.primary(), DockPoint.POINTS.BOTTOM);
		});
		it('should change a primary if the primary is BOTTOM', () => {
			dockPoint.value(DockPoint.POINTS.BOTTOM_LEFT)
				.swapVertical();
			assert.equal(dockPoint.primary(), DockPoint.POINTS.TOP);
		});
		it('should change a secondary if the secondary is TOP', () => {
			dockPoint.value(DockPoint.POINTS.LEFT_TOP)
				.swapVertical();
			assert.equal(dockPoint.secondary(), DockPoint.POINTS.BOTTOM);
		});
		it('should change a secondary if the secondary is BOTTOM', () => {
			dockPoint.value(DockPoint.POINTS.LEFT_BOTTOM)
				.swapVertical();
			assert.equal(dockPoint.secondary(), DockPoint.POINTS.TOP);
		});
	});
});
