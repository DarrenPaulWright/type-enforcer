import { assert } from 'chai';
import { is, isCssSize } from '../../src';
import { cssSizeData as data, multiTest } from '../TestUtil';

describe('isCssSize', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isCssSize, is.cssSize);
	});

	multiTest({
		values: data.true,
		test: (value) => isCssSize(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isCssSize(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isCssSize(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isCssSize(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isCssSize(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isCssSize(value, true),
		assertion: 'isFalse'
	});
});
