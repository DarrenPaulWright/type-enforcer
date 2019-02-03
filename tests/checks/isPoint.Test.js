import { assert } from 'chai';
import { is, isPoint } from '../../src';
import { multiTest } from '../TestUtil';
import { pointData as data } from '../testValues';

describe('isPoint', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isPoint, is.point);
	});

	multiTest({
		values: data.true,
		test: (value) => isPoint(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isPoint(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isPoint(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isPoint(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isPoint(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isPoint(value, true),
		assertion: 'isFalse'
	});
});
