import { assert } from 'chai';
import { enforce } from '../../../src';
import { validFunctions } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.func', () => {
		it('should return the setter value when an array is provided', () => {
			assert.deepEqual(enforce.func(validFunctions[0], validFunctions[1]), validFunctions[0]);
			assert.notDeepEqual(enforce.func(validFunctions[0], validFunctions[1]), validFunctions[1]);
		});

		runNegativeTests('func', validFunctions[1]);
	});
});
