import { assert } from 'chai';
import { assign } from 'lodash';
import { method, methodString } from '../../../src';
import { stringData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.string', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodString, method.string);
		});

		testMethodType(assign({}, data, {
			init: ''
		}));
	});
});

