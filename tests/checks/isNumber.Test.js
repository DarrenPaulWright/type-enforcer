import { find } from 'lodash';
import { isNumber } from '../../src';
import { multiTest, testTypes } from '../TestUtil';

const data = find(testTypes, {name: 'number'});

describe('isNumber', () => {
	multiTest({
		values: data.true,
		test: (value) => isNumber(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isNumber(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isNumber(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isNumber(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isNumber(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isNumber(value, true),
		assertion: 'isFalse'
	});
});
