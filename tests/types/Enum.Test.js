import { assert } from 'chai';
import { Enum } from '../../src/index';

describe('Enum', () => {
	it('should look like an object', () => {
		const ENUM = new Enum({
			TEST1: 'test1',
			TEST2: 'test2'
		});

		assert.isTrue(ENUM.TEST1 === 'test1');
		assert.isTrue(ENUM.TEST2 === 'test2');
	});

	describe('.has', () => {
		it('should return true for a valid value', () => {
			const ENUM = new Enum({
				TEST1: 'test1',
				TEST2: 'test2'
			});

			assert.isTrue(ENUM.has('test2'));
		});

		it('should return false for a bad value', () => {
			const ENUM = new Enum({
				TEST1: 'test1',
				TEST2: 'test2'
			});

			assert.isFalse(ENUM.has('test3'));
		});
	});

	describe('.each', () => {
		it('should call a callback for each value', () => {
			let testVar = 0;
			const ENUM = new Enum({
				TEST1: 'test1',
				TEST2: 'test2'
			});

			ENUM.each((value) => {
				testVar++;
			});

			assert.equal(testVar, 2);
		});
	});
});
