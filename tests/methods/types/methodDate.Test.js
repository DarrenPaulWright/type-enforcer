import { assert } from 'chai';
import { assign } from 'lodash';
import { method, methodDate } from '../../../src';
import { dateData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.date', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodDate, method.date);
		});

		testMethodType(assign({}, data));
	});
});
