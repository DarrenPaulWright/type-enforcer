import { isBoolean } from '../../src';
import { boolData as data, multiTest } from '../TestUtil';

describe('isBoolean', () => {
	multiTest({
		values: data.true,
		test: (value) => isBoolean(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isBoolean(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isBoolean(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isBoolean(value, true),
		assertion: 'isFalse'
	});
});
