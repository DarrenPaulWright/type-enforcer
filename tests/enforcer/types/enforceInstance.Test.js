import { assert } from 'chai';
import { enforce, enforceInstance } from '../../../src';
import { runNegativeTests } from '../enforceTestUtility';

class TestClass {}

describe('enforce', () => {
	describe('.instance', () => {
		it('should exist in the exported "enforce" object', () => {
			assert.deepEqual(enforceInstance, enforce.instance);
		});

		it('should return the setter value when a valid Vector is provided', () => {
			assert.isTrue(enforce.instance(new TestClass(), TestClass, '') instanceof TestClass);
		});

		runNegativeTests('instance', new TestClass(), TestClass);
	});
});
