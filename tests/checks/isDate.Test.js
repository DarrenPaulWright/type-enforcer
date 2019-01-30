import { isDate } from '../../src';
import { dateData as data, multiTest } from '../TestUtil';

describe('isDate', () => {
	multiTest({
		values: data.true,
		test: (value) => isDate(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isDate(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isDate(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isDate(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isDate(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isDate(value, true),
		assertion: 'isFalse'
	});
});
