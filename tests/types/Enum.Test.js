import { assert } from 'chai';
import { Enum } from '../../src/index';

describe('Enum', () => {
	const ENUM = new Enum({
		TEST1: 'test1',
		TEST2: 'test2'
	});

	it('should look like an object', () => {
		assert.isTrue(ENUM.TEST1 === 'test1');
		assert.isTrue(ENUM.TEST2 === 'test2');
	});

	it('should return true for a valid value', () => {
		assert.isTrue(ENUM.has('test2'));
	});

	it('should return false for a bad value', () => {
		assert.isFalse(ENUM.has('test3'));
	});
});
