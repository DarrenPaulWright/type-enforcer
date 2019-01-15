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
});
