import { assert } from 'chai';
import { Point, Queue } from '../../src';

const emptyFunction = () => {
};

describe('Queue', () => {
	describe('.add', () => {
		it('should return an id when a function is provided', () => {
			const queue = new Queue();
			const ID = queue.add(emptyFunction);

			assert.equal(ID, '1');
		});

		it('should return a different id when two functions are added', () => {
			const queue = new Queue();
			const ID = queue.add(emptyFunction);
			const ID2 = queue.add(emptyFunction);

			assert.notEqual(ID, ID2);
		});

		it('should return nothing when nothing is provided', () => {
			const queue = new Queue();
			const ID = queue.add();

			assert.equal(ID, undefined);
		});
	});

	describe('.discard', () => {
		it('should decrement length', () => {
			const queue = new Queue();
			queue.add(emptyFunction);
			const ID = queue.add(emptyFunction);
			queue.add(emptyFunction);

			queue.discard(ID);

			assert.equal(queue.length, 2);
		});

		it('should NOT decrement length if no ID is provided', () => {
			const queue = new Queue();
			queue.add(emptyFunction);
			queue.add(emptyFunction);
			queue.add(emptyFunction);

			queue.discard();

			assert.equal(queue.length, 3);
		});

		it('should return provided data', () => {
			const queue = new Queue();
			const ID = queue.add(emptyFunction, 'something');
			queue.add(emptyFunction);

			const data = queue.discard(ID);

			assert.equal(data, 'something');
		});

		it('should NOT return data if not provided', () => {
			const queue = new Queue();
			const ID = queue.add(emptyFunction);
			queue.add(emptyFunction, 'something');

			const data = queue.discard(ID);

			assert.equal(data, undefined);
		});
	});

	describe('.discardAll', () => {
		it('should set length to 0', () => {
			const queue = new Queue();
			queue.add(emptyFunction);
			queue.add(emptyFunction);
			queue.add(emptyFunction);

			queue.discardAll();

			assert.equal(queue.length, 0);
		});
	});

	describe('.trigger', () => {
		it('should call all the callbacks', () => {
			let testVar = 0;
			const queue = new Queue();
			queue.add(() => {
				testVar++;
			});
			const ID = queue.add(() => {
				testVar++;
			});
			queue.add(() => {
				testVar++;
			});

			queue.trigger();

			assert.equal(testVar, 3);
		});

		it('should call the callback when called with an id', () => {
			let testVar = 0;
			const queue = new Queue();
			queue.add(() => {
				testVar = 1;
			});
			const ID = queue.add(() => {
				testVar = 2;
			});
			queue.add(() => {
				testVar = 3;
			});

			queue.trigger(ID);

			assert.equal(testVar, 2);
		});

		it('should call the callback with args when called with an id and args', () => {
			let testVar = 0;
			const queue = new Queue();
			queue.add(() => {
				testVar = 1;
			});
			const ID = queue.add((value1, value2) => {
				testVar = value2;
			});
			queue.add(() => {
				testVar = 3;
			});

			queue.trigger(ID, [10, 5]);

			assert.equal(testVar, 5);
		});

		it('should call the callback with context when called with an id and context', () => {
			let testVar = 0;
			const instance = new Point();
			const queue = new Queue();
			queue.add(() => {
				testVar = 1;
			});
			const ID = queue.add(function() {
				testVar = this;
			});
			queue.add(() => {
				testVar = 3;
			});

			queue.trigger(ID, [], instance);

			assert.equal(testVar, instance);
		});

		it('should be busy when a callback is triggered', () => {
			let testVar = 0;
			const queue = new Queue();
			queue.add(function() {
				testVar = 1;
			});
			const ID = queue.add(() => {
				testVar = queue.isBusy;
			});
			queue.add(() => {
				testVar = 3;
			});

			queue.trigger(ID);

			assert.equal(testVar, true);
		});
	});

	describe('.triggerFirst', () => {
		it('should call the first callback and decrement length', () => {
			let testVar = 0;
			const queue = new Queue();
			queue.add(() => {
				testVar = 1;
			});
			queue.add(() => {
				testVar = 2;
			});
			queue.add(() => {
				testVar = 3;
			});

			queue.triggerFirst();

			assert.equal(testVar, 1);
			assert.equal(queue.length, 2);
		});

		it('should call the callback with args when called with args', () => {
			let testVar = 0;
			const queue = new Queue();
			queue.add((value1, value2) => {
				testVar = value2;
			});
			queue.add(() => {
				testVar = 1;
			});
			queue.add(() => {
				testVar = 3;
			});

			queue.triggerFirst([10, 5]);

			assert.equal(testVar, 5);
		});

		it('should call the callback with context when trigger is called with an id and context', () => {
			let testVar = 0;
			const instance = new Point();
			const queue = new Queue();
			queue.add(function() {
				testVar = this;
			});
			queue.add(() => {
				testVar = 1;
			});
			queue.add(() => {
				testVar = 3;
			});

			queue.triggerFirst([], instance);

			assert.equal(testVar, instance);
		});

		it('should be busy when a callback is triggered', () => {
			let testVar = 0;
			const queue = new Queue();
			queue.add(function() {
				testVar = queue.isBusy;
			});
			queue.add(() => {
				testVar = 1;
			});
			queue.add(() => {
				testVar = 3;
			});

			queue.triggerFirst();

			assert.equal(testVar, true);
		});
	});
});
