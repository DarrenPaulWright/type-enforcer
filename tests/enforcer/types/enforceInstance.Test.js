import { assert } from 'chai';
import { enforce, Vector } from '../../../src';
import { validVectors } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.instance', () => {
		it('should return the setter value when a valid Vector is provided', () => {
			assert.isTrue(enforce.instance(validVectors[0], Vector, validVectors[1]) instanceof Vector);
			assert.equal(enforce.instance(validVectors[0], Vector, validVectors[1]).toString(), validVectors[0]);
		});

		runNegativeTests('instance', validVectors[1], Vector);
	});
});
