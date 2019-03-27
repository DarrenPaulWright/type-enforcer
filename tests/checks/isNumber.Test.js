import { assert } from 'chai';
import { is, isNumber } from '../../src';
import { multiTest } from '../TestUtil';
import { numberData as data } from '../testValues';

describe('isNumber', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isNumber, is.number);
	});

	it('should return false for NaN', () => {
		assert.isFalse(isNumber(NaN));
		assert.isFalse(isNumber(NaN), true);
	});

	multiTest({
		values: data.true,
		test: (value) => isNumber(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isNumber(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isNumber(value),
		assertion: 'isFalse'
	});

	describe('coerce', () => {
		multiTest({
			values: data.true,
			test: (value) => isNumber(value, true),
			assertion: 'isTrue'
		});
		multiTest({
			values: data.coerceTrue,
			test: (value) => isNumber(value, true),
			assertion: 'isTrue'
		});
		multiTest({
			values: data.coerceFalse,
			test: (value) => isNumber(value, true),
			assertion: 'isFalse'
		});
	});
});
