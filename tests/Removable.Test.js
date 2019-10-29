import { assert } from 'chai';
import { Removable } from '../index';

class TestClass extends Removable {}

describe('Removable', () => {
	it('should call a callback added to onRemove, with context, when remove is called', () => {
		let testVar = 0;

		const testClass = new TestClass();

		testClass.onRemove(function() {
			if (this === testClass) {
				testVar++;
			}
		});

		testClass.remove();

		assert.equal(testVar, 1);
	});

	it('should call multiple callbacks added to onRemove when remove is called', () => {
		let testVar = 0;

		const testClass = new TestClass();

		testClass.onRemove(() => {
			testVar++;
		});
		testClass.onRemove(() => {
			testVar++;
		});

		testClass.remove();

		assert.equal(testVar, 2);
	});

	it('should call a callback added to onRemove once when remove is called twice', () => {
		let testVar = 0;

		const testClass = new TestClass();

		testClass.onRemove(() => {
			testVar++;
		});

		testClass.remove();
		testClass.remove();

		assert.equal(testVar, 1);
	});

	it('should return false when isRemoved is called and remove isn\'t called', () => {
		const testClass = new TestClass();

		assert.isFalse(testClass.isRemoved);
	});

	it('should return false when isRemoved is called and onRemove is called', () => {
		const testClass = new TestClass();

		testClass.onRemove(() => {
		});

		assert.isFalse(testClass.isRemoved);
	});

	it('should return true when isRemoved is called and remove is called', () => {
		const testClass = new TestClass();

		testClass.onRemove(() => {
		});
		testClass.remove();

		assert.isTrue(testClass.isRemoved);
	});

	it('should not throw an error if remove is called without adding any onRemove callbacks', () => {
		const testClass = new TestClass();

		assert.doesNotThrow(() => {
			testClass.remove();
		});
	});
});
