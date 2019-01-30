import { isDockPoint } from '../../src';
import { dockPointData as data, multiTest } from '../TestUtil';

describe('isDockPoint', () => {
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
