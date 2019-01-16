import { find } from 'lodash';
import { isFunc } from '../../src';
import { multiTest, testTypes } from '../TestUtil';

const data = find(testTypes, {name: 'func'});

describe('isFunc', () => {
	multiTest({
		values: data.true,
		test: (value) => isFunc(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isFunc(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isFunc(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isFunc(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isFunc(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isFunc(value, true),
		assertion: 'isFalse'
	});
});