import { assert } from 'chai';
import { method, methodInteger } from '../../../src';
import { integerData as data } from '../../testValues';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.integer', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodInteger, method.integer);
		});

		testMethodType({
			...data,
			extraProps: {
				min: 0,
				max: 10
			},
			coerce: [{
				value: 13,
				coerced: 10
			}, {
				value: -3,
				coerced: 0
			}]
		});
	});
});

