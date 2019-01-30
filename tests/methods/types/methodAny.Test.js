import { assert } from 'chai';
import { method, methodAny } from '../../../src';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.any', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodAny, method.any);
		});

		testMethodType({
			name: 'any',
			true: ['string', 123]
		});
	});
});
