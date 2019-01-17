import { isObject } from '../../src';
import { multiTest, objectData as data } from '../TestUtil';

describe('isObject', () => {
	multiTest({
		values: data.true,
		test: (value) => isObject(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isObject(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isObject(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isObject(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isObject(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isObject(value, true),
		assertion: 'isFalse'
	});
});
