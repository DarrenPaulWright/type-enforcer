import { assert } from 'chai';
import { method, methodInstance } from '../../../src';
import { testMethodType } from '../methodTestUtility';

class TestClass {}

describe('method', () => {
	describe('.instance', () => {
		it('should exist in the exported "method" object', () => {
			assert.deepEqual(methodInstance, method.instance);
		});

		testMethodType({
			name: 'instance',
			true: [new TestClass(), new TestClass()],
			false: [],
			coerceTrue: [],
			coerce: false,
			extraProps: {
				instance: TestClass
			}
		});
	});
});

