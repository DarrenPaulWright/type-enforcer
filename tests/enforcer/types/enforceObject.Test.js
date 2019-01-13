import { assert } from 'chai';
import { enforce } from '../../../src';
import { validObjects } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.object', () => {
		it('should return the setter value when an array is provided', () => {
			assert.deepEqual(enforce.object(validObjects[1], validObjects[0]), validObjects[1]);
			assert.notDeepEqual(enforce.object(validObjects[1], validObjects[0]), validObjects[0]);
		});

		runNegativeTests('object', validObjects[0]);
	});
});
