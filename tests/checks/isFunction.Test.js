import { assert } from 'chai';
import { is, isFunction } from '../../src';
import { multiTest } from '../TestUtil';
import { functionData as data } from '../testValues';

describe('isFunction', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isFunction, is.function);
	});

	multiTest({
		values: data.true,
		test: (value) => isFunction(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isFunction(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isFunction(value, true),
		assertion: 'isTrue'
	});
});
