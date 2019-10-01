import { assert } from 'chai';
import { is, isDockPoint } from '../../src';
import { multiTest } from '../TestUtil';
import { dockPointData as data } from '../testValues';

describe('isDockPoint', () => {
	it('should exist in the exported "is" object', () => {
		assert.deepEqual(isDockPoint, is.dockPoint);
	});

	multiTest({
		values: data.true,
		test(value) {
			return isDockPoint(value);
		},
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test(value) {
			return isDockPoint(value);
		},
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test(value) {
			return isDockPoint(value);
		},
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test(value) {
			return isDockPoint(value, true);
		},
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test(value) {
			return isDockPoint(value, true);
		},
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test(value) {
			return isDockPoint(value, true);
		},
		assertion: 'isFalse'
	});
});
