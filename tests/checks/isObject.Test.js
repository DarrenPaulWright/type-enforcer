import { find } from 'lodash';
import { isObject } from '../../src';
import { multiTest, testTypes } from '../TestUtil';

const data = find(testTypes, {name: 'object'});

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
});
