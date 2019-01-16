import { find } from 'lodash';
import { isInt } from '../../src';
import { multiTest, testTypes } from '../TestUtil';

const data = find(testTypes, {name: 'int'});

describe('isInt', () => {
	multiTest({
		values: data.true,
		test: (value) => isInt(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isInt(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isInt(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isInt(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isInt(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isInt(value, true),
		assertion: 'isFalse'
	});
});
