import { assert } from 'chai';
import { enforce } from '../../../src';
import { runNegativeTests } from '../enforceTestUtility';

const validInt = 11;
const validFloat = 34.23463456;

describe('enforce', () => {
	describe('.int', () => {
		it('should return the setter value when an int is provided', () => {
			assert.deepEqual(enforce.int(validInt, validFloat), validInt);
		});
		it('should return the setter value when a float is provided', () => {
			assert.deepEqual(enforce.int(validFloat, validInt), validInt);
		});
		it('should return the min value when a int less than the min value is provided', () => {
			assert.deepEqual(enforce.int(-12, validInt, 0, 5), 0);
		});
		it('should return the max value when a int greater than the max value is provided', () => {
			assert.deepEqual(enforce.int(12, validInt, 0, 5), 5);
		});

		runNegativeTests('int', validInt);
	});
});
