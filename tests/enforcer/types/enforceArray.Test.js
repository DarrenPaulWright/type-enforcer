import { assert } from 'chai';
import { enforce } from '../../../src';
import { runNegativeTests } from '../enforceTestUtility';

const validArray1 = [{
	id: 1
}];
const validArray2 = [{
	id: 2
}];

describe('enforce', () => {
	describe('.array', () => {
		it('should return the setter value when an array is provided', () => {
			assert.deepEqual(enforce.array(validArray1, validArray2), validArray1);
			assert.notDeepEqual(enforce.array(validArray1, validArray2), validArray2);
		});

		runNegativeTests('array', validArray2);
	});
});
