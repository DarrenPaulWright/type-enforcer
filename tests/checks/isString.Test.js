import { find } from 'lodash';
import { isString } from '../../src';
import { multiTest, testTypes } from '../TestUtil';

const data = find(testTypes, {name: 'string'});

describe('isString', () => {
	multiTest({
		values: data.true,
		test: (value) => isString(value),
		assertion: 'isTrue'
	});
	multiTest({
		values: data.false,
		test: (value) => isString(value),
		assertion: 'isFalse'
	});
});
