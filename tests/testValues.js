import { testValues } from 'type-enforcer-test-helper';
import { Enum } from '../';

export const validEnumObject = new Enum({
	test1: Symbol(),
	test2: Symbol(),
	test3: Symbol()
});

export const validEnums = [validEnumObject.test1, validEnumObject.test2];

export const enumData = {
	name: 'enum',
	true: validEnums,
	false: testValues,
	coerceTrue: [],
	coerceFalse: []
};
