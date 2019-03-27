import { assert } from 'chai';
import { is, isInteger } from '../../src';
import { multiTest } from '../TestUtil';
import { integerData as data } from '../testValues';

describe('isInteger', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isInteger, is.integer);
	});

	it('should return false for NaN', () => {
		assert.isFalse(isInteger(NaN));
		assert.isFalse(isInteger(NaN), true);
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

	describe('coerce', () => {
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
});
