import { assert } from 'chai';
import { enforce, Point } from '../../../src';
import { validPoints } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.point', () => {
		it('should return the setter value when a valid Point is provided', () => {
			assert.isTrue(enforce.point(validPoints[0], validPoints[1]) instanceof Point);
			assert.equal(enforce.point(validPoints[0], validPoints[1]).toString(), validPoints[0]);
		});

		runNegativeTests('point', validPoints[1]);
	});
});
