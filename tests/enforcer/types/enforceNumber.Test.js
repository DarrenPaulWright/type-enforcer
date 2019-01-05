import { assert } from 'chai';
import { enforce } from '../../../src';
import { runNegativeTests } from '../enforceTestUtility';

const validInt = 11;
const validFloat = 34.23463456;

describe('enforce', () => {
	describe('.number', () => {
		it('should return the setter value when an int is provided', () => {
			assert.deepEqual(enforce.number(validInt, validFloat), validInt);
			assert.notDeepEqual(enforce.number(validInt, validFloat), validFloat);
		});
		it('should return the default value when a float is provided', () => {
			assert.deepEqual(enforce.number(validFloat, validInt), validFloat);
		});
		it('should return the min value when a number less than the min value is provided', () => {
			assert.deepEqual(enforce.number(-12, validInt, 0, 5), 0);
		});
		it('should return the max value when a number greater than the max value is provided', () => {
			assert.deepEqual(enforce.number(12, validInt, 0, 5), 5);
		});

		runNegativeTests('number', validInt);
	});
});
