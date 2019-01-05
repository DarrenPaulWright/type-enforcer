import { assert } from 'chai';
import { enforce, Vector } from '../../../src';
import { runNegativeTests } from '../enforceTestUtility';

const vector1 = new Vector([1, 2], [3, 4]);
const vector2 = new Vector([3, 4], [5, 6]);

describe('enforce', () => {
	describe('.instance', () => {
		it('should return the setter value when a valid Vector is provided', () => {
			assert.isTrue(enforce.instance(vector1, Vector, vector2) instanceof Vector);
			assert.equal(enforce.instance(vector1, Vector, vector2).toString(), vector1);
		});

		runNegativeTests('instance', vector2, Vector);
	});
});
