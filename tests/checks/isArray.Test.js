import { isArray } from '../../src';
import { arrayData as data, multiTest } from '../TestUtil';

describe('isArray', () => {
	multiTest({
		values: data.true,
		test: (value) => isArray(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isArray(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isArray(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isArray(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isArray(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isArray(value, true),
		assertion: 'isFalse'
	});
});
