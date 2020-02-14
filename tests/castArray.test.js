import { castArray } from '../index.js';
import assert from '../src/assert/assert.js';

describe('castArray', () => {
	it('should wrap a string in an array', () => {
		assert.equal(castArray('string'), ['string']);
	});

	it('should NOT wrap an array in an array', () => {
		assert.equal(castArray(['string']), ['string']);
	});

	it('should return an empty array if nothing is given', () => {
		assert.equal(castArray(), []);
	});

	it('should return an array if arguments are given', () => {
		function test() {
			assert.equal(castArray(arguments), ['a', 'b', 'c']);
		}

		test('a', 'b', 'c');
	});
});
