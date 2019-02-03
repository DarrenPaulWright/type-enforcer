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
		test: (value) => isDockPoint(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isDockPoint(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isDockPoint(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isDockPoint(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isDockPoint(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isDockPoint(value, true),
		assertion: 'isFalse'
	});
});
