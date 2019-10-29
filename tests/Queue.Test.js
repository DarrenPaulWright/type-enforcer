import { assert } from 'chai';
import { TestClass } from 'type-enforcer-test-helper';
import { Queue } from '../index';

const emptyFunction = () => {
};

describe('Queue', () => {
	describe('.add', () => {
		it('should return an id when a function is provided', () => {
			const queue = new Queue();
			const id = queue.add(emptyFunction);

			assert.equal(id, '1');
		});

		it('should return a different id when two functions are added', () => {
			const queue = new Queue();
			const id = queue.add(emptyFunction);
			const id2 = queue.add(emptyFunction);

			assert.notEqual(id, id2);
		});

		it('should return nothing when nothing is provided', () => {
			const queue = new Queue();
			const id = queue.add();

			assert.equal(id, undefined);
		});
	});

	describe('.discard', () => {
		it('should decrement length', () => {
			const queue = new Queue();
			queue.add(emptyFunction);
			const id = queue.add(emptyFunction);
			queue.add(emptyFunction);

			queue.discard(id);

			assert.equal(queue.length, 2);
		});

		it('should NOT decrement length if no id is provided', () => {
			const queue = new Queue();
			queue.add(emptyFunction);
			queue.add(emptyFunction);
			queue.add(emptyFunction);

			queue.discard();

			assert.equal(queue.length, 3);
		});

		it('should return provided data', () => {
			const queue = new Queue();
			const id = queue.add(emptyFunction, 'something');
			queue.add(emptyFunction);

			const data = queue.discard(id);

			assert.equal(data, 'something');
		});

		it('should NOT return data if not provided', () => {
			const queue = new Queue();
			const id = queue.add(emptyFunction);
			queue.add(emptyFunction, 'something');

			const data = queue.discard(id);

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
			queue.add(() => {
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
			const id = queue.add(() => {
				testVar = 2;
			});
			queue.add(() => {
				testVar = 3;
			});

			queue.trigger(id);

			assert.equal(testVar, 2);
		});

		it('should NOT call any callbacks when called with an invalid id', () => {
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

			queue.trigger('test');

			assert.equal(testVar, 0);
		});

		it('should NOT call any callbacks that are discarded during a trigger', () => {
			let testVar = 0;
			const queue = new Queue();
			queue.add(() => {
				testVar = 1;
				queue.discard(id1);
				queue.discard(id2);
			});
			const id1 = queue.add(() => {
				testVar = 2;
			});
			const id2 = queue.add(() => {
				testVar = 3;
			});

			queue.trigger();

			assert.equal(testVar, 1);
		});

		it('should call the callback with args when called with an id and args', () => {
			let testVar = 0;
			const queue = new Queue();
			queue.add(() => {
				testVar = 1;
			});
			const id = queue.add((value1, value2) => {
				testVar = value2;
			});
			queue.add(() => {
				testVar = 3;
			});

			queue.trigger(id, [10, 5]);

			assert.equal(testVar, 5);
		});

		it('should call the callback with context when called with an id and context', () => {
			let testVar = 0;
			const instance = new TestClass();
			const queue = new Queue();
			queue.add(() => {
				testVar = 1;
			});
			const id = queue.add(function() {
				testVar = this;
			});
			queue.add(() => {
				testVar = 3;
			});

			queue.trigger(id, [], instance);

			assert.equal(testVar, instance);
		});

		it('should be busy when a callback is triggered', () => {
			let testVar = 0;
			const queue = new Queue();
			queue.add(function() {
				testVar = 1;
			});
			const id = queue.add(() => {
				testVar = queue.isBusy;
			});
			queue.add(() => {
				testVar = 3;
			});

			queue.trigger(id);

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
			const instance = new TestClass();
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

	describe('.bindTo', () => {
		it('should set the context of each callback when trigger is called without an id', () => {
			let testVar = 0;
			const point = new TestClass();
			const queue = new Queue().bindTo(point);
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});

			queue.trigger();

			assert.equal(testVar, 3);
		});

		it('should set the context of each callback if bindTo is called after callbacks are added', () => {
			let testVar = 0;
			const point = new TestClass();
			const queue = new Queue();
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});

			queue.bindTo(point).trigger();

			assert.equal(testVar, 3);
		});

		it('should set the context of each callback when trigger is called without an id and context is provided', () => {
			let testVar = 0;
			const point = new TestClass();
			const point2 = new TestClass();
			const queue = new Queue().bindTo(point);
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});

			queue.trigger(null, [], point2);

			assert.equal(testVar, 3);
		});

		it('should set the context of the callback when trigger is called with an id', () => {
			let testVar = 0;
			const point = new TestClass();
			const queue = new Queue().bindTo(point);
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});
			const id = queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});

			queue.trigger(id);

			assert.equal(testVar, 1);
		});

		it('should set the context of the callback when trigger is called with an id and context is provided', () => {
			let testVar = 0;
			const point = new TestClass();
			const point2 = new TestClass();
			const queue = new Queue().bindTo(point);
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});
			const id = queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});

			queue.trigger(id, [], point2);

			assert.equal(testVar, 1);
		});

		it('should set the context of the callback when triggerFirst is called', () => {
			let testVar = 0;
			const point = new TestClass();
			const queue = new Queue().bindTo(point);
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});

			queue.triggerFirst();

			assert.equal(testVar, 1);
		});

		it('should set the context of the callback when triggerFirst is called and context is provided', () => {
			let testVar = 0;
			const point = new TestClass();
			const point2 = new TestClass();
			const queue = new Queue().bindTo(point);
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVar++;
				}
			});

			queue.triggerFirst([], point2);

			assert.equal(testVar, 1);
		});
	});
});
