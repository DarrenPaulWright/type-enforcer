import { assert } from 'chai';
import { method, methodElement } from '../../../src';
import { elementData as data } from '../../testValues';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.element', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodElement, method.element);
		});

		testMethodType(Object.assign({
			coerce: false
		}, data));
	});
});

