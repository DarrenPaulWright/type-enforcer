import { assert } from 'chai';
import { method, methodFloat } from '../../../src';
import { floatData as data } from '../../testValues';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.float', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodFloat, method.float);
		});

		testMethodType(Object.assign({}, data, {
			extraProps: {
				min: 1.2,
				max: 10.5
			},
			coerce: [{
				value: 30.874,
				coerced: 10.5
			}, {
				value: -3,
				coerced: 1.2
			}]
		}));
	});
});
