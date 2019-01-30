import { assert } from 'chai';
import { is, isDate } from '../../src';
import { dateData as data, multiTest } from '../TestUtil';

describe('isDate', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isDate, is.date);
	});

	multiTest({
		values: data.true,
		test: (value) => isDate(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isDate(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isDate(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isDate(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isDate(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isDate(value, true),
		assertion: 'isFalse'
	});
});
