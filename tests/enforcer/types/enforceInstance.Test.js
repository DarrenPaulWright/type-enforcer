import { assert } from 'chai';
import { enforce, enforceInstance, Vector } from '../../../src';
import { validVectors } from '../../testValues';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.instance', () => {
		it('should exist in the exported "enforce" object', () => {
			assert.deepEqual(enforceInstance, enforce.instance);
		});

		it('should return the setter value when a valid Vector is provided', () => {
			assert.isTrue(enforce.instance(validVectors[0], Vector, validVectors[1]) instanceof Vector);
			assert.equal(enforce.instance(validVectors[0], Vector, validVectors[1]).toString(), validVectors[0]);
		});

		runNegativeTests('instance', validVectors[1], Vector);
	});
});
