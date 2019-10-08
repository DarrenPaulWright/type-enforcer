import { assert } from 'chai';
import { method, methodRegExp } from '../../../src';
import { regExpData as data } from '../../testValues';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.regExp', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodRegExp, method.regExp);
		});

		testMethodType({...data});
	});
});

