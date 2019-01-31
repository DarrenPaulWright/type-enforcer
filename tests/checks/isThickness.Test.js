import { assert } from 'chai';
import { is, isThickness } from '../../src';
import { multiTest, thicknessData as data } from '../TestUtil';

describe('isThickness', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isThickness, is.thickness);
	});

	multiTest({
		values: data.true,
		test: (value) => isThickness(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isThickness(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isThickness(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isThickness(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isThickness(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isThickness(value, true),
		assertion: 'isFalse'
	});
});
