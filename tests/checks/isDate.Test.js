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
});
