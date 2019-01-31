import { assert } from 'chai';
import { enforce, enforceEnum, Enum } from '../../../src';
import { runNegativeTests } from '../enforceTestUtility';

const validEnumObject = new Enum({
	test1: 'test 1',
	test2: 'test 2',
	test3: 'test 3'
});
const validEnum1 = validEnumObject.test1;
const validEnum2 = validEnumObject.test2;

describe('enforce', () => {
	describe('.enum', () => {
		it('should exist in the exported "enforce" object', () => {
			assert.deepEqual(enforceEnum, enforce.enum);
		});

		it('should return the setter value when an array is provided', () => {
			assert.deepEqual(enforce.enum(validEnum1, validEnumObject, validEnum2), validEnum1);
			assert.notDeepEqual(enforce.enum(validEnum1, validEnumObject, validEnum2), validEnum2);
		});

		runNegativeTests('enum', validEnum2, validEnumObject);
	});
});
