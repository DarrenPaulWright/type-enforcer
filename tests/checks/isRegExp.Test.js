import { isRegExp } from '../../src';
import { multiTest, regExpData as data } from '../TestUtil';

describe('isRegExp', () => {
	multiTest({
		values: data.true,
		test: (value) => isRegExp(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isRegExp(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isRegExp(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isRegExp(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isRegExp(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isRegExp(value, true),
		assertion: 'isFalse'
	});
});
