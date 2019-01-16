import { find } from 'lodash';
import { isDate } from '../../src';
import { multiTest, testTypes } from '../TestUtil';

const data = find(testTypes, {name: 'date'});

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
