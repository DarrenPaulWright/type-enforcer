import { assert } from 'chai';
import castArray from '../../src/utility/castArray';

describe('castArray', () => {
	it('should wrap a string in an array', () => {
		assert.deepEqual(castArray('string'), ['string']);
	});

	it('should NOT wrap an array in an array', () => {
		assert.deepEqual(castArray(['string']), ['string']);
	});
});
