import { assert } from 'chai';
import { enforce } from '../../../src';
import { validFunctions } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.function', () => {
		it('should return the setter value when an array is provided', () => {
			assert.deepEqual(enforce.function(validFunctions[0], validFunctions[1]), validFunctions[0]);
			assert.notDeepEqual(enforce.function(validFunctions[0], validFunctions[1]), validFunctions[1]);
		});

		runNegativeTests('function', validFunctions[1]);
	});
});
