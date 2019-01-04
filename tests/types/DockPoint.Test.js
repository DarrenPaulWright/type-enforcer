import { assert } from 'chai';
import { DockPoint } from '../../src/index';
import TestUtil from '../TestUtil';

const testUtil = new TestUtil(DockPoint);

describe('DockPoint', () => {
	describe('.primary', () => {
		testUtil.testMethod({
			methodName: 'primary',
			defaultValue: DockPoint.POINTS.NONE,
			testValue: DockPoint.POINTS.LEFT,
			secondTestValue: DockPoint.POINTS.RIGHT
		});

		it('should accept a primary value alone', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP);
			assert.equal(dockPoint.value(), DockPoint.POINTS.TOP);
		});

		it('should set the value when primary is set', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
			dockPoint.primary(DockPoint.POINTS.BOTTOM);
			assert.equal(dockPoint.value(), DockPoint.POINTS.BOTTOM_RIGHT);
		});
	});

	describe('.secondary', () => {
		testUtil.testMethod({
			methodName: 'secondary',
			defaultValue: DockPoint.POINTS.NONE,
			testValue: DockPoint.POINTS.LEFT,
			secondTestValue: DockPoint.POINTS.RIGHT
		});

		it('should be able to set the secondary to DockPoint.POINTS.NONE', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
			dockPoint.secondary(DockPoint.POINTS.NONE);
			assert.equal(dockPoint.value(), DockPoint.POINTS.TOP);
		});

		it('should set the value when secondary is set', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
			dockPoint.secondary(DockPoint.POINTS.LEFT);
			assert.equal(dockPoint.value(), DockPoint.POINTS.TOP_LEFT);
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

	describe('.oppositePrimary', () => {
		it('should return DockPoint.POINTS.BOTTOM if the value is TOP', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP);
			assert.equal(dockPoint.oppositePrimary, DockPoint.POINTS.BOTTOM);
		});
		it('should return DockPoint.POINTS.TOP if the value is BOTTOM', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.BOTTOM);
			assert.equal(dockPoint.oppositePrimary, DockPoint.POINTS.TOP);
		});
		it('should return DockPoint.POINTS.LEFT if the value is RIGHT', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.RIGHT);
			assert.equal(dockPoint.oppositePrimary, DockPoint.POINTS.LEFT);
		});
		it('should return DockPoint.POINTS.RIGHT if the value is LEFT', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.LEFT);
			assert.equal(dockPoint.oppositePrimary, DockPoint.POINTS.RIGHT);
		});
		it('should return DockPoint.POINTS.BOTTOM if the value is TOP_LEFT', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_LEFT);
			assert.equal(dockPoint.oppositePrimary, DockPoint.POINTS.BOTTOM);
		});
		it('should return DockPoint.POINTS.TOP if the value is BOTTOM_LEFT', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.BOTTOM_LEFT);
			assert.equal(dockPoint.oppositePrimary, DockPoint.POINTS.TOP);
		});
		it('should return DockPoint.POINTS.LEFT if the value is RIGHT_TOP', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.RIGHT_TOP);
			assert.equal(dockPoint.oppositePrimary, DockPoint.POINTS.LEFT);
		});
		it('should return DockPoint.POINTS.RIGHT if the value is LEFT_TOP', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.LEFT_TOP);
			assert.equal(dockPoint.oppositePrimary, DockPoint.POINTS.RIGHT);
		});
		it('should return DockPoint.POINTS.NONE if the value is NONE', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.NONE);
			assert.equal(dockPoint.oppositePrimary, DockPoint.POINTS.NONE);
		});
	});

	describe('.oppositeSecondary', () => {
		it('should return DockPoint.POINTS.NONE if the value is TOP', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP);
			assert.equal(dockPoint.oppositeSecondary, DockPoint.POINTS.NONE);
		});
		it('should return DockPoint.POINTS.TOP if the value is BOTTOM', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.BOTTOM);
			assert.equal(dockPoint.oppositeSecondary, DockPoint.POINTS.NONE);
		});
		it('should return DockPoint.POINTS.LEFT if the value is RIGHT', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.RIGHT);
			assert.equal(dockPoint.oppositeSecondary, DockPoint.POINTS.NONE);
		});
		it('should return DockPoint.POINTS.RIGHT if the value is LEFT', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.LEFT);
			assert.equal(dockPoint.oppositeSecondary, DockPoint.POINTS.NONE);
		});
		it('should return DockPoint.POINTS.RIGHT if the value is TOP_LEFT', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_LEFT);
			assert.equal(dockPoint.oppositeSecondary, DockPoint.POINTS.RIGHT);
		});
		it('should return DockPoint.POINTS.TOP if the value is TOP_RIGHT', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
			assert.equal(dockPoint.oppositeSecondary, DockPoint.POINTS.LEFT);
		});
		it('should return DockPoint.POINTS.LEFT if the value is RIGHT_TOP', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.RIGHT_TOP);
			assert.equal(dockPoint.oppositeSecondary, DockPoint.POINTS.BOTTOM);
		});
		it('should return DockPoint.POINTS.RIGHT if the value is RIGHT_BOTTOM', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.RIGHT_BOTTOM);
			assert.equal(dockPoint.oppositeSecondary, DockPoint.POINTS.TOP);
		});
		it('should return DockPoint.POINTS.CENTER if the value is RIGHT_CENTER', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.RIGHT_CENTER);
			assert.equal(dockPoint.oppositeSecondary, DockPoint.POINTS.CENTER);
		});
		it('should return DockPoint.POINTS.NONE if the value is NONE', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.NONE);
			assert.equal(dockPoint.oppositeSecondary, DockPoint.POINTS.NONE);
		});
	});

	describe('.isSame', () => {
		it('should return true if the same value is provided as a string', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_LEFT);
			assert.isTrue(dockPoint.isSame(DockPoint.POINTS.TOP_LEFT));
		});

		it('should return false if a different value is provided as a string', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_LEFT);
			assert.isFalse(dockPoint.isSame(DockPoint.POINTS.TOP_RIGHT));
		});

		it('should return true if the same value is provided as a DockPoint', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_LEFT);
			assert.isTrue(dockPoint.isSame(new DockPoint(DockPoint.POINTS.TOP_LEFT)));
		});

		it('should return false if a different value is provided as a DockPoint', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_LEFT);
			assert.isFalse(dockPoint.isSame(new DockPoint(DockPoint.POINTS.TOP_RIGHT)));
		});
	});

	describe('.toString', () => {
		it('should return the same string as .value()', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_LEFT);
			assert.equal(dockPoint.toString(), dockPoint.value());
		});
	});
});
