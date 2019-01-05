import { assert } from 'chai';
import { enforce, Point } from '../../../src';
import { runNegativeTests } from '../enforceTestUtility';

const point1 = new Point(1, 2);
const point2 = new Point(3, 4);

describe('enforce', () => {
	describe('.point', () => {
		it('should return the setter value when a valid Point is provided', () => {
			assert.isTrue(enforce.point(point1, point2) instanceof Point);
			assert.equal(enforce.point(point1, point2).toString(), point1);
		});

		runNegativeTests('point', point2);
	});
});
