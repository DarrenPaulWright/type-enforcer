import { assert } from 'chai';
import { assign } from 'lodash';
import { method, methodBoolean } from '../../../src';
import { boolData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.boolean', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodBoolean, method.boolean);
		});

		testMethodType(assign({}, data, {
			init: false
		}));
	});
});

