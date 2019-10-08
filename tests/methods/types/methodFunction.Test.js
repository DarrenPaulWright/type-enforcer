import { assert } from 'chai';
import { method, methodFunction } from '../../../src';
import { functionData as data } from '../../testValues';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.function', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodFunction, method.function);
		});

		testMethodType({
			coerce: false,
			...data
		});
	});
});

