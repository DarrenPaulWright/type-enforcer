import { assert } from 'chai';
import { enforce } from '../../../src';
import { validArrays } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.array', () => {
		it('should return the setter value when an array is provided', () => {
			assert.deepEqual(enforce.array(validArrays[0], validArrays[1]), validArrays[0]);
			assert.notDeepEqual(enforce.array(validArrays[0], validArrays[1]), validArrays[1]);
		});

		runNegativeTests('array', validArrays[1]);
	});
});
