import { assert } from 'chai';
import { is, isDate } from '../../src';
import { multiTest } from '../TestUtil';
import { dateData as data } from '../testValues';

describe('isDate', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isDate, is.date);
	});

	multiTest({
		values: data.true,
		test(value) {
			return isDate(value);
		},
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test(value) {
			return isDate(value);
		},
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test(value) {
			return isDate(value);
		},
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test(value) {
			return isDate(value, true);
		},
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test(value) {
			return isDate(value, true);
		},
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test(value) {
			return isDate(value, true);
		},
		assertion: 'isFalse'
	});
});
