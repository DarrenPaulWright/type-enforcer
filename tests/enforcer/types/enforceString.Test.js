import { assert } from 'chai';
import { enforce } from '../../../src';
import { runNegativeTests } from '../enforceTestUtility';

const validString1 = 'test string';
const validString2 = 'test string 2';

describe('enforce', () => {
	describe('.string', () => {
		it('should return the setter value when a string is provided', () => {
			assert.deepEqual(enforce.string(validString2, validString1), validString2);
			assert.notDeepEqual(enforce.string(validString2, validString1), validString1);
		});

		runNegativeTests('string', validString1);
	});
});
