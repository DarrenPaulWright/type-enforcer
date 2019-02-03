import { assert } from 'chai';
import { is, isString } from '../../src';
import { multiTest } from '../TestUtil';
import { stringData as data } from '../testValues';

describe('isString', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isString, is.string);
	});

	multiTest({
		values: data.true,
		test: (value) => isString(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isString(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isString(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isString(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isString(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isString(value, true),
		assertion: 'isFalse'
	});
});
