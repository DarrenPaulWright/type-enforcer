import { assert } from 'chai';
import { Point } from '../../src/index';

describe('Point', () => {
	describe('Init', () => {
		it('should accept an array when instantiated', () => {
			const point = new Point([1, 2]);

			assert.equal(point.x, 1);
			assert.equal(point.y, 2);
		});

		it('should accept an object with x and y when instantiated', () => {
			const point = new Point({
				x: 1,
				y: 2
			});

			assert.equal(point.x, 1);
			assert.equal(point.y, 2);
		});

		it('should accept two numbers when instantiated', () => {
			const point = new Point(1, 2);

			assert.equal(point.x, 1);
			assert.equal(point.y, 2);
		});
	});

	describe('Methods', () => {
		it('should output a string when toString is called', () => {
			const point = new Point([1, 2]);

			assert.equal(point.toString(), '1,2');
		});

		it('should return true when isSame is called with a Point that is the same', () => {
			const point = new Point(1, 2);

			assert.equal(point.isSame(new Point(1, 2)), true);
		});

		it('should NOT return true when isSame is called with a Point that has a different x value', () => {
			const point = new Point(1, 2);

			assert.equal(point.isSame(new Point(3, 2)), false);
		});

		it('should NOT return true when isSame is called with a Point that has different values', () => {
			const point = new Point(1, 2);

			assert.equal(point.isSame(new Point(3, 4)), false);
		});

		it('should return a new Point with appropriate values when add is called', () => {
			const point = new Point(1, 2);

			assert.deepEqual(point.add(new Point(3, 4)), new Point(4, 6));
		});

		it('should return a new Point with appropriate values when subtract is called', () => {
			const point = new Point(1, 2);

			assert.deepEqual(point.subtract(new Point(3, 4)), new Point(-2, -2));
		});

		it('should return a Number with appropriate value when distance is called', () => {
			const point = new Point(3, 4);

			assert.equal(point.distance(), 5);
		});

		it('should return a Number with appropriate value when angle is called', () => {
			const point = new Point(0, 4);

			assert.equal(point.angle(), Math.PI / 2);
		});

		it('should return a Point with appropriate value when pointAtDistance is called', () => {
			const point = new Point(4, 0);

			assert.deepEqual(point.pointAtDistance(Math.PI / 2, 3), new Point(4, 3));
		});
	});
});
