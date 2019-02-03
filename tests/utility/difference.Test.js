import { assert } from 'chai';
import difference from '../../src/utility/difference';

describe('angle', () => {
	it('should not mutate array', () => {
		const first = [1, 2, 3, 4, 5, 6];
		const second = [3, 4, 5];
		const output = difference(first, second);
		assert.deepEqual(first, [1, 2, 3, 4, 5, 6]);
	});
	it('should not mutate array when two arrays are provided', () => {
		const first = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		const second = [3, 4];
		const third = [6, 7];
		const output = difference(first, second, third);
		assert.deepEqual(first, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});
	it('should remove the items from the second array', () => {
		assert.deepEqual(difference([1, 2, 3, 4, 5, 6], [3, 4, 5]), [1, 2, 6]);
	});
	it('should remove the items from multiple arrays', () => {
		assert.deepEqual(difference([1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 4], [6, 7]), [1, 2, 5, 8, 9]);
	});
});
