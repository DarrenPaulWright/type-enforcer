import { assert } from 'chai';
import { is, isBoolean } from '../../src';
import { multiTest } from '../TestUtil';
import { booleanData as data } from '../testValues';

describe('isBoolean', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isBoolean, is.boolean);
	});

	multiTest({
		values: data.true,
		test(value) {
			return isBoolean(value);
		},
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test(value) {
			return isBoolean(value);
		},
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test(value) {
			return isBoolean(value, true);
		},
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test(value) {
			return isBoolean(value, true);
		},
		assertion: 'isFalse'
	});
});
