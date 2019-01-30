import { assert } from 'chai';
import { assign } from 'lodash';
import { method, methodFunction } from '../../../src';
import { functionData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.function', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodFunction, method.function);
		});

		testMethodType(assign({
			coerce: false
		}, data));
	});
});

