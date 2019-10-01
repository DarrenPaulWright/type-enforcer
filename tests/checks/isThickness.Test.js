import { assert } from 'chai';
import { is, isThickness } from '../../src';
import { multiTest } from '../TestUtil';
import { thicknessData as data } from '../testValues';

describe('isThickness', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isThickness, is.thickness);
	});

	multiTest({
		values: data.true,
		test(value) {
			return isThickness(value);
		},
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test(value) {
			return isThickness(value);
		},
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test(value) {
			return isThickness(value);
		},
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test(value) {
			return isThickness(value, true);
		},
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test(value) {
			return isThickness(value, true);
		},
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test(value) {
			return isThickness(value, true);
		},
		assertion: 'isFalse'
	});
});
