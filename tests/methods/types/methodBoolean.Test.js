import { assert } from 'chai';
import { method, methodBoolean } from '../../../src';
import { booleanData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.boolean', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodBoolean, method.boolean);
		});

		testMethodType(Object.assign({}, data, {
			init: false
		}));
	});
});
