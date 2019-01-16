import { find } from 'lodash';
import { isArray } from '../../src';
import { multiTest, testTypes } from '../TestUtil';

const data = find(testTypes, {name: 'array'});

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
