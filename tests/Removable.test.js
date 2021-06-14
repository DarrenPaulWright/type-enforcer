import { Removable } from '../index.js';
import assert from '../src/assert/assert.js';

class TestClass extends Removable {
}

describe('Removable', () => {
	it('should call a callback added to onRemove, with context, when remove is called', () => {
		let testVariable = 0;

		const testClass = new TestClass();

		testClass.onRemove(function() {
			if (this === testClass) {
				testVariable++;
			}
		});

		testClass.remove();

		assert.equal(testVariable, 1);
	});

	it('should call multiple callbacks added to onRemove when remove is called', () => {
		let testVariable = 0;

		const testClass = new TestClass();

		testClass.onRemove(() => {
			testVariable++;
		});
		testClass.onRemove(() => {
			testVariable++;
		});

		testClass.remove();

		assert.equal(testVariable, 2);
	});

	it('should call a callback added to onRemove once when remove is called twice', () => {
		let testVariable = 0;

		const testClass = new TestClass();

		testClass.onRemove(() => {
			testVariable++;
		});

		testClass.remove();
		testClass.remove();

		assert.equal(testVariable, 1);
	});

	it('should return false when isRemoved is called and remove isn\'t called', () => {
		const testClass = new TestClass();

		assert.equal(testClass.isRemoved, false);
	});

	it('should return false when isRemoved is called and onRemove is called', () => {
		const testClass = new TestClass();

		testClass.onRemove(() => {
		});

		assert.equal(testClass.isRemoved, false);
	});

	it('should return true when isRemoved is called and remove is called', () => {
		const testClass = new TestClass();

		testClass.onRemove(() => {
		});
		testClass.remove();

		assert.equal(testClass.isRemoved, true);
	});

	it('should not throw an error if remove is called without adding any onRemove callbacks', () => {
		const testClass = new TestClass();

		assert.notThrows(() => {
			testClass.remove();
		});
	});
});
