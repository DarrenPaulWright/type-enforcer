import { assert } from 'chai';
import { is, isArray } from '../../src';
import { multiTest } from '../TestUtil';
import { arrayData as data } from '../testValues';

describe('isArray', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isArray, is.array);
	});

	multiTest({
		values: data.true,
		test(value) {
			return isArray(value);
		},
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test(value) {
			return isArray(value);
		},
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test(value) {
			return isArray(value);
		},
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test(value) {
			return isArray(value, true);
		},
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test(value) {
			return isArray(value, true);
		},
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test(value) {
			return isArray(value, true);
		},
		assertion: 'isFalse'
	});
});
