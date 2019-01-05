import { assert } from 'chai';
import { enforce } from '../../../src';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.bool', () => {
		it('should return the setter value when a boolean is provided', () => {
			assert.deepEqual(enforce.bool(true, false), true);
			assert.deepEqual(enforce.bool(false, true), false);
		});
		it('should NOT return the setter value when the string \'true\' is provided', () => {
			assert.deepEqual(enforce.bool('true', false), false);
		});
		it('should NOT return the setter value when the string \'false\' is provided', () => {
			assert.deepEqual(enforce.bool('false', true), true);
		});

		runNegativeTests('bool', true);
	});
});
