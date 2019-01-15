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
});
