import { describe, it } from 'hippogriff';
import { Enum } from '../index.js';
import assert from './assert/assert.js';

describe('Enum', () => {
	it('should look like an object', () => {
		const ENUM = new Enum({
			TEST1: 'test1',
			TEST2: 'test2'
		});

		assert.equal(ENUM.TEST1 === 'test1', true);
		assert.equal(ENUM.TEST2 === 'test2', true);
	});

	it('should be frozen', () => {
		const ENUM = new Enum({
			TEST1: 'test1',
			TEST2: 'test2'
		});

		try {
			ENUM.TEST3 = 'test3';
		}
		catch (error) {
			assert.equal(1, 1);
		}

		assert.equal(ENUM.TEST3 === undefined, true);
	});

	describe('.key', () => {
		it('should return the appropriate key for a valid value', () => {
			const ENUM = new Enum({
				TEST1: 'test1',
				TEST2: 'test2'
			});

			assert.equal(ENUM.key('test2'), 'TEST2');
		});

		it('should return undefined for a bad value', () => {
			const ENUM = new Enum({
				TEST1: 'test1',
				TEST2: 'test2'
			});

			assert.equal(ENUM.key('test3'), undefined);
		});
	});

	describe('.has', () => {
		it('should return true for a valid value', () => {
			const ENUM = new Enum({
				TEST1: 'test1',
				TEST2: 'test2'
			});

			assert.equal(ENUM.has('test2'), true);
		});

		it('should return false for a bad value', () => {
			const ENUM = new Enum({
				TEST1: 'test1',
				TEST2: 'test2'
			});

			assert.equal(ENUM.has('test3'), false);
		});
	});

	describe('.each', () => {
		it('should call a callback for each value', () => {
			let testVariable = 0;
			const ENUM = new Enum({
				TEST1: 'test1',
				TEST2: 'test2'
			});

			ENUM.each(() => {
				testVariable++;
			});

			assert.equal(testVariable, 2);
		});
	});
});
