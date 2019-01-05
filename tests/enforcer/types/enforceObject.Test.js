import { assert } from 'chai';
import { enforce } from '../../../src';
import { runNegativeTests } from '../enforceTestUtility';

const validObject = {
	id: 1
};
const validObject2 = {
	id: 2
};

describe('enforce', () => {
	describe('.object', () => {
		it('should return the setter value when an array is provided', () => {
			assert.deepEqual(enforce.object(validObject2, validObject), validObject2);
			assert.notDeepEqual(enforce.object(validObject2, validObject), validObject);
		});

		runNegativeTests('object', validObject);
	});
});
