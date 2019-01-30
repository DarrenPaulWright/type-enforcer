import { assert } from 'chai';
import { assign } from 'lodash';
import { method, methodElement } from '../../../src';
import { elementData as data } from '../../TestUtil';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.element', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodElement, method.element);
		});

		testMethodType(assign({
			coerce: false
		}, data));
	});
});

