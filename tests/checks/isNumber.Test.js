import { assert } from 'chai';
import { is, isNumber } from '../../src';
import { multiTest, numberData as data } from '../TestUtil';

describe('isNumber', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isNumber, is.number);
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
