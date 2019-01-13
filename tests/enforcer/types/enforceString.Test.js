import { assert } from 'chai';
import { enforce } from '../../../src';
import { validStrings } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.string', () => {
		it('should return the setter value when a string is provided', () => {
			assert.deepEqual(enforce.string(validStrings[1], validStrings[0]), validStrings[1]);
			assert.notDeepEqual(enforce.string(validStrings[1], validStrings[0]), validStrings[0]);
		});

		runNegativeTests('string', validStrings[1]);
	});
});
