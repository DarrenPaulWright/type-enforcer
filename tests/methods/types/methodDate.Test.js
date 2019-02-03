import { assert } from 'chai';
import { method, methodDate } from '../../../src';
import { dateData as data } from '../../testValues';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.date', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodDate, method.date);
		});

		testMethodType(Object.assign({}, data));
	});
});
