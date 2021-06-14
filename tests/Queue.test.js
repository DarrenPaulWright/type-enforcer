import { TestClass } from 'type-enforcer-test-helper';
import { Queue } from '../index.js';
import assert from '../src/assert/assert.js';

const emptyFunction = () => {
};

/* eslint-disable consistent-this */
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

		it('should decrement length if the original callback is provided', () => {
			const queue = new Queue();
			queue.add(emptyFunction);
			queue.add(emptyFunction);
			queue.add(emptyFunction);

			queue.discard(emptyFunction);

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
			let testVariable = 0;
			const queue = new Queue();
			queue.add(() => {
				testVariable++;
			});
			queue.add(() => {
				testVariable++;
			});
			queue.add(() => {
				testVariable++;
			});

			queue.trigger();

			assert.equal(testVariable, 3);
		});

		it('should stop calling callbacks if true is returned', () => {
			let testVariable = 0;
			const queue = new Queue();
			queue.add(() => {
				testVariable++;
			});
			queue.add(() => {
				testVariable++;
				return true;
			});
			queue.add(() => {
				testVariable++;
			});

			queue.trigger();

			assert.equal(testVariable, 2);
		});

		it('should call the callback when called with an id', () => {
			let testVariable = 0;
			const queue = new Queue();
			queue.add(() => {
				testVariable = 1;
			});
			const id = queue.add(() => {
				testVariable = 2;
			});
			queue.add(() => {
				testVariable = 3;
			});

			queue.trigger(id);

			assert.equal(testVariable, 2);
		});

		it('should NOT call any callbacks when called with an invalid id', () => {
			let testVariable = 0;
			const queue = new Queue();
			queue.add(() => {
				testVariable = 1;
			});
			queue.add(() => {
				testVariable = 2;
			});
			queue.add(() => {
				testVariable = 3;
			});

			queue.trigger('test');

			assert.equal(testVariable, 0);
		});

		it('should NOT call any callbacks that are discarded during a trigger', () => {
			let testVariable = 0;
			const queue = new Queue();
			queue.add(() => {
				testVariable = 1;
				queue.discard(id1);
				queue.discard(id2);
			});
			const id1 = queue.add(() => {
				testVariable = 2;
			});
			const id2 = queue.add(() => {
				testVariable = 3;
			});

			queue.trigger();

			assert.equal(testVariable, 1);
		});

		it('should call the callback with args when called with an id and args', () => {
			let testVariable = 0;
			const queue = new Queue();
			queue.add(() => {
				testVariable = 1;
			});
			const id = queue.add((value1, value2) => {
				testVariable = value2;
			});
			queue.add(() => {
				testVariable = 3;
			});

			queue.trigger(id, [10, 5]);

			assert.equal(testVariable, 5);
		});

		it('should call the callback with context when called with an id and context', () => {
			let testVariable = 0;
			const instance = new TestClass();
			const queue = new Queue();
			queue.add(() => {
				testVariable = 1;
			});
			const id = queue.add(function() {
				testVariable = this;
			});
			queue.add(() => {
				testVariable = 3;
			});

			queue.trigger(id, [], instance);

			assert.equal(testVariable, instance);
		});

		it('should be busy when a callback is triggered', () => {
			let testVariable = 0;
			const queue = new Queue();
			queue.add(function() {
				testVariable = 1;
			});
			const id = queue.add(() => {
				testVariable = queue.isBusy;
			});
			queue.add(() => {
				testVariable = 3;
			});

			queue.trigger(id);

			assert.equal(testVariable, true);
		});
	});

	describe('.triggerFirst', () => {
		it('should call the first callback and decrement length', () => {
			let testVariable = 0;
			const queue = new Queue();
			queue.add(() => {
				testVariable = 1;
			});
			queue.add(() => {
				testVariable = 2;
			});
			queue.add(() => {
				testVariable = 3;
			});

			queue.triggerFirst();

			assert.equal(testVariable, 1);
			assert.equal(queue.length, 2);
		});

		it('should call the callback with args when called with args', () => {
			let testVariable = 0;
			const queue = new Queue();
			queue.add((value1, value2) => {
				testVariable = value2;
			});
			queue.add(() => {
				testVariable = 1;
			});
			queue.add(() => {
				testVariable = 3;
			});

			queue.triggerFirst([10, 5]);

			assert.equal(testVariable, 5);
		});

		it('should call the callback with context when trigger is called with an id and context', () => {
			let testVariable = 0;
			const instance = new TestClass();
			const queue = new Queue();
			queue.add(function() {
				testVariable = this;
			});
			queue.add(() => {
				testVariable = 1;
			});
			queue.add(() => {
				testVariable = 3;
			});

			queue.triggerFirst([], instance);

			assert.equal(testVariable, instance);
		});

		it('should be busy when a callback is triggered', () => {
			let testVariable = 0;
			const queue = new Queue();
			queue.add(function() {
				testVariable = queue.isBusy;
			});
			queue.add(() => {
				testVariable = 1;
			});
			queue.add(() => {
				testVariable = 3;
			});

			queue.triggerFirst();

			assert.equal(testVariable, true);
		});
	});

	describe('.bindTo', () => {
		it('should set the context of each callback when trigger is called without an id', () => {
			let testVariable = 0;
			const point = new TestClass();
			const queue = new Queue().bindTo(point);
			queue.add(function() {
				if (this === point) {
					testVariable++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVariable++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVariable++;
				}
			});

			queue.trigger();

			assert.equal(testVariable, 3);
		});

		it('should set the context of each callback if bindTo is called after callbacks are added', () => {
			let testVariable = 0;
			const point = new TestClass();
			const queue = new Queue();
			queue.add(function() {
				if (this === point) {
					testVariable++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVariable++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVariable++;
				}
			});

			queue.bindTo(point).trigger();

			assert.equal(testVariable, 3);
		});

		it(
			'should set the context of each callback when trigger is called without an id and context is provided',
			() => {
				let testVariable = 0;
				const point = new TestClass();
				const point2 = new TestClass();
				const queue = new Queue().bindTo(point);
				queue.add(function() {
					if (this === point) {
						testVariable++;
					}
				});
				queue.add(function() {
					if (this === point) {
						testVariable++;
					}
				});
				queue.add(function() {
					if (this === point) {
						testVariable++;
					}
				});

				queue.trigger(null, [], point2);

				assert.equal(testVariable, 3);
			}
		);

		it('should set the context of the callback when trigger is called with an id', () => {
			let testVariable = 0;
			const point = new TestClass();
			const queue = new Queue().bindTo(point);
			queue.add(function() {
				if (this === point) {
					testVariable++;
				}
			});
			const id = queue.add(function() {
				if (this === point) {
					testVariable++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVariable++;
				}
			});

			queue.trigger(id);

			assert.equal(testVariable, 1);
		});

		it('should set the context of the callback when trigger is called with an id and context is provided', () => {
			let testVariable = 0;
			const point = new TestClass();
			const point2 = new TestClass();
			const queue = new Queue().bindTo(point);
			queue.add(function() {
				if (this === point) {
					testVariable++;
				}
			});
			const id = queue.add(function() {
				if (this === point) {
					testVariable++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVariable++;
				}
			});

			queue.trigger(id, [], point2);

			assert.equal(testVariable, 1);
		});

		it('should set the context of the callback when triggerFirst is called', () => {
			let testVariable = 0;
			const point = new TestClass();
			const queue = new Queue().bindTo(point);
			queue.add(function() {
				if (this === point) {
					testVariable++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVariable++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVariable++;
				}
			});

			queue.triggerFirst();

			assert.equal(testVariable, 1);
		});

		it('should set the context of the callback when triggerFirst is called and context is provided', () => {
			let testVariable = 0;
			const point = new TestClass();
			const point2 = new TestClass();
			const queue = new Queue().bindTo(point);
			queue.add(function() {
				if (this === point) {
					testVariable++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVariable++;
				}
			});
			queue.add(function() {
				if (this === point) {
					testVariable++;
				}
			});

			queue.triggerFirst([], point2);

			assert.equal(testVariable, 1);
		});
	});
});
