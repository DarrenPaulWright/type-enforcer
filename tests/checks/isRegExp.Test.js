import { assert } from 'chai';
import { is, isRegExp } from '../../src';
import { multiTest, regExpData as data } from '../TestUtil';

describe('isRegExp', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isRegExp, is.regExp);
	});

	multiTest({
		values: data.true,
		test: (value) => isRegExp(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isRegExp(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isRegExp(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isRegExp(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isRegExp(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isRegExp(value, true),
		assertion: 'isFalse'
	});
});
