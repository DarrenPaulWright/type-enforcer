import { assert } from 'chai';
import castArray from '../src/utility/castArray';

describe('castArray', () => {
	it('should wrap a string in an array', () => {
		assert.deepEqual(castArray('string'), ['string']);
	});

	it('should NOT wrap an array in an array', () => {
		assert.deepEqual(castArray(['string']), ['string']);
	});

	it('should return an empty array if nothing is given', () => {
		assert.deepEqual(castArray(), []);
	});

	it('should return an array if arguments are given', () => {
		function test() {
			assert.deepEqual(castArray(arguments), ['a', 'b', 'c']);
		}

		test('a', 'b', 'c');
	});
});
