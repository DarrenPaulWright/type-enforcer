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
});
