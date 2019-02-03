import { assert } from 'chai';
import { is, isObject } from '../../src';
import { multiTest } from '../TestUtil';
import { objectData as data } from '../testValues';

describe('isObject', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isObject, is.object);
	});

	multiTest({
		values: data.true,
		test: (value) => isObject(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isObject(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isObject(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isObject(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isObject(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isObject(value, true),
		assertion: 'isFalse'
	});
});
