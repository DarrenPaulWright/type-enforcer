import { isString } from '../../src';
import { multiTest, stringData as data } from '../TestUtil';

describe('isString', () => {
	multiTest({
		values: data.true,
		test: (value) => isString(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isString(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isString(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isString(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isString(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isString(value, true),
		assertion: 'isFalse'
	});
});
