import { isInteger } from '../../src';
import { intData as data, multiTest } from '../TestUtil';

describe('isInteger', () => {
	multiTest({
		values: data.true,
		test: (value) => isInteger(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isInteger(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isInteger(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isInteger(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isInteger(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isInteger(value, true),
		assertion: 'isFalse'
	});
});
