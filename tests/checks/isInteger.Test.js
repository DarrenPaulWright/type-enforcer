import { assert } from 'chai';
import { is, isInteger } from '../../src';
import { intData as data, multiTest } from '../TestUtil';

describe('isInteger', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isInteger, is.integer);
	});

	multiTest({
		values: data.true,
		test: (value) => isInteger(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isInteger(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isInteger(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isInteger(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isInteger(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isInteger(value, true),
		assertion: 'isFalse'
	});
});
