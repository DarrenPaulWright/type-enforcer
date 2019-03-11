import { assert } from 'chai';
import { is, isFloat } from '../../src';
import { multiTest } from '../TestUtil';
import { floatData as data } from '../testValues';

describe('isFloat', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isFloat, is.float);
	});

	multiTest({
		values: data.true,
		test: (value) => isFloat(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isFloat(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isFloat(value),
		assertion: 'isFalse'
	});

	describe('coerce', () => {
		multiTest({
			values: data.true,
			test: (value) => isFloat(value, true),
			assertion: 'isTrue'
		});
		multiTest({
			values: data.coerceTrue,
			test: (value) => isFloat(value, true),
			assertion: 'isTrue'
		});
		multiTest({
			values: data.coerceFalse,
			test: (value) => isFloat(value, true),
			assertion: 'isFalse'
		});
	});
});
