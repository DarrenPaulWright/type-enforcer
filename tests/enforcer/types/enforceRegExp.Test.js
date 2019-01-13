import { assert } from 'chai';
import { enforce } from '../../../src';
import { validRegExps } from '../../TestUtil';
import { runNegativeTests } from '../enforceTestUtility';

describe('enforce', () => {
	describe('.regExp', () => {
		it('should return the setter value when a RegExp is provided', () => {
			assert.deepEqual(enforce.regExp(validRegExps[1], validRegExps[0]), validRegExps[1]);
			assert.notDeepEqual(enforce.regExp(validRegExps[1], validRegExps[0]), validRegExps[0]);
		});

		runNegativeTests('regExp', validRegExps[1]);
	});
});
