import { assert } from 'chai';
import { Point, Vector } from '../../src/index';
import TestUtil, { multiTest, vectorData as data } from '../TestUtil';

const testUtil = new TestUtil(Vector);

describe('Vector', () => {
	describe('init', () => {
		it('should instantiate without any arguments', () => {
			window.control = new Vector();

			assert.deepEqual(window.control.start(), new Point(0, 0));
		});

		it('should accept a start', () => {
			window.control = new Vector([1, 2]);

			assert.deepEqual(window.control.start(), new Point(1, 2));
		});

		it('should accept an end', () => {
			window.control = new Vector([1, 2], [5, 4]);

			assert.deepEqual(window.control.end(), new Point(5, 4));
		});

		it('should accept Points', () => {
			window.control = new Vector(new Point(1, 2), new Point(5, 4));

			assert.deepEqual(window.control.end(), new Point(5, 4));
		});

		it('should accept Objects', () => {
			window.control = new Vector({
				x: 1,
				y: 2
			}, {
				x: 5,
				y: 4
			});

			assert.deepEqual(window.control.end(), new Point(5, 4));
		});

		it('should accept a valid string', () => {
			window.control = new Vector('[[1,2],[3,4]]');

			assert.deepEqual(window.control.end(), new Point(3, 4));
		});

		it('should set the length when instantiated', () => {
			window.control = new Vector([1, 2], [1, 4]);

			assert.equal(window.control.length(), 2);
		});

		it('should set the angle when instantiated', () => {
			window.control = new Vector([1, 1], [2, 2]);

			assert.equal(window.control.angle(), Math.PI / 4);
		});

		it('should set the offset when instantiated', () => {
			window.control = new Vector([1, 1], [3, 5]);

			assert.deepEqual(window.control.offset(), new Point(2, 4));
		});
	});

	describe('.start', () => {
		testUtil.testMethod({
			methodName: 'start',
			defaultValue: new Point(),
			testValue: new Point(1, 2),
			secondTestValue: new Point(3, 4)
		});

		it('should accept an Array when start is set', () => {
			window.control = new Vector(new Point(1, 2), new Point(5, 4));

			window.control.start([5, 6]);

			assert.deepEqual(window.control.start(), new Point(5, 6));
		});

		it('should accept an Object when start is set', () => {
			window.control = new Vector(new Point(1, 2), new Point(5, 4));

			window.control.start({
				x: 1,
				y: 2
			});

			assert.deepEqual(window.control.start(), new Point(1, 2));
		});

		it('should set the length when start is set', () => {
			window.control = new Vector([1, 1], [2, 2]);

			window.control.start(new Point(5, 6));

			assert.deepEqual(window.control.length(), 5);
		});

		it('should set the angle when start is set', () => {
			window.control = new Vector([1, 1], [2, 2]);

			window.control.start(new Point(3, 3));

			assert.deepEqual(window.control.angle(), Math.PI * 5 / 4);
		});

		it('should set the offset when start is set', () => {
			window.control = new Vector([1, 1], [3, 5]);

			window.control.start(new Point(3, -1));

			assert.deepEqual(window.control.offset(), new Point(0, 6));
		});
	});

	describe('.end', () => {
		testUtil.testMethod({
			methodName: 'end',
			defaultValue: new Point(),
			testValue: new Point(1, 2),
			secondTestValue: new Point(3, 4)
		});

		it('should accept an Array when end is set', () => {
			window.control = new Vector(new Point(1, 2), new Point(5, 4));

			window.control.end([5, 6]);

			assert.deepEqual(window.control.end(), new Point(5, 6));
		});

		it('should accept an Object when end is set', () => {
			window.control = new Vector(new Point(1, 2), new Point(5, 4));

			window.control.end({
				x: 1,
				y: 2
			});

			assert.deepEqual(window.control.end(), new Point(1, 2));
		});

		it('should set the length when end is set', () => {
			window.control = new Vector([1, 1], [2, 2]);

			window.control.end(new Point(4, 5));

			assert.deepEqual(window.control.length(), 5);
		});

		it('should set the angle when end is set', () => {
			window.control = new Vector([1, 1], [2, 2]);

			window.control.end(new Point(3, -1));

			assert.deepEqual(window.control.angle(), Math.PI * 7 / 4);
		});

		it('should set the offset when end is set', () => {
			window.control = new Vector([1, 1], [3, 5]);

			window.control.end(new Point(3, -1));

			assert.deepEqual(window.control.offset(), new Point(2, -2));
		});
	});

	describe('.invert', () => {
		it('should switch the start and end when invert is called', () => {
			window.control = new Vector([1, 1], [3, 5]);

			window.control.invert();

			assert.deepEqual(window.control.start(), new Point(3, 5));
			assert.deepEqual(window.control.end(), new Point(1, 1));
		});

		it('should set the angle when invert is called', () => {
			window.control = new Vector([1, 1], [2, 2]);

			window.control.invert();

			assert.deepEqual(window.control.angle(), Math.PI * 5 / 4);
		});

		it('should set the offset when invert is called', () => {
			window.control = new Vector([1, 1], [3, 5]);

			window.control.invert();

			assert.deepEqual(window.control.offset(), new Point(-2, -4));
		});
	});

	describe('.length', () => {
		testUtil.testMethod({
			methodName: 'length',
			defaultValue: 0,
			testValue: 1,
			secondTestValue: 2
		});

		it('should set the end when length is set', () => {
			window.control = new Vector([1, 1], [5, 1]);

			window.control.length(2);

			assert.deepEqual(window.control.end(), new Point(3, 1));
		});

		it('should set the offset when angle is set', () => {
			window.control = new Vector([1, 1], [5, 1]);

			window.control.length(2);

			assert.deepEqual(window.control.offset(), new Point(2, 0));
		});
	});

	describe('.angle', () => {
		testUtil.testMethod({
			methodName: 'angle',
			defaultValue: 0,
			testValue: 1,
			secondTestValue: 2
		});

		it('should set the end when angle is set', () => {
			window.control = new Vector([1, 1], [5, 1]);

			window.control.angle(Math.PI / 2);

			assert.deepEqual(window.control.end(), new Point(1.0000000000000002, 5));
		});

		it('should set the offset when angle is set', () => {
			window.control = new Vector([1, 1], [5, 1]);

			window.control.angle(Math.PI / 2);

			assert.deepEqual(window.control.offset(), new Point(2.220446049250313e-16, 4));
		});

		it('should normalize the angle when greater than 2 * PI', () => {
			window.control = new Vector([1, 1], [3, 5]);

			window.control.angle(Math.PI * 2.5);

			assert.equal(window.control.angle(), Math.PI / 2);
		});

		it('should normalize the angle when less than 0', () => {
			window.control = new Vector([1, 1], [3, 5]);

			window.control.angle(-Math.PI * 5 / 2);

			assert.equal(window.control.angle(), Math.PI * 3 / 2);
		});
	});

	describe('.offset', () => {
		testUtil.testMethod({
			methodName: 'offset',
			defaultValue: new Point(),
			testValue: new Point(1, 2),
			secondTestValue: new Point(3, 4)
		});

		it('should accept an Array when offset is set', () => {
			window.control = new Vector(new Point(1, 2), new Point(5, 4));

			window.control.offset([5, 6]);

			assert.deepEqual(window.control.offset(), new Point(5, 6));
		});

		it('should accept an Object when offset is set', () => {
			window.control = new Vector(new Point(1, 2), new Point(5, 4));

			window.control.offset({
				x: 1,
				y: 2
			});

			assert.deepEqual(window.control.offset(), new Point(1, 2));
		});

		it('should set the end when offset is set', () => {
			window.control = new Vector([1, 1], [3, 5]);

			window.control.offset(new Point(5, 6));

			assert.deepEqual(window.control.end(), new Point(6, 7));
		});

		it('should set the length when offset is set', () => {
			window.control = new Vector([1, 1], [3, 5]);

			window.control.offset(new Point(5, 6));

			assert.deepEqual(window.control.length(), Math.sqrt((61)));
		});
	});

	describe('.toString', () => {
		it('should return a string of the vector', () => {
			assert.equal(new Vector().toString(), '[[0,0],[0,0]]');
		});
		it('should return a string of the vector if custom', () => {
			assert.equal(new Vector([1, 2], [3, 4]).toString(), '[[1,2],[3,4]]');
		});
	});

	describe('.isSame', () => {
		it('should return false if not a Vector', () => {
			assert.isFalse(new Vector([1, 2], [3, 4]).isSame('something'));
		});
		it('should return true if the same Vector', () => {
			assert.isTrue(new Vector([1, 2], [3, 4]).isSame(new Vector([1, 2], [3, 4])));
		});
		it('should return false if a different Vector', () => {
			assert.isFalse(new Vector([1, 2], [3, 4]).isSame(new Vector([5, 2], [3, 4])));
		});
	});

	describe('.isValid', () => {
		const testCallback = (value) => Vector.isValid(value);
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
});
