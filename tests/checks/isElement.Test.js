import { assert } from 'chai';
import { is, isElement } from '../../src';
import { multiTest } from '../TestUtil';
import { elementData as data } from '../testValues';

describe('isElement', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isElement, is.element);
	});

	multiTest({
		values: data.true,
		test(value) {
			return isElement(value);
		},
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test(value) {
			return isElement(value);
		},
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test(value) {
			return isElement(value, true);
		},
		assertion: 'isTrue'
	});
});
