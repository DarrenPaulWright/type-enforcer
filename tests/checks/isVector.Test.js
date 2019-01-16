import { find } from 'lodash';
import { isVector } from '../../src';
import { multiTest, testTypes } from '../TestUtil';

const data = find(testTypes, {name: 'vector'});

describe('isVector', () => {
	multiTest({
		values: data.true,
		test: (value) => isVector(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isVector(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isVector(value),
		assertion: 'isFalse'
	});
	multiTest({
		values: data.true,
		test: (value) => isVector(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceTrue,
		test: (value) => isVector(value, true),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.coerceFalse,
		test: (value) => isVector(value, true),
		assertion: 'isFalse'
	});
});
