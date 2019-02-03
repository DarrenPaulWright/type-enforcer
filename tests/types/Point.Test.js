import { assert } from 'chai';
import { Point } from '../../src';
import { multiTest } from '../TestUtil';
import { pointData as data } from '../testValues';

describe('Point', () => {
	describe('Init', () => {
		it('should default 0,0', () => {
			const point = new Point();

			assert.equal(point.x, 0);
			assert.equal(point.y, 0);
		});

		it('should accept an array', () => {
			const point = new Point([1, 2]);

			assert.equal(point.x, 1);
			assert.equal(point.y, 2);
		});

		it('should accept an array with numeric strings', () => {
			const point = new Point(['1', '2']);

			assert.equal(point.x, 1);
			assert.equal(point.y, 2);
		});

		it('should accept an object with x and y', () => {
			const point = new Point({
				x: 1,
				y: 2
			});

			assert.equal(point.x, 1);
			assert.equal(point.y, 2);
		});

		it('should accept an object with x and y numeric strings', () => {
			const point = new Point({
				x: '1',
				y: '2'
			});

			assert.equal(point.x, 1);
			assert.equal(point.y, 2);
		});

		it('should accept two numbers', () => {
			const point = new Point(1, 2);

			assert.equal(point.x, 1);
			assert.equal(point.y, 2);
		});

		it('should accept a comma separated string', () => {
			const point = new Point('1,2');

			assert.equal(point.x, 1);
			assert.equal(point.y, 2);
		});
	});

	describe('.isValid', () => {
		const testCallback = (value) => Point.isValid(value);
		multiTest({
			values: data.true,
			test: testCallback,
			assertion: 'isTrue'
		});
		multiTest({
			values: data.coerceTrue,
			test: testCallback,
			assertion: 'isTrue'
		});
		multiTest({
			values: data.coerceFalse,
			test: testCallback,
			assertion: 'isFalse'
		});
	});

	describe('.toString', () => {
		it('should output a string', () => {
			const point = new Point([1, 2]);

			assert.equal(point.toString(), '1,2');
		});
	});

	describe('.isSame', () => {
		it('should return true when a Point that is the same is provided', () => {
			const point = new Point(1, 2);

			assert.equal(point.isSame(new Point(1, 2)), true);
		});

		it('should return true when a String that is the same is provided', () => {
			const point = new Point(1, 2);

			assert.equal(point.isSame('1,2'), true);
		});

		it('should return true when an array that is the same is provided', () => {
			const point = new Point(1, 2);

			assert.equal(point.isSame([1, 2]), true);
		});

		it('should return true when an object that is the same is provided', () => {
			const point = new Point(1, 2);

			assert.equal(point.isSame({
				x: 1,
				y: 2
			}), true);
		});

		it('should NOT return true when a Point that has a different x value is provided', () => {
			const point = new Point(1, 2);

			assert.equal(point.isSame(new Point(3, 2)), false);
		});

		it('should NOT return true when a Point that has different values is provided', () => {
			const point = new Point(1, 2);

			assert.equal(point.isSame(new Point(3, 4)), false);
		});
	});

	describe('.add', () => {
		it('should return a new Point with appropriate values', () => {
			const point = new Point(1, 2);

			assert.deepEqual(point.add(new Point(3, 4)), new Point(4, 6));
		});
	});

	describe('.subtract', () => {
		it('should return a new Point with appropriate values', () => {
			const point = new Point(1, 2);

			assert.deepEqual(point.subtract(new Point(3, 4)), new Point(-2, -2));
		});
	});

	describe('.distance', () => {
		it('should return a Number with appropriate value', () => {
			const point = new Point(3, 4);

			assert.equal(point.distance(), 5);
		});
	});

	describe('.angle', () => {
		it('should return a Number with appropriate value', () => {
			const point = new Point(0, 4);

			assert.equal(point.angle(), Math.PI / 2);
		});
	});

	describe('.pointAtDistance', () => {
		it('should return a Point with appropriate value', () => {
			const point = new Point(4, 0);

			assert.deepEqual(point.pointAtDistance(Math.PI / 2, 3), new Point(4, 3));
		});
	});

	describe('.clone', () => {
		it('should return a Point with the same value', () => {
			const point = new Point(4, 0);

			assert.deepEqual(point.clone(), new Point(4, 0));
		});
	});
});
