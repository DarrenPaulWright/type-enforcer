import { assert } from 'chai';
import { is, isFloat } from '../../src';
import { multiTest } from '../TestUtil';
import { floatData as data } from '../testValues';

describe('isFloat', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isFloat, is.float);
	});

	it('should return false for NaN', () => {
		assert.isFalse(isFloat(NaN));
		assert.isFalse(isFloat(NaN), true);
	});

	multiTest({
		values: data.true,
		test(value) {
			return isFloat(value);
		},
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test(value) {
			return isFloat(value);
		},
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test(value) {
			return isFloat(value);
		},
		assertion: 'isFalse'
	});

	describe('coerce', () => {
		multiTest({
			values: data.true,
			test(value) {
				return isFloat(value, true);
			},
			assertion: 'isTrue'
		});
		multiTest({
			values: data.coerceTrue,
			test(value) {
				return isFloat(value, true);
			},
			assertion: 'isTrue'
		});
		multiTest({
			values: data.coerceFalse,
			test(value) {
				return isFloat(value, true);
			},
			assertion: 'isFalse'
		});
	});
});
