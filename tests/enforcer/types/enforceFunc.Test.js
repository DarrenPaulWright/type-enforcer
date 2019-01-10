import { assert } from 'chai';
import { enforce } from '../../../src';
import { runNegativeTests } from '../enforceTestUtility';

const validFunction1 = () => {
};
const validFunction2 = () => {
};

describe('enforce', () => {
	describe('.func', () => {
		it('should return the setter value when an array is provided', () => {
			assert.deepEqual(enforce.func(validFunction1, validFunction2), validFunction1);
			assert.notDeepEqual(enforce.func(validFunction1, validFunction2), validFunction2);
		});

		runNegativeTests('func', validFunction2);
	});
});
