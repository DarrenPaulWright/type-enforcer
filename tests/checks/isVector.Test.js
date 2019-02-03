import { assert } from 'chai';
import { is, isVector } from '../../src';
import { multiTest } from '../TestUtil';
import { vectorData as data } from '../testValues';

describe('isVector', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isVector, is.vector);
	});

	multiTest({
		values: data.true,
		test: (value) => isVector(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isVector(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isVector(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isVector(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isVector(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isVector(value, true),
		assertion: 'isFalse'
	});
});
