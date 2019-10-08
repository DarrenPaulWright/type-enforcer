import { assert } from 'chai';
import { method, methodString } from '../../../src';
import { stringData as data } from '../../testValues';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.string', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodString, method.string);
		});

		testMethodType({
			...data,
			init: ''
		});
	});
});

