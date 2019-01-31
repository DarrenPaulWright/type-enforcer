import { assert } from 'chai';
import { is, isElement } from '../../src';
import { elementData as data, multiTest } from '../TestUtil';

describe('isElement', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isElement, is.element);
	});

	multiTest({
		values: data.true,
		test: (value) => isElement(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isElement(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isElement(value, true),
		assertion: 'isTrue'
	});
});
