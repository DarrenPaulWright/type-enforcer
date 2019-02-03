import { assert } from 'chai';
import { Enum, method, methodEnum } from '../../../src';
import { testMethodType } from '../methodTestUtility';

describe('method', () => {
	describe('.enum', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodEnum, method.enum);
		});

		testMethodType({
			name: 'enum',
			true: ['test2', 'test3'],
			false: [],
			coerce: false,
			coerceTrue: [],
			extraProps: {
				enum: new Enum({
					test1: 'test1',
					test2: 'test2',
					test3: 'test3'
				})
			}
		});
	});
});

