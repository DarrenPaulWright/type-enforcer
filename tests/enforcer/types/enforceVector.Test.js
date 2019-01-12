import { assert } from 'chai';
import { enforce, Vector } from '../../../src';
import { validVectors } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.vector', () => {
		it('should return the setter value when a valid Vector is provided', () => {
			assert.isTrue(enforce.vector(validVectors[0], validVectors[1]) instanceof Vector);
			assert.equal(enforce.vector(validVectors[0], validVectors[1]).toString(), validVectors[0]);
		});

		runNegativeTests('vector', validVectors[1]);
	});
});
