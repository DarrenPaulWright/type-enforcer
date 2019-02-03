import { assert } from 'chai';
import { enforce, enforceFunction } from '../../../src';
import { validFunctions } from '../../testValues';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.function', () => {
		it('should exist in the exported "enforce" object', () => {
			assert.deepEqual(enforceFunction, enforce.function);
		});

		it('should return the setter value when an array is provided', () => {
			assert.deepEqual(enforce.function(validFunctions[0], validFunctions[1]), validFunctions[0]);
			assert.notDeepEqual(enforce.function(validFunctions[0], validFunctions[1]), validFunctions[1]);
		});

		runNegativeTests('function', validFunctions[1]);
	});
});
